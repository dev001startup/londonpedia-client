Alloy = Alloy || require('alloy');

var xhr = require('XHR'), endPoint = Alloy.CFG.planVine.endPoint, key = Alloy.CFG.planVine.key;

function API() {
    var self = this;

    self.getEvents = function(successCallback, errorCallback) {
        // do nothing if args not a function or not passed in
        if (typeof successCallback === 'undefined' || typeof errorCallback === 'undefined' || !_.isFunction(successCallback) || !_.isFunction(errorCallback)) { return false; }

        var args = {
            "url" : endPoint + "/event?api_key=" + key,
            "method" : "GET",
        };

        xhr.open(args).then(function(obj) {
            data = obj.data;
            if (data && data.data && data.data.length) {
                Alloy.Globals.Events = data.data;
                successCallback(data);
            } else {
                errorCallback(data);
            }
        }, function(error) {
            errorCallback(error);
        });

    };

    return this;
}

module.exports = new API();