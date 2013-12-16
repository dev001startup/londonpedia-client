Alloy = Alloy || require('alloy');
_ = _ || require('alloy/underscore');

var moment = require('alloy/moment'), when = require("thirdparty/when");

function open(args) {
    var timeout, deferred, method, client, msg, errorCallBack;

    try {
        timeout = Alloy.CFG.planVine.timeout;
        deferred = when.defer();

        errorCallBack = function(obj) {
            console.log("errorCallBack");
            Ti.API.warn(JSON.stringify(obj, undefined, 2));
        };

        client = Ti.Network.createHTTPClient({
            onload : function(response) {
                var data = this.getResponseText();

                if (!data) {
                    deferred.reject({
                        status : 'error',
                        code : 200,
                        text : 'response is null',
                        callback : errorCallBack
                    });
                } else {
                    data = JSON.parse(data);
                    deferred.resolve({
                        status : 'success',
                        data : data
                    });
                }
            },

            onerror : function(response) {
                // @TODO: handle client error here
                Ti.API.warn(JSON.stringify(response, undefined, 2));
            },
            timeout : timeout
        });

        client.open(args.method, args.url);
        client.setTimeout(timeout);
        client.send();
    } catch (ex) {
        msg = ex.message || ex;
        deferred.reject({
            status : 'error',
            text : msg,
            callback : errorCallBack
        });

    } finally {
        return deferred.promise;
    }
}

exports.open = open;
