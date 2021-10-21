//列表转tree
window.listToTree = (MenuList=[])=>{
    //转换数组
    let treeList = MenuList.reduce((prev,cur)=>{
        prev[cur['id']] = cur;
        return prev
    },{})
    let result = MenuList.reduce((prev,cur)=>{
        let pid = cur.pid;
        // pid为0的就找不到父对象，找到当前cur的父对象
        // 对象的浅拷贝，引用关系存在，在后面处理parent的时候也会导致cur的改变，达到递归的效果
        let parent = treeList[pid]
        // console.log(parent,1)
        // 如果父对象存在，就将cur压到父对象的children属性中
        if(parent){
            // parent和cur存在引用关系
            parent.children? parent.children.push(cur) : parent.children = [cur]
        } else{
            // 没有父对象，则此cur为树的根元素
            prev.push(cur)
        }
        return prev
    },[]);
    return result;
}


//格式化時間戳
window.dateFormat = function (timestamp, formats ='Y-m-d H:i:s'){
    // formats格式包括
    // 1. Y-m-d
    // 2. Y-m-d H:i:s
    // 3. Y年m月d日
    // 4. Y年m月d日 H时i分
    formats = formats || 'Y-m-d';

    var zero = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };
    var myDate = timestamp? new Date(timestamp): new Date();
    var year = myDate.getFullYear();
    var month = zero(myDate.getMonth() + 1);
    var day = zero(myDate.getDate());
    var hour = zero(myDate.getHours());
    var minite = zero(myDate.getMinutes());
    var second = zero(myDate.getSeconds());
    return formats.replace(/Y|m|d|H|i|s/ig, function (matches) {
        return ({
            Y: year,
            m: month,
            d: day,
            H: hour,
            i: minite,
            s: second
        })[matches];
    });
}

//数字处理
window.number_format = (number, decimals, dec_point = ".", thousands_sep=",") => {
    /*
    * 参数说明：
    * number：要格式化的数字
    * decimals：保留几位小数
    * dec_point：小数点符号
    * thousands_sep：千分位符号
    * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        };
 
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }
 
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

//数组分页
window.arr_slice = (arr,len = 10)=>{
    let result = [];
    for( let i = 0;i<arr.length;i+=len ){
        result.push(arr.slice(i,i+len));
    }
    return result;
}

/*截流*/
//高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率。
window.throttle = (fn, ms = 1000)=>{
	let timerId // 创建一个标记用来存放定时器的id
	return function () {
		// 没有定时器等待执行，则表示可以创建新的定时器来执行函数
		if (!timerId) {
			timerId = setTimeout(() => {
				// 定时器id清空，表示可以执行下一次调用了
				timerId = null
				fn.apply(this, arguments)
			}, ms)
		}
	}
}

/*防抖*/
//触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。
window.debounce = (fn, ms=1000)=>{
    let timeoutId
    return function () {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        fn.apply(this, arguments)
      }, ms)
    }
}

