import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux"
import store from "./redux/store"
import "./config/Common"
import "./config/encryption"
import "./config/cookie"
import "./config/request"
import "./mock"
import {
  ConfigProvider,
} from "antd"
import zhCN from "antd/es/locale/zh_CN"

ReactDOM.render(
  <HashRouter>
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </HashRouter>,
  document.getElementById('root')
);
