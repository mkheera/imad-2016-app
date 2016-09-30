console.log('Loaded!');
var img = document.getElementById('madi');
var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function(){
   // var interval=setInterval(moveright,500);
   moveright();
};
var counter=0;
var button=document.getElementById('counter');
button.OnClick=function(){
    counter=counter+1;
    var span=document.getElementById('count');
    span.InnerHTML=counter.toString();
    
};