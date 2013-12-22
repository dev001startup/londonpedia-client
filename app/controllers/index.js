console.log('index');

// initialise navigation manager
Alloy.Globals.NAV.init($.container);

function addMaker(event) {
    var marker = Titanium.Map.createAnnotation({
        latitude : event.venue.lat,
        longitude : event.venue.lng,
        title : event.title,
        pincolor : "Titanium.Map.ANNOTATION_RED",
        id : event.id,
        rightButton : Titanium.UI.iPhone.SystemButton.INFO_LIGHT // TODO: replace with image
    });

    $.mapview.addAnnotation(marker);
}

function mapClick(e) {
    if(e.clicksource === "rightButton") {
        Alloy.Globals.NAV.openWin('detailPage', e);
    }
}

function start() {
    var successCallback = function(response) {
        var events = response.data || [], markers = [];

        // add markers to map
        _.each(events, function(event, index) {
            addMaker(event);
        });

        // handle click event in map
        $.mapview.addEventListener('click', mapClick);

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