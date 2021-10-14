import {Component} from "react"
import {withRouter,Link} from "react-router-dom"
import {connect} from "react-redux"
import "./HomeCommonMenu.scss"
import {Menu} from "antd";
import {
    SetHomeCommonTopRouteDataAction,
} from "../../../redux/actions"
import {DragDropContext,Draggable,Droppable} from "react-beautiful-dnd"


const {SubMenu} = Menu;
class HomeCommonMenu extends Component{

    state = {
        current_menu:[],
        openKey: [],
    }

    componentDidMount(){
        const {SystemMenusData} =  this.props;
        //深拷贝
        const MenuList = SystemMenusData.reduce( (pre,item)=>{
            return item.is_menu ? [...pre,{...item}] : [...pre];  
        },[] )
        const current_menu = window.listToTree(MenuList);
        this.setState({current_menu});
        this.getParent();
    }

    getParent = ()=>{
        const path = this.props.location.pathname;
        const {SystemMenusData} =  this.props;
        const current = SystemMenusData.find( item => item.key === path )||{};
        const openKey = current.path && current.path.reduce( (prev,item)=>{
            const current_item = SystemMenusData.find( row => row.id === item );
            return [...prev,current_item.key]
        },[] )
        this.setState({openKey});
    }

    toJump = (path)=>{
        //设置路径
        this.props.history.push({
            pathname : `${path}`,
        })
    }

    //转菜单
    treeToMenu=(menuList)=>{
        // 得到当前请求的路由路径
        return menuList.reduce((pre, item) => {
            if (!item.children) {
                pre.push(
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                );
            } else {
                // 向pre添加<SubMenu>
                pre.push(
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                {item.icon}
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                    {this.treeToMenu(item.children)}
                    </SubMenu>
                );
            }

            return pre;
        }, []);                                 
    }

    //拖拽
    onDragEnd = (result)=>{
        const {current_menu:items} = this.state;
        if (!result.destination) {
            return;
        }
        const [removed] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, removed);
        this.setState({items})
    }

    //添加顶部菜单
    add_route_list = (param)=>{
        const {SystemMenusData} = this.props;
        const current = SystemMenusData.find( item => item.key === param.key );
        const {key:route,title} = current;
        const data = {
            route,
            title,
        }
        this.props.SetHomeCommonTopRouteDataAction(data)
    }

    render(){
        const path = this.props.location.pathname;
        const {current_menu,openKey} = this.state;
        return (
            <>
                <div className="HomeCommonMenu">
                    <DragDropContext onDragEnd={(param)=>this.onDragEnd(param)}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={{
                                        marginTop:"0px",
                                    }}
                                >
                                {
                                    current_menu.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.key} index={index}>
                                            {(provided, snapshot) => {
                                                return (<div
                                                    key={item.key}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    
                                                        <Menu
                                                            theme="dark" 
                                                            selectedKeys={[path]}
                                                            defaultOpenKeys={openKey}
                                                            mode="inline"
                                                            onSelect = {(obj)=>this.add_route_list(obj)}
                                                        >
                                                            {
                                                                this.treeToMenu([item])
                                                            }
                                                        </Menu>
                                                    
                                                </div>
                                                )
                                            }
                                            }
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>

                </div>
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        SystemMenusData : store.SystemMenusData,
    }),{
        SetHomeCommonTopRouteDataAction,
    }
)( withRouter( HomeCommonMenu ) );