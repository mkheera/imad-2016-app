console.log('Loaded!');
//var img = document.getElementById('madi');
//var marginLeft=0;
//function moveright(){
   // marginLeft=marginLeft+5;
  //  img.style.marginLeft=marginLeft+'px';
    
//}
//img.onclick=function(){
   // var interval=setInterval(moveright,500);
 //  moveright();
//};

var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    
};