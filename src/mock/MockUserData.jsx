import Mock from "mockjs"
import {
    checkAuth,
} from "./common"
const List = [];
List.push(Mock.mock({
    id:1,
    pid:0,
    account : "@cname",
    "invit|6": "@character",
    age:"@integer(18,23)",
    region:"@region",
    province:"@province",
    county:"@county",
    header:"@img",
    create_time : "@datetime",
    current_time:"@now",
    path:"",
    status : "@boolean",
}))
const count = 300;
for (let i = 1; i <= count; i++) {
    List.push(
      Mock.mock({
        id: i+1,
        pid:`@integer(1, ${i})`,
        account: "@cname",
        "invit|6": "@character",
        age:"@integer(18,23)",
        region:"@region",
        province:"@province",
        county:"@county",
        header:"@img",
        create_time:"@datetime",
        current_time:"@now",
        path:"",
        status:"@boolean",
      })
    );
}
//转对象
const ListObj = List.reduce( (prev,item)=>{
    return {...prev, [item.id]:item }
} ,{})
List.forEach( item => {
    let pathArr = [];
    //递归函数
    const pathFun = (item)=>{
        pathArr = [item.id,...pathArr];
        const parent = ListObj[ item['pid'] ] || false;
        if(parent){
            //递
            pathFun(parent);
        }
        //归
        return `-${pathArr.join("-")}-`;
    }
    item.path = pathFun(item);
} ) 
const newList = List;

//获取全部数据
export const getList = (...param)=>{
    const data = newList;
    if( !checkAuth(param[1].headers) ){
        return {
            code : 300,
            message : "fail",
            data : [],
        }
    }
    return {
        code : 200,
        message : "success",
        data,
    }
}

export const addUser = (...param)=>{
    try{
        if( !checkAuth(param[1].headers) ){
            return {
                code : 300,
                message : "fail",
                data : [],
            }
        }
        const resData = newList;
        const maxId = resData.reduce( (prev,item)=>{
            return prev > parseInt(item.id) ? prev : parseInt(item.id);
        },0)
        const currentId = maxId+1;
        const {
            pid,
            account,
            invit,
            age,
            region,
            province,
            county,
            header,
            create_time,
            current_time,
            status,
        } = JSON.parse(param[1].body);
        const parent = resData.find( item=>parseInt(item.id) === pid ) || false;
        if( !parent ){
            throw new Error("未查询到上级");
        }
        const currentData = {
            id:currentId,
            pid,
            account,
            invit,
            age,
            region,
            province,
            county,
            header,
            create_time,
            current_time,
            path: `${parent['path']}${currentId}-`,
            status,
        }
        const autoData = Mock.mock({
            id:1,
            pid:1,
            account : "@cname",
            "invit|6": "@character",
            age:"@integer(18,23)",
            region:"@region",
            province:"@province",
            county:"@county",
            header:"@img",
            create_time : "@datetime",
            current_time:"@now",
            path:"",
            status : "@boolean",
        });
        const addData = Object.keys(currentData).reduce( (prev,item)=>{
            return {...prev,[item]:currentData[item] ? currentData[item] : autoData[item]}
        },{} )
        resData.push(addData);
        //返回结果
        return {
            code: 200,
            message : "添加成功",
            data:[],
        } 
    }catch(err){
        return {
            code: 400,
            message: err.message,
            data : [],
        }
    }
}

//获取分页数据
export const getPageData = (...param)=>{
    if( !checkAuth(param[1].headers) ){
        return {
            code : 300,
            message : "fail",
            data : [],
        }
    }
    const {
        page=1,           //页码
        pageSize=10,       //每页显示条数
        searchAge="",      //搜索条件，年纪
        searchRegion="",   //搜索条件区域
        searchProvince="", //索索省
        searchCounty="",   //搜索城市
    } = JSON.parse(param[1].body);
    const resData = newList;
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    const mockList = resData.filter((item) => {
        if( searchAge && parseInt(item.age) !== parseInt(searchAge) ) return false;
        if( searchRegion && item.region !== searchRegion ) return false;
        if( searchProvince && item.province !== searchProvince ) return false;
        if( searchCounty && item.county !== searchCounty ) return false;
        return true;
    });
    const pageList = mockList.slice(start, end);
    return {
        code: 200,
        message: "success",
        data : {
            listCount: mockList.length,
            list : pageList,
        }
    }
}

//通过id获取单条数据
export const getOne = (...param)=>{
    if( !checkAuth(param[1].headers) ){
        return {
            code : 300,
            message : "fail",
            data : [],
        }
    }
    const {id} = JSON.parse(param[1].body);
    const data = newList.find( item => item.id === id );
    return {
        code: 200,
        message : "success",
        data,
    } 
}

export const deleteOne = (...param)=>{
    try{
        if( !checkAuth(param[1].headers) ){
            return {
                code : 300,
                message : "fail",
                data : [],
            }
        }
        const {id} = JSON.parse(param[1].body);
        const resData = newList;
        //计算下标
        const index = resData.findIndex( (item)=> item.id === id );
        if( index === -1 ){
            throw new Error("未查询到要删除的元素");
        }
        //检查是否有子元素
        const son = resData.find( item => parseInt(item.pid) === parseInt(id) ) || false;
        if( son ){
            throw new Error("当前元素存在子元素，删除失败");
        }
        //删除元素
        resData.splice(index,1);
        //返回结果
        return {
            code: 200,
            message : "删除成功",
            data:[],
        } 
    }catch(err){
        return {
            code: 400,
            message : err.message,
            data:[],
        } 
    }
}

export const editData = (...param)=>{
    try{
        if( !checkAuth(param[1].headers) ){
            return {
                code : 300,
                message : "fail",
                data : [],
            }
        }
        const {
            id,
            pid,
            account,
            invit,
            age,
            region,
            province,
            county,
            header,
            create_time,
            current_time,
            status,
        } = JSON.parse(param[1].body);
        const resData = newList;
        const localCurrentData = resData.find( (item)=> parseInt(item.id) === parseInt(id) )||false;
        if(!localCurrentData){
            throw new Error("未查询到账号，更新失败");
        }
        //推荐人合法性验证
        if( parseInt(localCurrentData["pid"]) !== parseInt(pid) ){
            //修改了推荐人
            //获取新的推荐人信息
            const localParentData = resData.find( (item)=>parseInt(item.id) === parseInt(pid) ) || false;
            if( !localParentData ){
                throw new Error("推荐人不存在");
            }
            //检查推荐人是否为原账号的子集
            const reg = new RegExp(`${localCurrentData["path"]}`);
            //console.log(reg);
            if( reg.test( localParentData["path"] ) ){
                throw new Error("推荐人不能设置为当前账号子集");
            }
            //console.log(localCurrentData["path"]);
        }
        //写入数据
        const localCurrentIndex = resData.findIndex( (item)=>parseInt(item.id) === parseInt(id) );
        const updateData = {
            id,
            pid,
            account,
            invit,
            age,
            region,
            province,
            county,
            header,
            create_time,
            current_time,
            status,
        }
        resData.splice(localCurrentIndex,1,updateData);
        //修改了推荐人，重置推荐路径
        if( parseInt(localCurrentData["pid"]) !== parseInt(id) ){
            //转对象
            const OldListObj = resData.reduce( (prev,item)=>{
                return {...prev, [item.id]:item }
            } ,{})
            //修改原数组
            resData.forEach( item => {
                let pathArr = [];
                //递归函数
                const pathFun = (item)=>{
                    pathArr = [item.id,...pathArr];
                    const parent = OldListObj[ item['pid'] ] || false;
                    if(parent){
                        //递
                        pathFun(parent);
                    }
                    //归
                    return `-${pathArr.join("-")}-`;
                }
                item.path = pathFun(item);
            } )
        }
        //返回结果
        return {
            code: 200,
            message : "删除成功",
            data:[],
        } 
    }catch(err){
        return {
            code: 400,
            message: err.message,
            data : [],
        }
    }
}