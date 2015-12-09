var locations = [
    auditoriums,
    customPins,
    entertainment,
    inforville,
    shops,
    transport    
];

var list = [], streetList = [];

function concat(list){
   var results = [];
   for(array in list){
        results = results.concat(list[array]);   
   }
   return results;
}