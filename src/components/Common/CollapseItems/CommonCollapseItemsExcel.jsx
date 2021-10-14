import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonCollapseItemsExcel.scss"
import {
    Row,
    Col,
    Input,
    Button,
    message,
} from "antd"
//import {saveAs} from "file-saver"
import ExportJsonExcel from "js-export-excel"

class CommonCollapseItemsExcel extends Component{

    state = {
        filename: "",
    }


    //导出选中项
    downloadSelectFileToExcel = () => {
        try{
            let dataTable = [];  //excel文件中的数据内容
            const option = {};  //option代表的就是excel文件
            const {filename} = this.state;
            const {
                dataSource=[
                    {id:1,title:"123"},
                    {id:2,title:"1234"},
                    {id:3,title:"12345"},
                    {id:4,title:"123456"},
                    {id:5,title:"1234567"},
                    {id:6,title:"12345678"},
                ],
                popColumnsObj={},
                selectedRowKeys=[],
                toSelectedRowKeys = (param={selectedRowKeys:[]})=>{
                    this.props.toSelectedRowKeys(param);
                }
            } = this.props;
            const localColumnsObj = {
                id : {
                    title: 'ID',
                    dataIndex: 'key',
                    fixed : "left",
                    width:20,
                    sorter: (a, b) => parseInt(a.key) - parseInt(b.key),
                },
                ...popColumnsObj,
            }
            dataTable  = selectedRowKeys.reduce( (prev,item) => {
                return dataSource.find( row => parseInt(row.id) === parseInt(item) ) ? [...prev,dataSource.find( row => parseInt(row.id) === parseInt(item) )]:prev;
            } ,[])
            if( dataTable.length === 0 ){
                throw new Error("请选择要导出的记录");
            }
            option.fileName = filename || window.dateFormat( (new Date()).getTime(),"Y-m-d_H-i-s");  //excel文件名称
            const sheetFilter = Object.keys( localColumnsObj );
            const sheetHeader = sheetFilter.reduce( (prev,item)=>{
                return [...prev,localColumnsObj[item].title];
            },[] )
            option.datas = [
                {
                    sheetData: dataTable,  //excel文件中的数据源
                    sheetName: window.dateFormat( (new Date()).getTime(),"Y-m-d H:i:s"),  //excel文件中sheet页名称
                    sheetFilter: sheetFilter,  //数据源对应的字段
                    sheetHeader: sheetHeader,  //excel显示的字段
                }
            ]
            let toExcel = new ExportJsonExcel(option);  //生成excel文件
            toExcel.saveExcel();  //下载excel文件
            toSelectedRowKeys();
        }catch(err){
            return message.error( err.message );
        }
    }

    //导出全部
    downloadFileToExcel = () => {
        try{
            let dataTable = [];  //excel文件中的数据内容
            const option = {};  //option代表的就是excel文件
            const {filename} = this.state;
            const {
                dataSource=[
                    {id:1,title:"123"},
                    {id:2,title:"1234"},
                    {id:3,title:"12345"},
                    {id:4,title:"123456"},
                    {id:5,title:"1234567"},
                    {id:6,title:"12345678"},
                ],
                popColumnsObj={},
                //selectedRowKeys=[],
                toSelectedRowKeys = (param={selectedRowKeys:[]})=>{
                    this.props.toSelectedRowKeys(param);
                }
            } = this.props;
            const localColumnsObj = {
                id : {
                    title: 'ID',
                    dataIndex: 'key',
                    fixed : "left",
                    width:20,
                    sorter: (a, b) => parseInt(a.key) - parseInt(b.key),
                },
                ...popColumnsObj,
            }
            dataTable  = dataSource;
            if( dataTable.length === 0 ){
                throw new Error("记录为空，导出失败");
            }
            option.fileName = filename || window.dateFormat( (new Date()).getTime(),"Y-m-d_H-i-s");  //excel文件名称
            const sheetFilter = Object.keys( localColumnsObj );
            const sheetHeader = sheetFilter.reduce( (prev,item)=>{
                return [...prev,localColumnsObj[item].title];
            },[] )
            option.datas = [
                {
                    sheetData: dataTable,  //excel文件中的数据源
                    sheetName: window.dateFormat( (new Date()).getTime(),"Y-m-d H:i:s"),  //excel文件中sheet页名称
                    sheetFilter: sheetFilter,  //数据源对应的字段
                    sheetHeader: sheetHeader,  //excel显示的字段
                }
            ]
            toSelectedRowKeys();
            let toExcel = new ExportJsonExcel(option);  //生成excel文件
            toExcel.saveExcel();  //下载excel文件
        }catch(err){
            return message.error( err.message );
        }
    }

    render(){
        const {
            selectedRowKeys
        } = this.props;
        const {filename} = this.state;
        //console.log(selectedRowKeys);
        return (
            <>
                <div className="CommonCollapseItemsExcelComponent">
                    <Row className="content">
                        <Col span={6} className="content_col_one">
                            已选中
                            <span style={{
                                fontSize:"16px",
                                fontWeight:"800",
                                color:"red",
                                paddingLeft:"5px",
                                paddingRight:"5px",
                            }}>{selectedRowKeys.length}</span>
                            条
                        </Col>
                        <Col span={6} className="content_col_two">
                            <Input addonBefore="文件名：" className="content_col_two_text" addonAfter=".xlsx" value={filename} onChange={
                                (e)=>{
                                    const filename = e.target.value;
                                    this.setState({filename},()=>{
                                        console.log( this.state.filename )
                                    });
                                }
                            } placeholder="请输入文件名(默认当前时间)" />
                        </Col>
                        <Col span={6} className="content_col_three">
                            <Button type="dashed" shape={"round"} className="content_col_three_btn" onClick={()=>{
                                this.downloadSelectFileToExcel()
                            }}>导出选中</Button>
                        </Col>
                        <Col span={6} className="content_col_four">
                            <Button type="primary" shape={"round"} className="content_col_four_btn" onClick={()=>{
                                this.downloadFileToExcel()
                            }}>导出全部</Button>
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
)( withRouter(CommonCollapseItemsExcel) );