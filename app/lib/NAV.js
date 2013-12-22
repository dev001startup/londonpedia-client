Alloy = Alloy || require('alloy');
_ = _ || require('alloy/underscore');

function NAV() {
    var self = this;

    self.history = [];

    self.root = null;

    self.init = function(win) {
        // store root window
        self.history.push(win);
        self.root = win;
    };

    self.getCurrentWindow = function() {
        return self.history[self.history.length - 1];
    };

    self.openWin = function(path, content) {
        var page = Alloy.createController(path, content),
            winParams = {};

        if(OS_IOS) {
            winParams.transition = Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT;
        }
        page.getView().open(winParams);
        self.history.push(page);
    };

    self.closeWin = function() {
        var currentWin = self.getCurrentWindow(),
            winParams = {};

        if(OS_IOS) {
            winParams.transition = Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT;
        }

        // close current window
        currentWin.getView().close(winParams);

        // remove current window from history, returning it
        return self.history.pop(self.history);
    };

    return this;
}

module.exports = new NAV();