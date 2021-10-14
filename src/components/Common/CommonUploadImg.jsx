import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import { 
    Upload, 
    message,
    Row,
    Col, 
} from 'antd';
import { 
    LoadingOutlined, 
    PlusOutlined, 
} from '@ant-design/icons';
import "./CommonUploadImg.scss"

class CommonUploadImg extends Component {
    state = {
        loading : false,
        imageUrl : "",
    };

    beforeUpload = (file)=>{
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

    onHandleChange = (name,info)=>{
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
                //保存图片
                this.props.save_img(name,imageUrl);
                return message.success(msg);
            }
            return message.error(msg)
        }
    }

    render() {
        const { 
            loading,
        } = this.state;
        const {
            imageUrl = "",
            name = "headImg",//标识对应哪个图片
            title = "上传头像",
        } = this.props;
        const {uploadAction} = this.props.SystemConfigData;
        return (
            <>
                <div className="CommonUploadImgComponent">
                    <Row className="row_one">
                        <Col span={24} className="row_one_content">
                            {title}
                        </Col>
                    </Row>
                    <Row className="row_two">
                        <Col span={24} className="row_two_content">
                            <Upload
                                name="img"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action={uploadAction}
                                beforeUpload={(file)=>this.beforeUpload(file)}
                                onChange={(param)=>this.onHandleChange(name,param)}
                            >
                                {
                                    imageUrl 
                                    ? 
                                    (<img src={imageUrl} alt="avatar"/>) 
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

        );
    }
}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter(CommonUploadImg) );