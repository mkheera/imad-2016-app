console.log('Loaded!');
var img = document.getElementById('madi');
var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function(){
   //var interval=setInterval(moveright,500);
  moveright();
};

var button=document.getElementById('counter');

button.onclick=function(){
    
                var request=new XMLHttpRequest();
    
                 request.onreadystatechange=function(){
        
        
                          if(request.readyState===XMLHTMLRequest.DONE){
            
        
                                    if(request.status===200){
                                            var counter=request.responseText;
                                             var span=document.getElementById('count');
                                              span.innerHTML=counter.toString();
    
                                     }
                
                          }
                 };
                 request.open('GET','http://mkheera.imad.hasura-app.io/counter',true);
    request.send(null);
   
};