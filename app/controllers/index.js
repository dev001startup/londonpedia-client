function addMaker(event) {
    var marker = Titanium.Map.createAnnotation({
        latitude : event.venue.lat,
        longitude : event.venue.lng,
        title : event.title,
        pincolor : "Titanium.Map.ANNOTATION_RED"
    });

    $.mapview.addAnnotation(marker);
}

function start() {
    var successCallback = function(response) {
        var events = response.data || [], markers = [];

        _.each(events, function(event, index) {
            addMaker(event);
        });

        // zooms in London
        $.mapview.setRegion({
            latitude : 51.5072,
            longitude : -0.1275,
            latitudeDelta : 0.2,
            longitudeDelta : 0.2
        });
    };

    var errorCallback = function(error) {
        Ti.API.warn(JSON.stringify(error, undefined, 2));
    };

    Alloy.Globals.API.getEvents(successCallback, errorCallback);
}

$.tabGroup.open();