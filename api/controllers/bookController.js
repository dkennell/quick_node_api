var mongoose = require('mongoose')

var Book = mongoose.model("books")

exports.get_all_books = function(req, res){
	Book.find({}, function(err, book){
		if (err){
			res.send(err)
		}
		else
		{
			res.json(task)
		}
	})
}