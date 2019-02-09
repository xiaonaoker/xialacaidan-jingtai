window.onload=function() {
    //变量声明
    var menu1=document.getElementById("menu1");
    var menu2=document.getElementById("menu2");
    var menu3=document.getElementById("menu3");

    //二级列表悬浮效果和点击事件
    var cellHover2=function(event,parentnode,colorin,colorout){
        parentnode.onmouseover=function(event){
            if(event.target.className=="cells2"){
                event.target.style.backgroundColor=colorin;
            }
        };
        parentnode.onmouseout=function(event){
            if(event.target.className=="cells2"){
                event.target.style.backgroundColor=colorout;
            }
        };
        parentnode.onclick=function(event){//列表一
            if(event.target.className=="cells2"){
                alert("这里是\""+event.target.id+"："+event.target.innerHTML+"\"的内容")
            }
        };
    };
    cellHover2(event,menu1,"#ddd","#ccc");
    cellHover2(event,menu2,"#ddd","#ccc");
    cellHover2(event,menu3,"#ddd","#ccc");
};
