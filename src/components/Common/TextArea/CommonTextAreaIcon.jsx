import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonTextAreaIcon.scss"
import {
    Row,
    Col,
    Upload, 
    message,
} from "antd"
import { 
    LoadingOutlined, 
    PlusOutlined, 
} from '@ant-design/icons';

class CommonTextAreaIcon extends Component{

    state = {
        loading:false,
    }

    render(){
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
        const {loading} = this.state;
        const {uploadAction} = this.props.SystemConfigData;
        return (
            <>
                <div className="CommonTextAreaIconComponent">
                    <Row className="row_one">
                        <Col span={24} className="row_one_col_one">
                            {title}
                        </Col>
                    </Row>
                    <Row className="row_two">
                        <Col span={24} className="row_two_col_one">
                            <Upload
                                name="img"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action={uploadAction}
                                beforeUpload={
                                    (file)=>{
                                        const fileType = file.type === 'image/jpeg' || file.type === 'image/png';
                                        if (!fileType) {
                                            message.error('只能上传JPG/PNG文件!')
                                        }
                                        const sizeLimit = file.size / 1024 / 1024 < 10;
                                        if (!sizeLimit) {
                                            message.error('图片大小不能超过10M!')
                                        }
                                        return fileType && sizeLimit;
                                    }
                                }
                                onChange={
                                    (info)=>{
                                        if (info.file.status === 'uploading') {
                                            this.setState({ loading: true });
                                            return;
                                        }
                                        if (info.file.status === 'done') {
                                            // Get this url from response in real world.
                                            const {code,data:imageUrl,msg} = info.file.response;
                                            if( parseInt(code) === 200 ){
                                                this.setState({
                                                    loading : false,
                                                })
                                                const Obj = {[name]:{
                                                    title,
                                                    type,
                                                    value:imageUrl,
                                                    name,
                                                    options,
                                                    placeholder,
                                                }}
                                                //保存图片
                                                set_form_data(Obj)
                                                return message.success(msg);
                                            }
                                            return message.error(msg)
                                        }
                                    }
                                }
                            >
                                {
                                    value 
                                    ? 
                                    (<img src={value} alt="avatar"/>) 
                                    : 
                                    (
                                        <div>
                                            {
                                                loading 
                                                ? 
                                                (<LoadingOutlined />) 
                                                : 
                                                (<PlusOutlined />)
                                            }
                                            <div style={{ marginTop: 8 }}>上传图片</div>
                                        </div>
                                    )
                                }
                            </Upload>
                        </Col>
                    </Row>
                </div>
            </>

        )
    }

}

export default connect(
    store=>({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter(CommonTextAreaIcon) );