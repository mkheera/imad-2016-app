var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
                    ${date}
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
//var counter = 0;
// app.get('/counter', function (req, res) {
  // counter = counter + 1;
  //res.send(counter.toString());
  
// });
app.get('/:articleName', function(req, res){
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
