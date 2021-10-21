import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonEditor.scss"
import BraftEditor from "braft-editor"
import "braft-editor/dist/index.css"

class CommonEditor extends Component{

    state = {
        editorState: null
    }

    componentDidMount () {
        const {
            value = "",
        } = this.props;
        // Assume here to get the editor content in html format from the server
        // Use BraftEditor.createEditorState to convert html strings to editorState data needed by the editor
        this.setState({
          editorState: BraftEditor.createEditorState(value)
        })
    }
    
    handleEditorChange = (editorState) => {
        const {
            name = "editor",
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj);
            }
        } = this.props;
        this.setState({ editorState })
        const htmlContent = editorState.toHTML();
        set_form_data({[name]:htmlContent})
    }

    render(){
        return (
            <>
                <div className="CommonEditorComponent">
                    <BraftEditor
                        className="editorDiv"
                        value={this.state.editorState}
                        onChange={this.handleEditorChange}
                    />
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
)( withRouter( CommonEditor ) );