import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonMiniPagination.scss"
import {
    Pagination,
    Row,
    Col,
} from "antd"

class CommonMiniPagination extends Component{

    render(){
        const {
            page = 1,
            total = 1000,
            pageSize = 10,
            toChangePage = (Obj)=>{
                this.props.toChangePage(Obj);
            }
        } = this.props;
        return (
            <>
                <div className="CommonMiniPaginationComponent">
                    <Row className="content">
                        <Col span={24} className="content_row_one">
                            <Pagination 
                                className="pagination"
                                simple 
                                current={page}
                                total={total}
                                pageSize={pageSize}
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
        )
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter( CommonMiniPagination ) )