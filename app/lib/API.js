Alloy = Alloy || require('alloy');

function API() {
    var self = this;

    self.login = function(params) {
        alert('login');
    };

    self.getEvents = function(params) {
        alert('get events');
    };

    return this;
}

module.exports = new API();