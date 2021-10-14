import {Component} from "react"
import "./HomeCommonLogo.scss"
import {Row,Col} from "antd"
import {
    WithComponentCommonContainer,
} from "../../../container"

class HomeCommonLogo extends Component{

    render(){
        const {icons,title} = this.props.SystemConfigData;
        const {collapsed} = this.props;
        return (
            <>
                <div className="HomeCommonLogoComponent">
                    {
                        collapsed 
                        ?
                        (
                            <Row className="row_one">
                                <Col span={24} className="row_one_col_one">
                                    <img src={icons.logoSvg} alt="" />
                                </Col>
                            </Row>
                        )
                        :
                        (
                            <Row className="row_one">
                                <Col span={8} className="row_one_col_one">
                                    <img src={icons.logoSvg} alt="" />
                                </Col>
                                <Col span={16} className="row_one_col_two">
                                    {title}
                                </Col>
                            </Row>
                        ) 
                    }

                </div>
            </>
        )
    }

}

export default WithComponentCommonContainer( HomeCommonLogo );