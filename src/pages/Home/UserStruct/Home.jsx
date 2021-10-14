import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    WithContentTempContainer,
    WithUserStructPageContainer,
} from "../../../container"
import {
    HomeUserStructImageComponent,
    HomeUserStructSearchFormComponent,
} from "../../../components/Home/UserStruct"
import {
    Row,
    Col,
    message,
} from "antd"

class Home extends Component{

    state = {
        showList : [],
        searchAccount : {
            title : "账号",
            name : "searchAccount",
            value : "",
            placeholder : "请输入要搜索的账号",
            type : "text",
        },
        searchInvit : {
            title : "邀请码",
            name : "searchInvit",
            value : "",
            placeholder : "请输入要搜索的邀请码",
            type : "text",
        },
    }

    async componentDidMount(){
        //初始化会员数据

        const {UserStructData:showList} = this.props;
        this.setState({showList},()=>{
            console.log(this.state)
        });
    }

    to_search = ()=>{
        try{
            const {
                searchAccount,
                searchInvit,
            } = this.state;
            const {UserStructData} = this.props;
            let current = {};
            if( searchAccount.value &&  searchInvit.value){
                current = UserStructData.find( item => item.account === searchAccount.value &&  item.invit === searchInvit.value) || false;
            }else if(searchAccount.value){
                current = UserStructData.find( item => item.account === searchAccount.value) || false;
            }else if(searchInvit.value){
                current = UserStructData.find( item => item.invit === searchInvit.value) || false;
            }else{
                throw new Error("请输入要搜索的参数");
            }
            if( !current ){
                throw new Error(`${searchAccount['value']} ${searchInvit['value']}`);
            }
            //修改path
            const re2 = new RegExp(`${current.path}`);
            const showList =  UserStructData.reduce( (prev,item)=>{
                const re1 = new RegExp(`-${item.id}-`);
                return re1.test(current.path) || re2.test(item.path) ? [...prev,item] : prev;
            } ,[])
            this.setState({showList},()=>{
                console.log( this.state )
            });
        }catch(err){
            return message.error(err.message)
        }
    }

    render(){
        const {
            showList,
            searchAccount,
            searchInvit,
        } = this.state;
        return (
            <>
                <Row>
                    <Col span={24}>
                        <HomeUserStructSearchFormComponent {...Object.assign(
                            {},
                            {
                                searchData : {
                                    searchAccount,
                                    searchInvit,
                                }
                            },
                            {
                                set_form_data : (Obj)=>{
                                    this.setState({...Obj})
                                },
                                to_search : window.debounce((param)=>{
                                    this.to_search(param);
                                },2000)
                            }
                        )}></HomeUserStructSearchFormComponent>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <HomeUserStructImageComponent {...Object.assign(
                            {},
                            {
                                showList,
                            }
                        )}></HomeUserStructImageComponent>
                    </Col>
                </Row>
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        UserStructData : store.UserStructData,
    }),{

    }
)( withRouter( WithContentTempContainer( WithUserStructPageContainer(Home) ) ) )