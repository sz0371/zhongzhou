/*蓝科企业网站系统PHP版
http://www.lankecms.com*/

$(function(){
  //默认左右滚动
  $("#s1").xslider({
    unitdisplayed:7,
    movelength:1,
    unitlen:129,
    autoscroll:2000
  }); 
})

function qiehuan(num){
  //var linum=document.getElementById('navli').getElementsByTagName('li').length-1;
  var linum=document.getElementById('navli').getElementsByTagName('ul').length-1;
  //alert(linum);
  for(var id=0;id<=linum;id++){
    if(id==num){
      if(document.getElementById("qh_con"+id)!=null){
        document.getElementById("qh_con"+id).style.display="block";  
        if(document.getElementById("qh_con"+id).getElementsByTagName('li').length==0){
         document.getElementById("qh_con"+id).innerHTML=document.getElementById("qh_con0").innerHTML;
        }
      } 
      document.getElementById("mynav"+id).className="active";
    }else{
      if(document.getElementById("qh_con"+id)!=null){
        document.getElementById("qh_con"+id).style.display="none";
      }
      document.getElementById("mynav"+id).className="";
    }
  }
}