import Cookies from 'js-cookie'

const key = "Authorization";

window.getCookie = (name = key)=>{
    return Cookies.get(name);
}

window.setCookie = (data,name=key)=>{
    Cookies.set(name,data,{ expires: new Date(new Date().getTime() + 24 * 3600 * 1000) });
}

window.removeCookie = (name = key)=>{
    Cookies.remove(name)
}