#LLN Maps
Mobile application providing interactive maps for finding locations in Louvain-la-Neuve (city and campus) developed with Ionic Framework

#Structure
LLN Maps files hierarchy

| Structure        | Description           |
| ------------- |-------------:|
|www ||
|--css	||			
|----fonts				|(fonts module for custom icon)|
|----leaflet-routing-machine.css		|(styles relative to plugin)|
|----style.css				|(styles of the app elements)|
|--img	||
|----buildings				|(pictures of buildings)|
|----tiles				|(map tiles images = area of the map corresponding to each zoom level)|
|----...					|(various images)|			
|--js||
|----controllers||
|--------compass.js			|(compass mode feature)|
|--------content.js			|(various content common for all screens)|
|--------delete.js			|(delete dialog and functions)|
|--------map.js				|(map content and functions - need to be restructured)|
|--------modals.js			|(modals for custom pin, help and show info from inforville)|
|--------search.js			|(search and various functions related to sideMenu)|
|--------tabs.js				|(transition between map and compass modes)|
|----data||
|--------24.js				|(locations for 24h velo - temporarily disabled)|		
|--------auditoriums.js			|(locations for lecture halls)|	
|--------customs.js			|(locations for custom pins - not really useful)|	
|--------entertainment.js		|(locations for entertaining places)|
|--------inforville.js			|(locations for inforville qrtour places - LLN POI's)|
|--------locations.js			|(gather all locations and concat in one list)|
|--------shops.js			|(locations for shops)|
|--------streets.js			|(streets and other locations - name and geolocation only)|
|--------transport.js			|(locations for main transport places in LLN)|
|----directives||
|--------category.js			|(category directive to classify items in sideMenu)|
|--------closeMenu.js			|(directive closing sideMenu when item selected)|
|----services||
|--------building.js			|(get Coordinates for a specific building ID)|
|--------compute.js			|(get distance and bearing between 2 positions)|
|--------data.js				|(search in buildings and streets for a specific key)|
|--------markers.js			|(list of markers - not a service)|
|--------routing.js			|(get routing directions with grapphopper or OSRM)|
|----translation||
|--------translateProvider.js		|(translations for EN/FR)|
|----app.js				|(url router + various app settings + ionicAnalytics)|
|----config.js				|(various config parameters - add your graphhopper API here)|
|--lib					|(various external libraries)|
|--templates||
|----...					|(html templates for each view)|
|--index.html				|(main html page)|
