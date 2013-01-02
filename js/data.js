var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Data;
(function (Data) {
    var Location = (function () {
        function Location() { }
        return Location;
    })();    
    var MyLocation = (function (_super) {
        __extends(MyLocation, _super);
        function MyLocation() {
            _super.apply(this, arguments);

        }
        return MyLocation;
    })(Location);    
    var locator = new Windows.Devices.Geolocation.Geolocator();
    locator.getGeopositionAsync().then(function (pos) {
        var myLoc = new MyLocation();
        myLoc.latitude = pos.coordinate.latitude;
        myLoc.longitude = pos.coordinate.longitude;
        myLoc.retrieved = Date.now;
        myLoc.url = "http://maps.googleapis.com/maps/api/staticmap?center=" + myLoc.latitude + "," + myLoc.longitude + "&zoom=12&size=400x400&sensor=false";
        var img = document.createElement("img");
        img.setAttribute("src", myLoc.url);
        img.setAttribute("style", "height:400px;width:400px;");
        var p = document.body.getElementsByTagName("p")[0];
        p.appendChild(img);
    });
})(Data || (Data = {}));
; ;
