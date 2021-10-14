import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    WithContentTempContainer,
} from "../../../container"
import {
    CommonEditorComponent,
    CommonEditorHtmlComponent,
} from "../../../components/Common"
import {
    Row,
    Col,
} from "antd"


class EditorText extends Component{

    state = {
        editor : "",
    }

      
    render(){
        const {
            editor,
        } = this.state;
        return (
            <>
                <div>
                    <Row>
                        <Col span={24}>
                            <CommonEditorComponent {...Object.assign(
                                {},
                                {
                                    name : "editor",
                                    value:editor,
                                },
                                {
                                    set_form_data : (Obj)=>{
                                        this.setState({...Obj});
                                    }
                                }
                            )}></CommonEditorComponent>
                        </Col>
                        <Col span = {24}>
                            <CommonEditorHtmlComponent {...Object.assign(
                                {},
                                {
                                    editorHtml : editor,
                                }
                            )}>

                            </CommonEditorHtmlComponent>
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
)( withRouter( WithContentTempContainer( EditorText ) )  )