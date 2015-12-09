var shopsMarker = L.AwesomeMarkers.icon({
    prefix: "ion",
    icon: 'ios-cart',
    markerColor: "purple"
});

var shops = [
    {
        id: "ESPLANADE",
        name: "Esplanade Shopping Center",
        pos: L.latLng(50.670245, 4.615706),
        address: "Place de l'Université"
      },
    {
        id: "ALDI",
        name: "Magasin Aldi",
        pos: L.latLng(50.662734, 4.613737),
        address: "Avenue des Musiciens"
      },
    {
        id: "RENMANS",
        name: "Boucherie Renmans",
        pos: L.latLng(50.662734, 4.613737),
        address: "Avenue des Musiciens"
      },
    {
        id: "PHARMACIE",
        name: "Centre Pharmaceutique de LLN",
        pos: L.latLng(50.668956, 4.615002),
        address: "Traverse d'Esope 5"
      },
    {
        id: "SPAR",
        name: "Magasin Spar",
        pos: L.latLng(50.669615, 4.611883),
        address: "Rue Charlemagne 7"
      },
    {
        id: "PROXY",
        name: "Magasin Proxy Delhaize",
        pos: L.latLng(50.669449, 4.615097),
        address: "Grand-Rue 50"
      }
  ];