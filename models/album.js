var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  // Author = require('./author');

var AlbumSchema = new Schema({
    artistName: String,
    name: String,
    releaseDate: String,
    genres: [String]
  });

  
// var BookSchema = new Schema({
//      title: String,
//      author: {type: Schema.Types.ObjectId, ref: 'Author'},
//      image: String,
//      releaseDate: String,
//      characters: [CharacterSchema]
// });

var Album = mongoose.model('Album', AlbumSchema);
module.exports = Album;
