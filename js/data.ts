///<reference path='win.ts'/>
module Data {

    class Location {

        longitude: any;
        latitude: any;
        url: string;
        test: any;
    }

    class MyLocation extends Location {
        retrieved: any;
    }

    var locator = new Windows.Devices.Geolocation.Geolocator();
    locator.getGeopositionAsync().then(function (pos) {
        
        var myLoc = new MyLocation();
        
        myLoc.latitude = pos.coordinate.latitude;
        myLoc.longitude = pos.coordinate.longitude;
        
        myLoc.retrieved = Date.now;
        myLoc.url = "http://maps.googleapis.com/maps/api/staticmap?center=" 
            + myLoc.latitude + "," + myLoc.longitude 
            + "&zoom=12&size=400x400&sensor=false";
        
        // add a new img tag to the document
        var img = document.createElement("img");
        // set the src and style
        img.setAttribute("src", myLoc.url);
        img.setAttribute("style", "height:400px;width:400px;");
        
        // get the paragraph tag we set for the location of the content
        var p = document.body.getElementsByTagName("p")[0];
        p.appendChild(img);
       
    });


    
};