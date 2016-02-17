// app.js




















// **********************************
// ***    LIBRARY AND HELPERS     ***
// **********************************

// TODO: try JSdoc or the like


// *********************************
// LOCALSTORAGE: READ AND WRITE DATA

// TODO: download http://stackoverflow.com/questions/283956/is-there-any-way-to-specify-a-suggested-filename-when-using-data-uri/25715985#25715985

// http://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage#2010948

function persist ( key, data ) {
  localStorage.setItem( key, JSON.stringify( data ));
};
function read ( key ) {
  return JSON.parse( localStorage.getItem( key ) );
};


// **********************************
// CONTROL EVENT BUBBLING BIOLERPLATE
// this is sometimes needed for UI-lang when using nested interactive elements

// $('.a-front-container-or-element').click(function(event){ event.stopPropagation(); });


// **********************************
// PREVENT DRAGGING
// makes it feel more like an app, less than a page
// http://stackoverflow.com/questions/17068026/prevent-ios-safari-from-moving-web-page-window-so-drag-event-can-happen/23965074#23965074
$(window).bind( 'touchmove', function(e) { e.preventDefault(); } );


// **********************************
// TELL USER ABOUT UPDATES
// with appcache, reload needs to happen a second time
//  https://gregsramblings.com/2012/05/28/html5-application-cache-how-to/
// there is also appcache nanny, but it looks a bit large-ish for my use case so far
if (window.applicationCache) {
applicationCache.addEventListener('updateready', function() {
  if (confirm('An update is available. Install?')) {
    window.location.reload(); } });}

