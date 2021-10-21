import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonCollapseItemsInputSubmite.scss"
import {
    Row,
    Col,
    Button,
} from "antd"
import { SearchOutlined } from '@ant-design/icons';

class CommonCollapseItemsInputSubmite extends Component{

    render(){
        const {
            placeholder = "搜索",
            toHandle = ()=>{
                this.props.toHandle();
            }
        } = this.props;
        return (
            <>
                <div className="CommonCollapseItemsInputSubmiteComponent">
                    <Row className="content">
                        <Col span={24} className="content_col_one">
                            <Button type="primary" icon={<SearchOutlined />} className="content_col_one_text" onClick={()=>{
                                toHandle();
                            }}>
                                {placeholder}
                            </Button>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter( CommonCollapseItemsInputSubmite ) )