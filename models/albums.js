var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AlbumSchema = new Schema({
    name: String,
    image: String
});

var Album = mongoose.model('Album', AlbumSchema);

model.exports = Album;
