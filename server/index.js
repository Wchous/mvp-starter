const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../react-client/dist'));


app.use('/categories', function(req, res){
  request( {
    url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=dd50ccfb5ba945d9b69627fcaec6e249`,
    type: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    qs: {
    category: req.query.body,
    source: 'abc-news,al-jazeera-english,bbc-news,breitbart-news,cnn,financial-times,fox-news,msnbc,reuters,rt,the-new-york-times,the-wall-street-journal,the-washington-post,the-washington-times',
    api_key: '04c96ec32bbace5646ad77d7c171ae4a' ,
    format: 'json'
    }
 }, function(err, response, body){
   if (err) {
     throw err
   }
   res.set('Content-Type', 'application/json')
   res.end(body)
 })
})




// app.get('/', (req, res) => {
//   res.send(`hello world`)
// });

// app.post('/results',(req, res) => {
//   console.log(`********* welcome to the server post request ********`)

//   let headlines = req.body.data

//   let callback = (err,res,body)=>{
//     console.log(`************ you're in the callback *************`)
//     if(err){
//       console.log(err)
//     }
//     else if(body){
//       console.log(`******* you're in the BODY of callback*********`)
//       database.save(err, body)
//     }else{
//       console.log(res)
//       res.status(500)
//     }
//   }

//   helper.getHeadlinesByCategory(category, callback)

//   res.end();
// });
// app.get('/results', (req,res) => {
//   db.getArticle((article) =>{
//     res.json(article)
//   })
// })

app.listen(3000, () => {
  console.log('listening on port 3000!');
});