import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import CommonTextAreaIcon from "./CommonTextAreaIcon"
import CommonTextAreaNumber from "./CommonTextAreaNumber"
import CommonTextAreaSelect from "./CommonTextAreaSelect"
import CommonTextAreaSwitch from "./CommonTextAreaSwitch"
import CommonTextAreaText from "./CommonTextAreaText"
import CommonTextAreaTime from "./CommonTextAreaTime"

class CommonTextArea extends Component{

    renderComponent = ()=>{
        const {
            title="名字",
            type="text",
            value="",
            name="name",
            placeholder="请输入名字",
            options = [],
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj);
            }
        } = this.props;
        const sonParam = Object.assign({},{
            title,
            type,
            value,
            name,
            placeholder,
            options,    
        },{
            set_form_data,
        })
        switch(type){
            case "icon":
                return (
                    <CommonTextAreaIcon {...sonParam}></CommonTextAreaIcon>
                );

            case "number":
                return (
                    <CommonTextAreaNumber {...sonParam}></CommonTextAreaNumber>
                );

            case "select":
                return (
                    <CommonTextAreaSelect {...sonParam}></CommonTextAreaSelect>
                );

            case "switch":
                return (
                    <CommonTextAreaSwitch {...sonParam}></CommonTextAreaSwitch>
                );

            case "time":
                return (
                    <CommonTextAreaTime {...sonParam}></CommonTextAreaTime>
                );

            default:
                return (
                    <CommonTextAreaText {...sonParam}></CommonTextAreaText> 
                );

        }
    }

    render(){
        return (
            <>
                <div className="CommonTextAreaComponent">
                    {
                        this.renderComponent()
                    }
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
)( withRouter( CommonTextArea ) );
