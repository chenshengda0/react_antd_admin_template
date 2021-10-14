const fs = require("fs");
let rawdata = fs.readFileSync('./lh_user.json');
const jsonData = JSON.parse(rawdata);
const current = jsonData[2]["data"].find( item=> item.account === "13613008677" )
const path = `${current.path}${current.id}-`;

const re1 = new RegExp(`${path}`);
const initState = jsonData[2]["data"].reduce( (prev,item)=>{
    const re2 = new RegExp(`-${item.id}-`);
    return re1.test(item.path) || re2.test(path) ? [...prev,item] : prev;
},[] )

fs.writeFileSync('user.json', JSON.stringify( initState ) );


