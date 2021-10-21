import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonPagination.scss"
import {
    Row,
    Col,
    Pagination,
} from "antd"
class CommonPagination extends Component{

    render(){
        const {
            page = 1,
            total = 1000,
            pageSize = 10,
            toChangePage = (Obj)=>{
                this.props.toChangePage(Obj);
            }
        } = this.props;
        const {pageOptions} = this.props.SystemConfigData;
        return (
            <>
                <div className="CommonPaginationComponent">
                    <Row className="content">
                        <Col span={24} className="content_row_one">
                            <Pagination 
                                className="pagination"
                                total={total}
                                current={page}
                                pageSize = {pageSize}
                                pageSizeOptions = {Object.values(pageOptions).reduce( (prev,item)=>{
                                    return [...prev,item.value];
                                },[] )}
                                showSizeChanger
                                showQuickJumper
                                showTotal={total => `共 ${total} 条`}
                                onChange = {(page,pageSize)=>{
                                    const Obj = {
                                        page,
                                        pageSize,
                                    }
                                    toChangePage(Obj);
                                }}
                            />
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
    }),
    {

    }
)( withRouter(CommonPagination) );