/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var sampleAlbums = [];
sampleAlbums.push({
             artistName: 'Ladyhawke',
             name: 'Ladyhawke',
             releaseDate: '2008, November 18',
             genres: [ 'new wave', 'indie rock', 'synth pop' ]
           });
sampleAlbums.push({
             artistName: 'The Knife',
             name: 'Silent Shout',
             releaseDate: '2006, February 17',
             genres: [ 'synth pop', 'electronica', 'experimental' ]
           });
sampleAlbums.push({
             artistName: 'Juno Reactor',
             name: 'Shango',
             releaseDate: '2000, October 9',
             genres: [ 'electronic', 'goa trance', 'tribal house' ]
           });
sampleAlbums.push({
             artistName: 'Philip Wesley',
             name: 'Dark Night of the Soul',
             releaseDate: '2008, September 12',
             genres: [ 'piano' ]
           });
/* end of hard-coded data */




$(document).ready(function() {
  console.log('app.js loaded!');

  var albumSource = $('#albumTemplate').html();
  template = Handlebars.compile(albumSource);

  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: handleSuccess,
    error: handleError
  });

// renderAlbum(sampleAlbums[0])

// sampleAlbums.forEach(renderAlbum);


function handleSuccess(json){
  console.log(json);
json.forEach(renderAlbum);
}


function handleError(e) {
  console.log('uh oh', e);

  $('#appendAlbum').text('Failed to load albums, is the server working?');
}

});





// this function takes a single album and renders it to the page
function renderAlbum(album) {

  console.log('rendering album:', album);
var albumsHtml = template(album);
 $('#appendAlbum').append(albumsHtml);
}
