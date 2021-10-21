import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeUserStructTree.scss"
import {
    Tree,
    Spin,
} from "antd"

class HomeUserStructTree extends Component{


    listToTree = ( UserStructData )=>{
        //深拷贝
        const handleData = UserStructData.reduce( (prev,item) => {
            const {
                id,
                pid,
                account,
                invit,
            } = item;
            const current = {
                key:id,
                pid,
                title:`${account} [ ${invit} ]`
            }
            return [...prev,current]
        } ,[])
        //转对象方便引用
        const changeData = handleData.reduce( (prev,item)=>{
            return {...prev,[item.key]:item}
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
        const loading = showList.length > 0 ? true : false;
        return (
            <>
                {
                    loading
                    ?
                    (
                        <Tree
                            showLine={true}
                            defaultExpandAll = {true}
                            treeData={this.listToTree(showList)}
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
)( withRouter( HomeUserStructTree ) );