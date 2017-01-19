
function getRandomColor() {//获取随机颜色
    var color = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
        var one = parseInt(Math.random() * 255);
        color[i] = one;
    }
    return "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
}

function delEvent(obj, event, fn, isCatch) {//删除事件
    var isCatch = false || isCatch
    if (obj.removeEventListener) {
        obj.removeEventListener(event, fn, isCatch);
        return true;
    } else if (obj.detachEvent) {
        obj.detachEvent("on" + event, fn);
        return true;
    } else {
        return false;
    }
}

function addEvent(obj, event, fn, isCatch) {//增加事件
    var isCatch = false || isCatch;
    if (obj.attachEvent) {
        obj.attachEvent("on" + event, fn);
        return true;
    } else if (obj.addEventListener) {
        obj.addEventListener(event, fn, isCatch);
		  return true;
    } else {
        return false;
    }
}

function stopPro(eventObj) {//阻止事件流冒泡传递
    if (eventObj.stopPropagation) {
        eventObj.stopPropagation();
        return true;
    } else if (eventObj.cancelBubble) {
        eventObj.cancelBubble = true;
        return true;
    } else {
        return false;
    }
}



function getStyle(ele, styleName) {//获取样式
    if (ele.currentStyle) {//IE
        return ele.currentStyle[styleName];
    }
    else if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[styleName];
    }
}

function isIe() {//判断IE浏览器
    var ver = window.navigator.appVersion;
    var re;
    if (ver.indexOf('MEIE') != -1) {//IE5-10
        re = true;
    } else if (ver.indexOf('Trident') != -1) {//IE11
        re = true;
    } else if (ver.indexOf('Edge') != -1) {//IE Edge
        re = true;
    } else {
        re = false;
    }
    return re;
}

function stopDefault(e) {//停止浏览器默认行为
    var ev = e || window.event;
    if (ev.preventDefault) {//先设置W3C
        ev.preventDefault();
    }
    else {//IE
        window.event.returnValue = false;
    }
}

function setScrollTop(num) {//设置页面滚动高度
    if (document.body) {
        document.body.scrollTop = num;
        document.documentElement.scrollTop = num;
    } else {
        document.documentElement.scrollTop = num;
    }
}

function trim(str) { //删除首位空
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function setCookie(cName, cValue, ex) {//设置cookie
    var now = new Date();
    if (ex == null) {
        document.cookie = cName + "=" + cValue;
    } else {
        now.setDate(now.getDate() + ex);
	    document.cookie = cName + "=" + cValue + ';expires=' + now;
    }
}

function getCookie(cName) {//获取cookie
    var all = document.cookie;
    var all_arr = all.split("; ");
    for (var i = 0; i < all_arr.length; i++) {
        if (all_arr[i].split("=")[0] == cName) {
            return all_arr[i].split("=")[1];
        }
    }
}

function removeCookie(cName) {//删除cookie
    setCookie(cName, 0, -1);
}

function removeClass(obj,classStr){//删除class
    var str=" *"+classStr+" *";
    var reg_s=new RegExp(str,'gi');
    var tstr=obj.className.replace(reg_s,'');
    obj.className=tstr;
}

function getByClass(parent,cls){//通过CLASS名获取DOM
        var results=[];
        var es=parent.getElementsByTagName("*");
        for(var i=0;i<es.length;i++){
            if(es[i].className==cls){
                results.push(es[i]);
            }
        }
        return results;
    }

function getAbsPoint(e){//获取元素距离页面顶部的距离
    var x = e.offsetLeft;
    var y = e.offsetTop;
    while(e = e.offsetParent)
    {
        x += e.offsetLeft;
        y += e.offsetTop;
    }
    return {'x': x, 'y': y};
};

function addCssByStyle(cssString){//动态创建CSS样式
                var doc=document;
                var style=doc.createElement("style");
                style.setAttribute("type", "text/css");

                if(style.styleSheet){// IE  
                    style.styleSheet.cssText = cssString;
                } else {// w3c  
                    var cssText = doc.createTextNode(cssString);
                    style.appendChild(cssText);
                }

                var heads = doc.getElementsByTagName("head");
                if(heads.length)
                    heads[0].appendChild(style);
                else
                    doc.documentElement.appendChild(style);
 }

























































