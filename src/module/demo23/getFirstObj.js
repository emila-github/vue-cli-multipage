define(function(require, exports, module) {
  //获取第一个窗口内的可见对象

  //想要判读元素是否在页面内首先需要获取两个量：
//1、$("#test1").offset().top 元素距离顶部的距离
//2、$(document).scrollTop() 页面翻过去的距离
//用第一个量减去第二个量就能判断出元素距离浏览器窗口顶部的距离，再根据浏览器窗口高度即可知道元素是否在窗口中出现
//$(window).height() 浏览器窗口高度
//即：0 < $("#test1").offset().top - $(document).scrollTop() < $(window).height() 则表明在窗口中出现

  //console.log('getFirstObj');
  var getFirstObj = function(selector, fn){
    //console.log('do getFirstObj');
    //if(!selector) return;
    let $items = $(selector);
    let wh = $(window).height();
    let timeout = false;
    let $el;
    $(window).scroll(function () {
      if (timeout){clearTimeout(timeout);}
      timeout = setTimeout(function(){
        let st = $(document).scrollTop();
        $items.each(function(index,e){
          let t = $(e).offset().top - st;
          if( t>0 && t<wh){

            //console.log('html=%s,wh=%s,st=%s,t=%s',$(e).html(),wh,st,t,index);
            fn($(e));
            return false;
          }
        });

      },500);
    });
    return $el;
  };



module.exports = getFirstObj;

});
