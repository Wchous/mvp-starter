var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3000');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var articleSchema = mongoose.Schema({
  title: String,
  category: String,
  url: String,
  content: String
});

var Article = mongoose.model('Article', articleSchema);

let save = ((err,newsObj) => {
  
  let returnArticle = {}
  for(let i = 0; i<newsObj.length;i++){
    console.log(`HEYYYYYYYYYY it's the parsedObj ${newsObj}`)
    

    returnArticle.title = newsObj[i].title
    returnArticle.category = newsObj[i].category
    returnArticle.url = newsObj[i].url
    returnArticle.content = newsObj[i].descroption
  }
  console.log(`********* ${returnArticle}`)

  let headlines = new Article(returnArticle)
  
  headlines.save()
})

let selectAll = (callback) => {
  Article.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  }).limit(10)
};

module.exports.save = save
module.exports.selectAll = selectAll;