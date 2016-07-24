window.onload=function(){
  //下拉列表
    var d=$('.e2');
    var e22=$('.e21');
    var gb21=$('.gb21')[0];
    var gb22=$('.gb22')[0];
    var g2b1=$('.g2b1')[0];
    var g2b2=$('.g2b2')[0];
    for(var i=0;i<e22.length;i++){
        d[i].index=i;
        d[i].onmouseover=function(){
        for(var j=0;j<e22.length;j++){
          e22[j].style.display='none';
        }
        e22[this.index].style.display='block';
      }
      d[i].onmouseout=function(){
        for(var j=0;j<e22.length;j++){
          e22[j].style.display='none';
        }
      }       
    }
    gb21.onmouseover=function(){
      gb22.style.display='block';
      gb21.style.background='#fff'
    }
    gb21.onmouseout=function(){
      gb22.style.display='none';
      gb21.style.background='#e6e6e6';
    }
    g2b1.onmouseover=function(){
      g2b2.style.display='block';
      g2b1.style.background='#fff'
    }
    g2b1.onmouseout=function(){
      g2b2.style.display='none';
      g2b1.style.background='#e6e6e6';
    }
//     biaodan(e2,e21);
// //显示一个，隐藏其他
// function biaodan(class,ab){
//    for(var i=0;i<ab.length;i++){
//        class[i].index=i;
//        class[i].onmouseover=function(){
//        for(var j=0;j<ab.length;j++){
//          ab[j].style.display='none';
//        }
//        ab[this.index].style.display='block';

//      }
//      class[i].onmouseout=function(){
//        for(var j=0;j<xialakuang.length;j++){
//          xialakuang[j].style.display='none';
//        }
//      }
//     }
// }

  //自动轮播
  var win=$('.f2')[0];
  var as=$('.fa21');
  var len=as.length;
  var lis=$('.fa22',win);
  var fa2a=$("#fa2a",win);
  var fa2aL=$('#fa2aL');
  var fa2aR=$('#fa2aR');
  var flag=true;
  var arrcolor=('','','','','','','')
  var p2=$('.p2');
  var p3=$('.p3')[0];
  var ad=$('.ad')[0];
  //定义计数
  var num=0;
  for(var i=0;i<len;i++){
    if(i==0){
      continue;
    }
    animate(as[i],{opacity:1})//as[i].style.opacity='1';//as[i].style.display='none';
  }
// 时间函数  进行轮播
  var t;
  t=setInterval(move,1000);
  win.onmouseover=function(){
    fa2a.style.display='block';
    animate(fa2a,{opacity:1} )//fa2a.style.opacity='1';
    clearInterval(t);
  }
  win.onmouseout=function(){
    animate(fa2a,{opacity:0});//fa2a.style.opacity='0';//fa2a.style.display='none'
    t=setInterval(move,1000);
  }
  //对li的列表圆点进行循环
  for(var i=0;i<len;i++){
    lis[i].index=i;
    lis[i].onclick=function(){
      num=this.index;
      for(var j=0;j<len;j++){
        animate(as[j],{opacity:0});//as[j].style.opacity='0';//as[j].style.display='none';//另外一种写法，给
        lis[j].style.background='#262626';
      }
      animate(as[num],{opacity:1})//as[num].style.opacity='1';//as[this.index].style.display='block';
      lis[this.index].style.background='red';
    }
  }
  fa2aR.onclick=function(){
       if(flag){
        flag=false;
        move();
       }
  } 
  fa2aL.onclick=function(){
    if(flag){
      flag=false;
      moveL();
      }
  }

  function move(){
    num++;
    if(num==len){
      num=0;
    }
    for(var i=0;i<len;i++){
      animate(as[i],{opacity:0});//as[i].style.opacity='0';
      lis[i].style.background="#262626";
     
    }

    animate(as[num],{opacity:1}//as[num].style.opacity='1';//as[num].style.display='block';
    ,function(){ flag=true;})
    lis[num].style.background='red';
  }

  function moveL(){
    num--;
    if(num<0){
      num=len-1;
    }
    for(var i=0;i<len;i++){
      animate(as[i],{opacity:0});//as[i].style.opacity='0';
      lis[i].style.background="#262626";
       
    }
    animate(as[num],{opacity:1}//as[num].style.opacity='1';
    ,function(){ flag=true;})
    lis[num].style.background='red';
  }

  // for(var i=0;i<p2.length;i++){
  //       ad[i].index=i;
  //       ad[i].onmouseover=function(){
  //       for(var j=0;j<p2.length;j++){
  //         p2[j].style.display='none';
  //       }
  //       animate(p2,{left:10},Tween.Bounce.easeIn);
  //       p2[this.index].style.display='block';
  //     }
  //     ad[i].onmouseout=function(){
  //       for(var j=0;j<p2.length;j++){
  //       p2[j].style.display='none';
  //       }
  //     } 
  // }


//节点轮播
var box=$('.boxa')[0];
  var boxa=$('.boxa-1')[0];
  var boxa=$('a',boxa);
  var aw=parseInt(getStyle(boxa[0],'width'));
  
  var flag=true;
  var btnl=$('.btnL')[0];
  var btnr=$('.btnR')[0];

  var t=setInterval(move,100000);
    box.onmouseover=function(){
        clearInterval(t);
    }
    box.onmouseout=function(){
      t=setInterval(move,100000);
    }
   btnr.onclick=function(){
    if(flag){
      moveR();
      flag=false;}
   }
   btnl.onclick=function(){
    if(flag){
      move();
      flag=false;}
   }
  function move(){
      //box左移
    animate(box,{left:-aw},
      function(){
      //  for(var i=0;i<2;i++){
      //第一个图片插入到最后面
      var first=firstChild(box);
      box.appendChild(first);
      //}
      //box left
      box.style.left=0;
      flag=true;
      })
  }


  function moveR(){

      //第一个图片插入到最后面
      var first=firstChild(box);
      var last=lastChild(box);
      box.insertBefore(last,first);
      //box left
      box.style.left=-aw+'px';
      animate(box,{left:0},function(){flag=true;})
      //box左移
    
  }


/*
//固定定位的动画
var dh=$('.dh');
for(var i=0;i<dh.length;i++){
  dh[i].index=i;
dh.onmouseover=function(){
  animate(dh[this.index],{left:120},Tween.Quad.easeIn);
 }
 dh.onmouseout=function(){
  animate(dh[this.index],{left:180},Tween.Quad.easeIn);
 }
}*/


}





