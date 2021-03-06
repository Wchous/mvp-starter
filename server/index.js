const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mongo')


const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

 app.listen(3000, () => {
    console.log(`listening on port 3000!`);
});


// app.get('/', (req, res) => {
//   res.send(`hello world`)
// });
//   helper.getHeadlinesByCategory(category, callback)

//   res.end();
// });
// app.get('/results', (req,res) => {
//   db.getArticle((article) =>{
//     res.json(article)
//   })
// })
