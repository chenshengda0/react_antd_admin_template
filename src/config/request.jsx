const clientApi = {
    getConfig : {
        title : "获取配置",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {
        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/local/config",    //路径
            type : "requestPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },
    setConfig : {
        title : "设置本地配置",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {
            reqData : {},
        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/local/setConfig",    //路径
            type : "requestPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },
    getLocalProps : {
        title : "获取本地弹出层状态",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {

        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/local/getProps",    //路径
            type : "requestPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },
    //本地弹出层
    setLocalProps : {
        title : "设置本地弹出层状态",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {
            reqObj:{
                
            }
        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/local/setProps",    //路径
            type : "requestPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },
    getMenus : {
        title : "获取本地菜单",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {

        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/local/menus",    //路径
            type : "requestPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },


    getRemoteConfig : {
        title : "获取服务端配置",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {

        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/remote/config",    //路径
            type : "requestAuthPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },
    setRemoteConfig : {
        title : "设置服务端配置",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {
            reqList : [],
        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/remote/setConfig",    //路径
            type : "requestAuthPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },
    getTopRouter : {
        title : "获取顶部菜单",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {

        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/router/getTopRoute",    //路径
            type : "requestPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },
    setTopRouter : {
        title : "设置顶部菜单",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {
            addObj : {},
        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/router/addTopRoute",    //路径
            type : "requestPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },
    toLogin : {
        title : "登陆",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {
            username:"",
            password:"",
            code:"",
        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/admin/toLogin",    //路径
            type : "requestPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },

    getTopListData : {
        title : "首页顶部列表",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {},                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/top/listData",    //路径
            type : "requestAuthPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },

    getUserList : {
        title : "获取会员列表",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {},                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/user/getUserList",    //路径
            type : "requestAuthPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },

    getUserPageData : {
        title : "获取会员分页数据",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {
            page:1,
            pageSize:10,
            searchAge:"",
            searchRegion:"",
            searchProvince:"",
            searchCounty:"",
        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/user/getPageData",    //路径
            type : "requestAuthPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },

    deleteUserOne : {
        title : "删除会员",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {
            id:"",
        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/user/deleteOne",    //路径
            type : "requestAuthPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },

    editUserOne : {
        title : "编辑会员",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {
            id:"",
            pid:"",
            account:"",
            invit:"",
            age:"",
            region:"",
            province:"",
            county:"",
            header:"",
            create_time:"",
            current_time:"",
            status:true,
        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/user/editData",    //路径
            type : "requestAuthPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },

    addUserOne : {
        title : "添加会员",           //备注
        debug: true,                    //调试模式，true --- mock  false --- real 
        allowParam : {
            pid:"",
            account:"",
            invit:"",
            age:"",
            region:"",
            province:"",
            county:"",
            header:"",
            create_time:"",
            current_time:"",
            status:"",
        },                //允许的参数
        mock : {                        //mock
            prefix : "",                    //mock前缀
            path : "/mock/user/addData",    //路径
            type : "requestAuthPost",       //请求函数
        },
        real : {                        //真实请求
            prefix : "",                    //前缀
            path : "",                      //路径
            type : "",                      //请求函数
        }
    },

}

const requestList = {
    requestGet : async(url,param={})=>{
        try{
            if( Object.keys(param).length !== 0){
                url = Object.keys(param).reduce( (prev,item)=>{
                    return `${prev}${item}=${param[item]}`
                },`${url}?`)
            }
            let requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                },
            };
            let response  = await fetch(url, requestOptions);
            let result = await response.json();
            return result;
        }catch(err){
            console.log(err);
            //throw err;
            throw new Error("网络开小差了，请稍后再试～");
        }
    },
    requestAuthGet : async(url,param={})=>{
        try{
            if( Object.keys(param).length !== 0){
                url = Object.keys(param).reduce( (prev,item)=>{
                    return `${prev}${item}=${param[item]}`
                },`${url}?`)
            }
            let requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : window.getCookie(),
                },
            };
            let response  = await fetch(url, requestOptions);
            let result = await response.json();
            return result;
        }catch(err){
            console.log(err);
            //throw err;
            throw new Error("网络开小差了，请稍后再试～");
        }
    },
    requestPost : async(url,param={})=>{
        try{
            let requestOptions = {};
            requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(param)
            };
            let response  = await fetch(`${url}`, requestOptions);
            let result = await response.json();
            return result;
        }catch(err){
            //console.log(err);
            throw new Error("网络开小差了，请稍后再试～");
        }
    },
    requestAuthPost : async(url,param={})=>{
        try{
            let requestOptions = {};
            requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : window.getCookie(),
                },
                body: JSON.stringify(param)
            };
            let response  = await fetch(`${url}`, requestOptions);
            let result = await response.json();
            return result;
        }catch(err){
            throw new Error("网络开小差了，请稍后再试～");
        }
    }
}

window.request = async(key,param = {})=>{
    try{
        const current_param = clientApi[key];
        const request_url_param = current_param.debug ? current_param["mock"] :  current_param["real"];
        //请求函数
        const request_fun =  requestList[request_url_param.type];
        //console.log(request_fun);
        //获取请求路径
        const request_url = `${request_url_param.prefix}${request_url_param.path}`;
        //获取请求参数
        const request_param = Object.keys(current_param.allowParam).reduce( (prev,item)=>{
            return {...prev,[item]:param[item] ? param[item] : current_param.allowParam[item]}
        },{} )
        const res = await request_fun(request_url,request_param);
        const {
            code : resCode,
            message : resMessage,
            data : resData,
        } = res;
        if( parseInt(resCode) >= 300   && parseInt(resCode) < 400){
            //删除cookie
            window.removeCookie();
            throw new Error("校验失败，请重新登陆");
        }
        if( parseInt(resCode) >= 400 ){
            throw new Error(resMessage);
        }
        //返回值
        return resData;
    }catch(err){
        throw err;
    }
}