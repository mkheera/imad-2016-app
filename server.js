var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool= require('pg').Pool;
var config={
    user:'mkheera',
    database:'mkheera',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));
var articles={

'article-one':{
    title:'Article one Heera',
    heading:'Article one',
    date:'Sept 5 2016',
    content: 
                `<p>
                        This is my content for my first article.This iThis is my content for my first articleThis is my content for my first articleThis is my content for my first articleThis is my content for my first articleThis is my content for my first articleThis is my content for my first articles my content for my first articleThis is my content for my first articleThis is my content for my first articleThis is my content for my first articleThis is my content for my first articleThis is my content for my first articleThis is my content for my first articleThis is my content for my first articleThis is my content for my first article
                    </p>
                    <p>
                       This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para.
                    </p>
                    <p>
                       third para
                    </p>`
},
'article-two':{ title:'Article Two |Heera',
    heading:'Article two',
    date:'Sept 10 2016',
    content: 
                `<p>
                        This is my content for my seond article.
                    </p>
                    <p>
                       This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para.
                    </p>
                    <p>
                        third para
                    </p>`},
'article-three':{title:'Article three |Heera',
    heading:'Article three',
    date:'Sept 15 2016',
    content: 
                `<p>
                        This is my content for my third article.
                    </p>
                    <p>
                       This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para. This is my second para.
                    </p>
                    <p>
                        third para
                    </p>`}
};


function createTemplate(data){

    var title = data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;


var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
    <body>
        <div class="container">
        <div>
            <a href='/'>home</a>
            </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date.toDateString()}
                </div>
                <div>
                   ${content}
                </div>
             </div>
                
           
        
    </body>
</html>`
;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
function hash(input,salt){
    var hashed=crypto.pbkdf2sync(input,salt,1000,512,'sha512');
    return hashed.toString('hex');
}

app.get('/hash/:input',function(req,res){
    var hashedString=hash(req.params.input);
    res.send(hashedString);
});
var pool=new Pool(config);
app.get('/test-db',function(req,res){
 pool.query('SELECT * from test',function(err,result){
     if(err){
         res.status(500).send(err.toString());
     }
     else{
         res.send(JSON.stringify(result.rows));
     }
 });  
});


var counter=0;
app.get('/counter',function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
  
 });
  var names=[];
 app.get('/submit-name', function(req, res){
    var name=req.query.name;
names.push(name);
res.send(JSON.stringify(names));
});

 

app.get('/articles/:articleName', function(req, res){
    
    pool.query(" SELECT * FROM article WHERE title= $1",[req.params.articleName] , function(err, result){
        if(err){
         res.status(500).send(err.toString());
     }
     else{
         if(result.rows.length === 0){
             res.status(404).send("article not found");
         }
         else{
         var articleData=result.rows[0];
         res.send(createTemplate(articleData));
     }
     } 
   });
   
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'heera.jpg'));
 
 
});
  app.get('/ui/trees.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'trees.png'));
  
});
  

 


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
