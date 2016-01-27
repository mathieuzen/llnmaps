    
    var version = "beta 0.1.4";

    //bounds to map
    var northWestBound = [50.687210, 4.580998];
    var southEastBound = [50.637300, 4.650758];

    //default location to center on if no user plotted 
    var station = L.marker([50.669591, 4.615706]);

    //user div icon with arrow img
    var userIcon = L.divIcon({
        html: '<img src="img/arrow.png"/>',
        className: "user-icon",
        opacity: 0
    });

    //server url for routing machine 
    var defaultURLServer = "http://zensites.no-ip.biz:5000/viaroute";
    var priorURLServer = "http://zensites.no-ip.biz:5000/viaroute";

    //graphhopper enabled
    var graphhopperActive = false;
    var graphhopperKey = "YOUR_API_KEY";
    
    
