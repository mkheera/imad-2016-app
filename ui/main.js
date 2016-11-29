console.log('Loaded!');
var img = document.getElementById('madi');
var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
    
}
//img.onclick=function(){
   //var interval=setInterval(moveright,500);
//  moveright();
//};

var button=document.getElementById('counter');

button.onclick=function(){
    
                var request=new XMLHttpRequest();
    
                 request.onreadystatechange=function(){
        
        
                          if(request.readyState===XMLHttpRequest.DONE){
            
        
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


var submit=document.getElementById('submit-btn');

submit.onclick=function(){
    
                var request=new XMLHttpRequest();
    
                 request.onreadystatechange=function(){
        
        
                          if(request.readyState===XMLHttpRequest.DONE){
            
        
                                    if(request.status===200){
                                           console.log('user logged in');
                                           alert('logged in sucessfully');
    
                                     }
                                     else if(request.status===403){
                                         alert('username/password is incorrect');
                                     }
                                        else if(request.status===500){
                                            alert('something went wrong');
                                        }
                
                          }
                 };
                
   

var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
console.log('username');
alert('username');

 request.open('POST','http://mkheera.imad.hasura-app.io/login' ,true);
 request.setRequestHeader('Content-Type','application/json');
 request.send(JSON.stringify({username:username ,password:password}));
                 request.send(null);
       
    
};