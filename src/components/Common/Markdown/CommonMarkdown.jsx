import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonMarkdown.scss"
//import ReactMarkdown from 'react-markdown'
//import rehypeHighlight from 'rehype-highlight'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

class CommonMarkdown extends Component{

    render(){
        return (
            <>
                <Editor
                    initialValue='# Your markdown here'
                    previewStyle="vertical"
                    height="800px"
                    initialEditType="markdown"
                    useCommandShortcut={false}
                />
                {/*
                <ReactMarkdown>{'# Your markdown here'}</ReactMarkdown>
                */}
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter( CommonMarkdown ) );