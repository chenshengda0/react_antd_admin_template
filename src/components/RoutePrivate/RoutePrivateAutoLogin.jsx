import React from 'react'
import { Route, Redirect } from 'react-router-dom'
//render方法时一个回调函数
export const RoutePrivateAutoLogin = ({component: Component,redirectPath, ...rest}) => {
    //console.log( redirectPath );
    return (
        <Route 
          {...rest} 
          render={
              (props) => (
                  !!!window.getCookie()
                  ? 
                  <Component {...props} />
                  : 
                  <Redirect to={
                      {
                          pathname: redirectPath,
                      }
                  }/>
              )
          }/>
      )
}
