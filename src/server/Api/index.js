const express = require("express");
const router = express.Router();
//加载控制器
const IndexController = require("./Controller/IndexController")

/*API*/
router.get('/',IndexController.home)
router.get('/getUserList',IndexController.getUserList)



module.exports = router;