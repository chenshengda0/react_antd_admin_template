import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonCollapseItemsSearch.scss"
import {
    Row,
    Col,
} from "antd"
import {
    CommonCollapseItemsInputTextComponent,
    CommonCollapseItemsInputSubmiteComponent,
} from "./Input"

class CommonCollapseItemsSearch extends Component{

    render(){
        const {
            searchData = {
                account:{
                    name : "account",
                    value : "",
                    title : "账号",
                    placeholder : "请输入要搜索的账号",
                },
                age:{
                    name : "age",
                    value : "",
                    title : "年龄",
                    placeholder : "请输入要搜索的年龄",
                }
            },
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj);
            },
            toHandle = ()=>{
                this.props.toHandle();
            }
        } = this.props;
        const searchArr = Object.values(searchData);
        return (
            <>
                <div className="CommonCollapseItemsSearchComponent">
                    <Row>
                        {
                            searchArr.map( (item)=>{
                                return (
                                    <Col span={8} key={item.name}>
                                        <CommonCollapseItemsInputTextComponent {...Object.assign(
                                            {},
                                            {
                                                ...item,
                                            },
                                            {
                                                set_form_data,
                                            }
                                        )}></CommonCollapseItemsInputTextComponent>
                                    </Col>
                                )
                            } )
                        }
                    </Row>
                    <Row>
                    <Col span={24}>
                            <CommonCollapseItemsInputSubmiteComponent {...Object.assign(
                                {},
                                {
                                    placeholder : "搜索",
                                },
                                {
                                    toHandle,
                                }
                            )}></CommonCollapseItemsInputSubmiteComponent>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }

}

export default connect(
    store=>({
        SystemConfigData : store.SystemConfigData,
    }),{
        
    }
)( withRouter(CommonCollapseItemsSearch) );