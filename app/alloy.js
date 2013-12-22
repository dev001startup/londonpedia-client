// API
Alloy.Globals.API = (function() {
    return Object.create(require('API'));
})();

// Navigation Manager
Alloy.Globals.NAV = (function() {
    return require('NAV');
})();

// cache request
Alloy.Globals.Events = [];

Alloy.Globals.Device = {
    isAndroid : Ti.Platform.osname === "android",
    osname : Ti.Platform.osname,
    width : (Ti.Platform.osname === "android" ? width : Ti.Platform.displayCaps.platformWidth),
    height : (Ti.Platform.osname === "android" ? height : Ti.Platform.displayCaps.platformHeight),
    logicalDensityFactor : (Ti.Platform.osname === "android" ? Ti.Platform.displayCaps.logicalDensityFactor : 1)
};