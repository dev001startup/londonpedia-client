console.log("detailPage");

var args = arguments[0] || {}, currentEvent;

currentEvent = _.where(Alloy.Globals.Events, {id: args.annotation.id})[0];

$.header.text = currentEvent.title;
$.photo.image = currentEvent.photo.url;
$.startDate.text = currentEvent.start_date;
$.endDate.text = currentEvent.end_date;
$.address.text = currentEvent.venue.address;

$.page.addEventListener('singletap', function() {
   Alloy.Globals.NAV.closeWin();
});

function doClick() {
    // do something
}