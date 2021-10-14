import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeUserStructImage.scss"
import { OrganizationGraph } from '@ant-design/charts';
import {
    Spin,
} from "antd"

class HomeUserStructImage extends Component{

    listToTree = ( UserStructData )=>{
        //深拷贝
        const handleData = UserStructData.reduce( (prev,item) => {
            const {
                id,
                pid,
                account,
            } = item;
            const current = {id:id.toString(), pid, value:{text:account} }
            return [...prev,current]
        } ,[])
        //转对象方便引用
        const changeData = handleData.reduce( (prev,item)=>{
            return {...prev,[item.id]:item}
        } ,{})
        //循环引用
        return handleData.reduce( (prev,item)=>{
            const pid = item["pid"];
            const parent =  changeData[pid];
            if(parent){
                parent.children? parent.children.push(item) : parent.children = [item]
            }else{
                prev.push(item)
            }
            return [...prev];
        },[] )
    }

    render(){
        const {
            showList = [],
        } = this.props;
        const loading =  showList.length > 0 ? true : false;
        return (
            <>
                {
                    loading
                    ?
                    (
                        <OrganizationGraph 
                            height="800"
                            data={ this.listToTree( showList )[0] } 
                            behaviors={['drag-canvas', 'zoom-canvas', 'drag-node']} 
                        />
                    )
                    :
                    (
                        <Spin size="large" />
                    )
                }
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter(HomeUserStructImage) )