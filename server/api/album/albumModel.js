var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({

});

module.exports = mongoose.model('album', AlbumSchema);