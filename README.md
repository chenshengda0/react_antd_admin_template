##运行
  
```
  >$ git clone git@github.com:chenshengda0/react_antd_admin_template.git
  >$ cd ~/mycode/
  >$ yarn install
  >$ yarn start
  
```


##目录

```
├── components                                  //组件
│   ├── Common
│   │   ├── CollapseItems
│   │   │   └── Input
│   │   ├── Handle
│   │   │   └── Modals
│   │   ├── Markdown
│   │   └── TextArea
│   ├── Home
│   │   ├── Common
│   │   ├── Components
│   │   │   └── Tabs
│   │   │       └── common
│   │   ├── Dashboard
│   │   └── UserStruct
│   ├── Login
│   │   ├── FormHandle
│   │   └── FormInput
│   ├── Pops
│   └── RoutePrivate
├── config                                  //配置 window
├── container                               //高阶组件，包装器
├── mock                                    //fetchMock ApiServer
├── pages                                   //页面
│   ├── Home
│   │   ├── Components
│   │   ├── Dashboard
│   │   ├── UserList
│   │   └── UserStruct
│   └── Login
├── redux                                   //redux
│   ├── actions                             //actions ApiClinet
│   │   ├── Home
│   │   │   ├── Common
│   │   │   ├── Components
│   │   │   ├── Dashboard
│   │   │   ├── UserList
│   │   │   └── UserStruct
│   │   ├── Login
│   │   ├── Pops
│   │   └── System
│   └── reducers                            //store
│       ├── Home
│       │   ├── Common
│       │   ├── Components
│       │   ├── Dashboard
│       │   ├── UserList
│       │   └── UserStruct
│       ├── Pops
│       └── System
└── static                                 //静态文件
    ├── Background
    ├── Header
    └── Logo

```

##bag
```
 "dependencies": {
    "@ant-design/charts": "^1.2.13",                            //图表库
    "@testing-library/jest-dom": "^5.11.4",     
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@toast-ui/react-editor": "^3.1.0",                         //富文本
    "antd": "4.12.3",         
    "braft-editor": "^2.3.9",                                   
    "crypto-js": "^4.1.1",                                      //des 加解密
    "fetch-mock": "^9.11.0",                                    //fetch 拦截 mock data
    "file-saver": "^2.0.5",                                     //文件保存
    "js-base64": "^3.7.2",                                      //base64 编码
    "js-cookie": "^3.0.1",                                      //cookie jwt 全局调用
    "js-export-excel": "^1.1.4",                                //excel 导出
    "mockjs": "^1.1.0",                                         //mock data
    "node-sass": "^5.0.0",                                      //scss
    "react": "^17.0.2",       
    "react-beautiful-dnd": "^13.1.0",                           //拖拽
    "react-copy-to-clipboard": "^5.0.4",                        //复制
    "react-custom-scrollbars": "^4.2.1",                        //滚动
    "react-dom": "^17.0.2",     
    "react-helmet": "^6.1.0",                                   //set html header
    "react-markdown": "^7.0.1",                                 //markdown
    "react-redux": "^7.2.5",                                    //react-redux
    "react-router-dom": "^5.3.0",                               //router
    "react-scripts": "4.0.3",             
    "redux": "^4.1.1",                                          //redux              
    "redux-thunk": "^2.3.0",                                    //run fun
    "sass-loader": "^11.0.1",                 
    "screenfull": "^5.1.0",                                     //全屏
    "web-vitals": "^1.0.1"
  },
```
