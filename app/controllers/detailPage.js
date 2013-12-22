console.log("detailPage");

// $.page.open();

$.page.addEventListener('singletap', function() {
   Alloy.Globals.NAV.closeWin();
});

console.log(Alloy.Globals.Events);