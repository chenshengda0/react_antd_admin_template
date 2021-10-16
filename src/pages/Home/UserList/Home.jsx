import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    WithContentTempContainer,
    WithUserListPageContainer,
} from "../../../container"
import {
    Row,
    Col,
    message,
} from "antd"
import {
    CommonPaginationComponent,
    CommonMiniPaginationComponent,
    CommonCollapseComponent,
    CommonTableComponent,
} from "../../../components/Common"
import {
    SetUserListDataAction,
} from "../../../redux/actions"
class Home extends Component{

    state = {
        searchData : {
            searchAge:{
                name : "searchAge",
                value : "",
                title : "年龄",
                placeholder : "请输入要搜索的年龄",
            },
            searchRegion:{
                name : "searchRegion",
                value : "",
                title : "区域",
                placeholder : "请输入要搜索的区域",
            },
            searchProvince:{
                name : "searchProvince",
                value : "",
                title : "省份",
                placeholder : "请输入要搜索的省份",
            },
            searchCounty:{
                name : "searchCounty",
                value : "",
                title : "城市",
                placeholder : "请输入要搜索的城市",
            },
        },
        page : 1,
        pageSize : 10,
        selectedRowKeys:[],
        popColumnsObj:{},
        mockFileds:[],
        //穿梭框
        targetKeys:[

        ],
        selectedKeys:[

        ],
    }

    componentWillUnmount(){
        this.setState = ()=>false;
    }

    async componentDidMount(){
        const {pageOptions} = this.props.SystemConfigData;
        const currentSelect = Object.values(pageOptions).find( item=>item.isSelect ) || Object.values(pageOptions)[0]
        const pageSize = currentSelect.value;
        this.setState({pageSize})
        const res = await this.props.SetUserListDataAction({page:1,pageSize});
        message.success(res);
        const mockFileds = [
            {
                title: '账号',
                dataIndex: 'account',
                width:30,
                key:"account",
            },
            {
                title: '头像',
                dataIndex: 'header',
                key:"header",
                width:30,
                render : (text)=>{
                    return (<img src={text} alt="" width="30" height="30" />)
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key:"age",
                width:30,
            },
            {
                title: '区域',
                dataIndex: 'region',
                key:'region',
                width:30,
            },
            {
                title: '省',
                dataIndex: 'province',
                key:'province',
                width:30,
            },
            {
                title: '区',
                dataIndex: 'county',
                key:'county',
                width:30,
            },
            {
                title: '推荐码',
                dataIndex: 'invit',
                key:'invit',
                width:30,
            },
            {
                title: '创建时间',
                dataIndex: 'create_time',
                key:'create_time',
                width:50,
            },
        ];
        this.setState({mockFileds});
        const targetKeys = mockFileds.filter(item => item.key ).map(item => item.key);
        this.setState({targetKeys});
        //设置显示的字段
        const popColumnsObj = targetKeys.reduce( (prev,item)=>{
            const current = mockFileds.find( row => row.key === item );
            return {...prev,[current.key]:current}
        },{} )
        this.setState({popColumnsObj},()=>{
            console.log( this.state )
        });

    }

    render(){
        const {
            searchData,
            page,
            pageSize,
            selectedRowKeys,
            popColumnsObj,
            mockFileds,
            targetKeys,
            selectedKeys,
        } = this.state;
        const {
            listCount,
            localList,
        } = this.props.UserListData;
        return (
            <>
                <Row>
                    <Col span={24}>
                        <CommonCollapseComponent
                        //搜索
                        {...Object.assign(
                            {},
                            {
                                searchData,
                            },
                            {
                                set_form_data : (Obj)=>{
                                    const current = {...searchData,...Obj}
                                    this.setState({searchData:current});
                                },
                                toHandle : window.debounce(async()=>{
                                    //获取请求数据
                                    const {searchData,pageSize} = this.state;
                                    const searchParam = Object.values(searchData).reduce( (prev,item)=>{
                                        return {...prev,[item.name]:item.value}
                                    } ,{page:1,pageSize})
                                    //把当前页修改为1
                                    this.setState({page:1});
                                    const res = await this.props.SetUserListDataAction(searchParam);
                                    res && message.success(res);
                                },2000),
                            }
                        )}
                        //导出框
                        {...Object.assign(
                            {},
                            {
                                dataSource:localList,
                                popColumnsObj,
                                selectedRowKeys,
                            },
                            {
                                //选中
                                toSelectedRowKeys : (param={selectedRowKeys:[]})=>{
                                    console.log(param);
                                    this.setState({...param},()=>{
                                        console.log(this.state);
                                    })
                                }
                            }
                        )}
                        //穿梭框 
                        {...Object.assign(
                            {},
                            {
                                //穿梭框
                                mockData:mockFileds,
                                targetKeys,
                                selectedKeys,
                            },
                            {
                                transferChange : async(Obj)=>{
                                    await this.setState({...Obj});
                                    //重置选中的字段
                                    const {targetKeys:currentTargetKeys} = this.state;
                                    const popColumnsObj = currentTargetKeys.reduce( (prev,item)=>{
                                        const current = mockFileds.find( row => row.key === item );
                                        return {...prev,[current.key]:current}
                                    },{} )
                                    this.setState({popColumnsObj},()=>{
                                        console.log( this.state )
                                    });
                                },
                            }
                        )}></CommonCollapseComponent>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <CommonMiniPaginationComponent {...Object.assign(
                            {},
                            {
                                page,
                                total:listCount,
                                pageSize,
                            },
                            {
                                toChangePage : window.debounce(async(Obj)=>{
                                    //设置页面数据
                                    this.setState({...Obj});
                                    //更新数据
                                    const {searchData} = this.props.UserListData;
                                    const param = {...searchData,...Obj};
                                    const res = await this.props.SetUserListDataAction(param);
                                    message.success(res);
                                },1000)
                            }
                        )}></CommonMiniPaginationComponent>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <CommonTableComponent {...Object.assign(
                            {},
                            {
                                total:listCount,
                                selectedRowKeys,
                                dataSource:localList,
                                popColumnsObj,
                            },
                            {
                                //选中
                                toSelectedRowKeys : (selectedRowKeys)=>{
                                    this.setState({selectedRowKeys},()=>{
                                        console.log(this.state);
                                    })

                                }
                            }
                        )}></CommonTableComponent>
                    </Col>
                </Row>
                {/*分页*/}
                <Row>
                    <Col span={24}>
                        <CommonPaginationComponent {...Object.assign(
                            {},
                            {
                                page,
                                total:listCount,
                                pageSize,
                            },{
                                toChangePage : window.debounce(async(Obj)=>{
                                    //设置页面数据
                                    this.setState({...Obj});
                                    //更新数据
                                    const {searchData} = this.props.UserListData;
                                    const param = {...searchData,...Obj};
                                    const res = await this.props.SetUserListDataAction(param);
                                    message.success(res);
                                },1000)
                            }
                        )}></CommonPaginationComponent>
                    </Col>
                </Row>
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        UserListData : store.UserListData,
    }),{
        SetUserListDataAction,
    }
)(  withRouter( WithContentTempContainer(  WithUserListPageContainer(Home)  ) )  );