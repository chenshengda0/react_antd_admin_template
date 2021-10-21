import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeComponentsCommonButton.scss"
import {
    Row,
    Col,
    Button,
} from "antd"

class HomeComponentsCommonButton extends Component{

    to_submite_form = ()=>{
        this.props.to_submite_form();
    } 

    render(){
        const {
            comment="提交",
            to_submite_form = ()=>{
                this.props.to_submite_form();
            },
        } = this.props;
        return (
            <>
                <div className="HomeComponentsCommonButtonComponent">
                    <Row className="content">
                        <Col span={4} className="content_row_one">
                        
                        </Col>
                        <Col span={8} className="content_row_two">
                        
                        </Col>
                        <Col span={12} className="content_row_three">
                            <Button className="content_row_three_btn" type="primary" shape="round" onClick={()=>to_submite_form()}>{comment}</Button>
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
)( withRouter( HomeComponentsCommonButton ) )