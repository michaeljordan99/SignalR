/// <reference path="../scripts/jquery-1.8.3.js" />
/// <reference path="../scripts/jquery.signalR-1.0.0.js" />
/// <reference path="../Scripts/jquery-ui-1.9.2.js" />

$(function() {

    var hub = $.connection.moveShape,
        $shape = $("#shape");

    //This is what's listening to the Server ...
    hub.client.shapeMoved = function (x, y) {
        $shape.css({ left: x, top: y });
    };

    $.connection.hub.start().done(function () {
        $shape.draggable({
            drag: function () {

                //This calls and updates the Server Method...
                hub.server.moveShape(this.offsetLeft, this.offsetTop || 0);
            }
        });
    });
});