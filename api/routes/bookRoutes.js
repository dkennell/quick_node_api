'use strict'

module.exports = function(app){
 
  var bookInterface = require('../controllers/bookController.js')

  app.route("/books")
    .get(bookInterface.get_all_books)
    .post(bookInterface.create_new_book)

  app.route("/books/:id")
    .get(bookInterface.show_single_book)
    .put(bookInterface.update_book)
    .delete(bookInterface.destroy_book)
}
