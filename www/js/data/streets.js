var streetsMarker = L.AwesomeMarkers.icon({
    prefix: "ion",
    icon: 'android-walk',
    markerColor: 'gray'
});

streets = [
    {
        "lat": 50.6682012,
        "long": 4.6128839,
        "id": "Louvain-la-Neuve"
    },
    {
        "lat": 50.6690839,
        "long": 4.6104872,
        "id": "Parking Grand-Place"
    },
    {
        "lat": 50.6688527,
        "long": 4.6114219,
        "id": "Quai 14"
    },
    {
        "lat": 50.6696360,
        "long": 4.6153916,
        "id": "Quai 18"
    },
    {
        "lat": 50.6652173,
        "long": 4.6138208,
        "id": "Le terrain d'aventures"
    },
    {
        "lat": 50.6698521,
        "long": 4.6101301,
        "id": "Musée de Louvain-la-Neuve"
    },
    {
        "lat": 50.6691551,
        "long": 4.6132895,
        "id": "La Galoute"
    },
    {
        "lat": 50.6698240,
        "long": 4.6148010,
        "id": "Université Catholique de Louvain"
    },
    {
        "lat": 50.6686675,
        "long": 4.6150999,
        "id": "Au Coeur des Sens"
    },
    {
        "lat": 50.6694120,
        "long": 4.6149766,
        "id": "La Cidec"
    },
    {
        "lat": 50.6717140,
        "long": 4.6176278,
        "id": "Delhaize"
    },
    {
        "lat": 50.6723528,
        "long": 4.6227228,
        "id": "La Baraque"
    },
    {
        "lat": 50.6723461,
        "long": 4.6234845,
        "id": "La Fattoria"
    },
    {
        "lat": 50.6678741,
        "long": 4.6137011,
        "id": "Louvain-la-Neuve Gare d'Autobus Quai 9"
    },
    {
        "lat": 50.6681969,
        "long": 4.6167077,
        "id": "Parking des Borains"
    },
    {
        "lat": 50.6697759,
        "long": 4.6161299,
        "id": "Louvain-la-Neuve-Université"
    },
    {
        "lat": 50.6688545,
        "long": 4.6131044,
        "id": "Le Rabelais"
    },
    {
        "lat": 50.6691282,
        "long": 4.6133807,
        "id": "Le Cambridge"
    },
    {
        "lat": 50.6694019,
        "long": 4.6123319,
        "id": "Le Grand-Place"
    },
    {
        "lat": 50.6691353,
        "long": 4.6113353,
        "id": "Le Beckett's"
    },
    {
        "lat": 50.6698730,
        "long": 4.6117886,
        "id": "Street food Café"
    },
    {
        "lat": 50.6692404,
        "long": 4.6162909,
        "id": "Les Halles"
    },
    {
        "lat": 50.6686535,
        "long": 4.6167376,
        "id": "Onlywood"
    },
    {
        "lat": 50.6685485,
        "long": 4.6165215,
        "id": "Brasse-Temps"
    },
    {
        "lat": 50.6686233,
        "long": 4.6162104,
        "id": "La Mère Filioux"
    },
    {
        "lat": 50.6694903,
        "long": 4.6147781,
        "id": "Zanzibar"
    },
    {
        "lat": 50.6696229,
        "long": 4.6144026,
        "id": "Quick"
    },
    {
        "lat": 50.6695141,
        "long": 4.6125304,
        "id": "Librairie Libris Agora"
    },
    {
        "lat": 50.6689123,
        "long": 4.6107977,
        "id": "Quai 10"
    },
    {
        "lat": 50.6686267,
        "long": 4.6104973,
        "id": "Quai 11"
    },
    {
        "lat": 50.6642350,
        "long": 4.6100122,
        "id": "Près de chez soi"
    },
    {
        "lat": 50.6693170,
        "long": 4.6144570,
        "id": "Des Prés"
    },
    {
        "lat": 50.6699983,
        "long": 4.6148355,
        "id": "Exki"
    },
    {
        "lat": 50.6701414,
        "long": 4.6151136,
        "id": "Mobistar"
    },
    {
        "lat": 50.6701805,
        "long": 4.6147958,
        "id": "V.I.P."
    },
    {
        "lat": 50.6697285,
        "long": 4.6121400,
        "id": "Le Caprice"
    },
    {
        "lat": 50.6703744,
        "long": 4.6148376,
        "id": "MadZebu"
    },
    {
        "lat": 50.6699699,
        "long": 4.6156792,
        "id": "Botanic"
    },
    {
        "lat": 50.6696382,
        "long": 4.6152065,
        "id": "ING"
    },
    {
        "lat": 50.6701788,
        "long": 4.6153175,
        "id": "Le Coup de Théâtre"
    },
    {
        "lat": 50.6700666,
        "long": 4.6155535,
        "id": "Voyages Copine"
    },
    {
        "lat": 50.6696910,
        "long": 4.6142160,
        "id": "Bellerose"
    },
    {
        "lat": 50.6701312,
        "long": 4.6154087,
        "id": "Plein Sud"
    },
    {
        "lat": 50.6703165,
        "long": 4.6162682,
        "id": "Fnac"
    },
    {
        "lat": 50.6701601,
        "long": 4.6161394,
        "id": "Harrisson"
    },
    {
        "lat": 50.6706804,
        "long": 4.6161217,
        "id": "Esprit"
    },
    {
        "lat": 50.6705547,
        "long": 4.6159152,
        "id": "Massimo Dutti"
    },
    {
        "lat": 50.6710610,
        "long": 4.6102015,
        "id": "CLL"
    },
    {
        "lat": 50.6661541,
        "long": 4.6228163,
        "id": "Louvain-la-Neuve Cyclotron"
    },
    {
        "lat": 50.6700870,
        "long": 4.6154560,
        "id": "Leonidas"
    },
    {
        "lat": 50.6701671,
        "long": 4.6151838,
        "id": "Le Foutoire"
    },
    {
        "lat": 50.6695710,
        "long": 4.6136200,
        "id": "Armand Thierry"
    },
    {
        "lat": 50.6701901,
        "long": 4.6152106,
        "id": "Papyrus"
    },
    {
        "lat": 50.6697841,
        "long": 4.6160999,
        "id": "Planet Video"
    },
    {
        "lat": 50.6699087,
        "long": 4.6155827,
        "id": "Hair Borist"
    },
    {
        "lat": 50.6698373,
        "long": 4.6154861,
        "id": "Scalliet"
    },
    {
        "lat": 50.6697520,
        "long": 4.6156590,
        "id": "Planet Bijoux"
    },
    {
        "lat": 50.6699134,
        "long": 4.6148036,
        "id": "MacLine"
    },
    {
        "lat": 50.6727712,
        "long": 4.6099313,
        "id": "Belighted"
    },
    {
        "lat": 50.6712753,
        "long": 4.6092367,
        "id": "Le Piano"
    },
    {
        "lat": 50.6700490,
        "long": 4.6150600,
        "id": "Novoptic"
    },
    {
        "lat": 50.6705309,
        "long": 4.6155236,
        "id": "La Cité Impériale"
    },
    {
        "lat": 50.6705009,
        "long": 4.6163530,
        "id": "Etam"
    },
    {
        "lat": 50.6701312,
        "long": 4.6157081,
        "id": "Belfius Louvain-la-Neuve"
    },
    {
        "lat": 50.6696061,
        "long": 4.6130626,
        "id": "Woke"
    },
    {
        "lat": 50.6707503,
        "long": 4.6047803,
        "id": "Chez Jean-Lou"
    },
    {
        "lat": 50.6602431,
        "long": 4.6038799,
        "id": "Ottignies Clairs Vallons"
    },
    {
        "lat": 50.6690843,
        "long": 4.6119763,
        "id": "Magasin Oxfam"
    },
    {
        "lat": 50.6683448,
        "long": 4.6178355,
        "id": "ASBL Gratte BW"
    },
    {
        "lat": 50.6683696,
        "long": 4.6161033,
        "id": "Altérez-vous"
    },
    {
        "lat": 50.6704201,
        "long": 4.6098386,
        "id": "Centre Audio Visuel (CAV)"
    },
    {
        "lat": 50.6699410,
        "long": 4.6099783,
        "id": "Bibliothèque"
    },
    {
        "lat": 50.6681974,
        "long": 4.6159691,
        "id": "Le Respect-Table"
    },
    {
        "lat": 50.6634700,
        "long": 4.6316226,
        "id": "Louvain-la-Neuve Parc Scientifique"
    },
    {
        "lat": 50.6602621,
        "long": 4.6264088,
        "id": "McKinsey&Co"
    },
    {
        "lat": 50.6598576,
        "long": 4.6266277,
        "id": "foto.com"
    },
    {
        "lat": 50.6688348,
        "long": 4.5873409,
        "id": "Ottignies Avenue des Bouvreuils"
    },
    {
        "lat": 50.6669446,
        "long": 4.5935534,
        "id": "Ottignies Pont du Pape"
    },
    {
        "lat": 50.6691113,
        "long": 4.6078479,
        "id": "Louvain-la-Neuve Champs Vallée"
    },
    {
        "lat": 50.6711503,
        "long": 4.6060511,
        "id": "Louvain-la-Neuve Hocaille"
    },
    {
        "lat": 50.6641839,
        "long": 4.6127245,
        "id": "Louvain-la-Neuve Aldi"
    },
    {
        "lat": 50.6710212,
        "long": 4.6158452,
        "id": "Louvain-la-Neuve Centre Commercial"
    },
    {
        "lat": 50.6621442,
        "long": 4.6066571,
        "id": "Louvain-la-Neuve Ferme Équestre"
    },
    {
        "lat": 50.6641401,
        "long": 4.6206860,
        "id": "Louvain-la-Neuve Météo"
    },
    {
        "lat": 50.6637677,
        "long": 4.6102037,
        "id": "Louvain-la-Neuve Place de l'Equerre"
    },
    {
        "lat": 50.6693436,
        "long": 4.6276249,
        "id": "Louvain-la-Neuve Rue Genistroit"
    },
    {
        "lat": 50.6652551,
        "long": 4.5876423,
        "id": "Ottignies Cité Bauloy"
    },
    {
        "lat": 50.6636917,
        "long": 4.6200140,
        "id": "Louvain-La-Neuve, Météo"
    },
    {
        "lat": 50.6658719,
        "long": 4.5995784,
        "id": "À La Chope"
    },
    {
        "lat": 50.6643173,
        "long": 4.6097423,
        "id": "Pharmacie des Bruyeres"
    },
    {
        "lat": 50.6739057,
        "long": 4.6170231,
        "id": "Au près de chez soi"
    },
    {
        "lat": 50.6641280,
        "long": 4.6192161,
        "id": "La Marjolaine"
    },
    {
        "lat": 50.6681419,
        "long": 4.6122232,
        "id": "BSPO"
    },
    {
        "lat": 50.6691406,
        "long": 4.6131263,
        "id": "Empreintes Nomades"
    },
    {
        "lat": 50.6692502,
        "long": 4.6131612,
        "id": "Pitta"
    },
    {
        "lat": 50.6697653,
        "long": 4.6135769,
        "id": "Belgicanos"
    },
    {
        "lat": 50.6690155,
        "long": 4.6131237,
        "id": "Fast food chinois"
    },
    {
        "lat": 50.6671660,
        "long": 4.6102120,
        "id": "Compost des Bruyères"
    },
    {
        "lat": 50.6659728,
        "long": 4.6239920,
        "id": "Centre Cerfaux Lefort"
    },
    {
        "lat": 50.6702775,
        "long": 4.6153475,
        "id": "Harvard's"
    },
    {
        "lat": 50.6696906,
        "long": 4.6152132,
        "id": "Léon et Valérie"
    },
    {
        "lat": 50.6692263,
        "long": 4.6161277,
        "id": "Monument 24h Vélos"
    },
    {
        "lat": 50.6695288,
        "long": 4.6156617,
        "id": "Kaf-Kaf"
    },
    {
        "lat": 50.6690903,
        "long": 4.6112187,
        "id": "Gin and Juice"
    },
    {
        "lat": 50.6683938,
        "long": 4.6166075,
        "id": "Mini Louis Delhaize"
    },
    {
        "lat": 50.6684119,
        "long": 4.6164507,
        "id": "Coiffure Mo"
    },
    {
        "lat": 50.6675790,
        "long": 4.6245845,
        "id": "Coeur du 1er cyclotron belge"
    },
    {
        "lat": 50.6695578,
        "long": 4.6122488,
        "id": "Diminu'tif"
    },
    {
        "lat": 50.6686301,
        "long": 4.6116344,
        "id": "Quai 13"
    },
    {
        "lat": 50.6692100,
        "long": 4.6103262,
        "id": "Quai 7"
    },
    {
        "lat": 50.6700405,
        "long": 4.6140832,
        "id": "Quai 4"
    },
    {
        "lat": 50.6686180,
        "long": 4.6146491,
        "id": "Quai 16"
    },
    {
        "lat": 50.6690094,
        "long": 4.6150560,
        "id": "Quai 17"
    },
    {
        "lat": 50.6722646,
        "long": 4.6176659,
        "id": "Quai 1"
    },
    {
        "lat": 50.6720694,
        "long": 4.6173953,
        "id": "Quai 2"
    },
    {
        "lat": 50.6707615,
        "long": 4.6155635,
        "id": "Quai 3"
    },
    {
        "lat": 50.6707274,
        "long": 4.6114111,
        "id": "Quai 6"
    },
    {
        "lat": 50.6703120,
        "long": 4.6165564,
        "id": "Quai 19"
    },
    {
        "lat": 50.6676442,
        "long": 4.6110287,
        "id": "Parking Montesquieu"
    },
    {
        "lat": 50.6703441,
        "long": 4.6108701,
        "id": "Parking Socrate"
    },
    {
        "lat": 50.6709456,
        "long": 4.6117126,
        "id": "Parking Ladeuze"
    },
    {
        "lat": 50.6696712,
        "long": 4.6157629,
        "id": "Parking Halles"
    },
    {
        "lat": 50.6709836,
        "long": 4.6117651,
        "id": "Parking Lovano"
    },
    {
        "lat": 50.6689327,
        "long": 4.6149762,
        "id": "Parking Grand-Rue"
    },
    {
        "lat": 50.6706746,
        "long": 4.6170412,
        "id": "Parking Place Accueil"
    },
    {
        "lat": 50.6696721,
        "long": 4.6128382,
        "id": "Parking Charlemagne"
    },
    {
        "lat": 50.6702969,
        "long": 4.6117064,
        "id": "Polyclinique de Louvain-la-Neuve"
    },
    {
        "lat": 50.6712595,
        "long": 4.6188975,
        "id": "Quai 20"
    },
    {
        "lat": 50.6680509,
        "long": 4.6175447,
        "id": "Cercle Industriel"
    },
    {
        "lat": 50.6678356,
        "long": 4.6197473,
        "id": "Parking Sciences"
    },
    {
        "lat": 50.6693130,
        "long": 4.6048614,
        "id": "Louis Delhaize"
    },
    {
        "lat": 50.6691429,
        "long": 4.6137040,
        "id": "Beer Bar"
    },
    {
        "lat": 50.6684668,
        "long": 4.6182774,
        "id": "LNFM"
    },
    {
        "lat": 50.6679403,
        "long": 4.6130162,
        "id": "Louvain-la-Neuve Gare d'Autobus Quai 1"
    },
    {
        "lat": 50.6677812,
        "long": 4.6129581,
        "id": "Louvain-la-Neuve Gare d'Autobus Quai 2"
    },
    {
        "lat": 50.6676721,
        "long": 4.6129185,
        "id": "Louvain-la-Neuve Gare d'Autobus Quai 3"
    },
    {
        "lat": 50.6674566,
        "long": 4.6135694,
        "id": "Louvain-la-Neuve Gare d'Autobus Quai 4"
    },
    {
        "lat": 50.6676151,
        "long": 4.6135275,
        "id": "Louvain-la-Neuve Gare d'Autobus Quai 5"
    },
    {
        "lat": 50.6676639,
        "long": 4.6132972,
        "id": "Louvain-la-Neuve Gare d'Autobus Quai 6"
    },
    {
        "lat": 50.6678799,
        "long": 4.6132505,
        "id": "Louvain-la-Neuve Gare d'Autobus Quai 7"
    },
    {
        "lat": 50.6679064,
        "long": 4.6135351,
        "id": "Louvain-la-Neuve Gare d'Autobus Quai 8"
    },
    {
        "lat": 50.6625611,
        "long": 4.6310403,
        "id": "Louvain-la-Neuve Rue Rodeuhaie"
    },
    {
        "lat": 50.6595347,
        "long": 4.6157899,
        "id": "Louvain-la-Neuve Parc d'Affaires"
    },
    {
        "lat": 50.6662327,
        "long": 4.6272044,
        "id": "Louvain-la-Neuve Avenue Einstein"
    },
    {
        "lat": 50.6609519,
        "long": 4.6259178,
        "id": "Louvain-la-Neuve Rue Fonds Cattelain"
    },
    {
        "lat": 50.6615595,
        "long": 4.6278263,
        "id": "Louvain-la-Neuve Rue Lenoir"
    },
    {
        "lat": 50.6627730,
        "long": 4.6135583,
        "id": "Aldi"
    },
    {
        "lat": 50.6628174,
        "long": 4.6137280,
        "id": "Riemans"
    },
    {
        "lat": 50.6695610,
        "long": 4.6225738,
        "id": "OpenHub"
    },
    {
        "lat": 50.6624792,
        "long": 4.6060826,
        "id": "Rue des Bâtisseurs"
    },
    {
        "lat": 50.6689283,
        "long": 4.6127228,
        "id": "Carrefour des Vagues"
    },
    {
        "lat": 50.6661921,
        "long": 4.6055888,
        "id": "Lac de Louvain-la-Neuve"
    },
    {
        "lat": 50.6709792,
        "long": 4.5971336,
        "id": "Bois de Lauzelle"
    },
    {
        "lat": 50.6651388,
        "long": 4.5932044,
        "id": "Rue de la Sapinière"
    },
    {
        "lat": 50.6673071,
        "long": 4.5919170,
        "id": "Rue de l'Epine"
    },
    {
        "lat": 50.6688734,
        "long": 4.5873540,
        "id": "Avenue des Bouvreuils"
    },
    {
        "lat": 50.6663675,
        "long": 4.5894375,
        "id": "Cimetière de Blocry"
    },
    {
        "lat": 50.6648117,
        "long": 4.6049880,
        "id": "Rue Victor Horta"
    },
    {
        "lat": 50.6655678,
        "long": 4.6062875,
        "id": "Rue du Chevalet"
    },
    {
        "lat": 50.6646633,
        "long": 4.6065835,
        "id": "Rue du Rondia"
    },
    {
        "lat": 50.6641796,
        "long": 4.6081208,
        "id": "Rue du Bassinia"
    },
    {
        "lat": 50.6633745,
        "long": 4.6071326,
        "id": "Rue du Grand Hornu"
    },
    {
        "lat": 50.6616180,
        "long": 4.6048936,
        "id": "Avenue des Arts"
    },
    {
        "lat": 50.6635071,
        "long": 4.6019305,
        "id": "Rue de Mont-Saint-Guibert"
    },
    {
        "lat": 50.6647776,
        "long": 4.6198840,
        "id": "Avenue du Jardin Botanique"
    },
    {
        "lat": 50.6637370,
        "long": 4.6270648,
        "id": "Avenue Jean Etienne Lenoir"
    },
    {
        "lat": 50.6596583,
        "long": 4.6300839,
        "id": "Rue du Bosquet"
    },
    {
        "lat": 50.6614030,
        "long": 4.6279145,
        "id": "Rue de Rodeuhaie"
    },
    {
        "lat": 50.6654882,
        "long": 4.6285568,
        "id": "Avenue Albert Einstein"
    },
    {
        "lat": 50.6605678,
        "long": 4.6169337,
        "id": "Boulevard Baudouin 1er"
    },
    {
        "lat": 50.6735319,
        "long": 4.6191758,
        "id": "Boulevard de Wallonie"
    },
    {
        "lat": 50.6677165,
        "long": 4.6249444,
        "id": "Avenue Georges Lemaître"
    },
    {
        "lat": 50.6680619,
        "long": 4.6246695,
        "id": "Porte Lemaître"
    },
    {
        "lat": 50.6691689,
        "long": 4.6079831,
        "id": "Champ Vallée"
    },
    {
        "lat": 50.6696275,
        "long": 4.6089521,
        "id": "Église Saint-François-d'Assise"
    },
    {
        "lat": 50.6730454,
        "long": 4.6067668,
        "id": "Boulevard de Lauzelle"
    },
    {
        "lat": 50.6714700,
        "long": 4.6044050,
        "id": "Porte de l'Hocaille"
    },
    {
        "lat": 50.6712159,
        "long": 4.5980661,
        "id": "Royal Ottignies Stimont (ROS)"
    },
    {
        "lat": 50.6694813,
        "long": 4.5979714,
        "id": "Louvain-la-Neuve Hockey Club"
    },
    {
        "lat": 50.6688885,
        "long": 4.5969158,
        "id": "Rugby Ottignies Club (ROC)"
    },
    {
        "lat": 50.6705878,
        "long": 4.6017310,
        "id": "Centre Sportif de Blocry"
    },
    {
        "lat": 50.6701295,
        "long": 4.6048651,
        "id": "Rue de l'Hocaille"
    },
    {
        "lat": 50.6714319,
        "long": 4.6054006,
        "id": "Clos des Gilles"
    },
    {
        "lat": 50.6706016,
        "long": 4.6048100,
        "id": "Rue du Castinia"
    },
    {
        "lat": 50.6708835,
        "long": 4.6048221,
        "id": "Parking du Blocry"
    },
    {
        "lat": 50.6717506,
        "long": 4.6062601,
        "id": "Rue de la Houssière"
    },
    {
        "lat": 50.6711720,
        "long": 4.6057046,
        "id": "Rue des Chinels"
    },
    {
        "lat": 50.6712595,
        "long": 4.6188975,
        "id": "Boucle des Métiers"
    },
    {
        "lat": 50.6668323,
        "long": 4.6126972,
        "id": "Parking Lerclercq"
    },
    {
        "lat": 50.6683235,
        "long": 4.6138396,
        "id": "Parking Sablon"
    },
    {
        "lat": 50.6690998,
        "long": 4.6140064,
        "id": "Grand'Rue"
    },
    {
        "lat": 50.6699425,
        "long": 4.6152393,
        "id": "Place de l'Université"
    },
    {
        "lat": 50.6694033,
        "long": 4.6115021,
        "id": "Grand Place"
    },
    {
        "lat": 50.6716081,
        "long": 4.6112491,
        "id": "École Normale Catholique du Brabant Wallon"
    },
    {
        "lat": 50.6703704,
        "long": 4.6102482,
        "id": "Chemin des Sages"
    },
    {
        "lat": 50.6686044,
        "long": 4.6136462,
        "id": "Théatre Jean Villar"
    },
    {
        "lat": 50.6699718,
        "long": 4.6039205,
        "id": "Place de l'Hocaille"
    },
    {
        "lat": 50.6695064,
        "long": 4.6050742,
        "id": "Place des Ondines"
    },
    {
        "lat": 50.6690564,
        "long": 4.6049142,
        "id": "Rue du Lac"
    },
    {
        "lat": 50.6685704,
        "long": 4.6066185,
        "id": "Rampe du Val"
    },
    {
        "lat": 50.6696213,
        "long": 4.6103454,
        "id": "Place Blaise Pascal"
    },
    {
        "lat": 50.6683029,
        "long": 4.6124624,
        "id": "Place des Doyens"
    },
    {
        "lat": 50.6700116,
        "long": 4.6105365,
        "id": "Place Cardinal Mercier"
    },
    {
        "lat": 50.6687574,
        "long": 4.6116762,
        "id": "Rue Montesquieu"
    },
    {
        "lat": 50.6687574,
        "long": 4.6116762,
        "id": "Ruelle de la Lanterne Magique"
    },
    {
        "lat": 50.6700973,
        "long": 4.6073159,
        "id": "Rue du Marathon"
    },
    {
        "lat": 50.6738042,
        "long": 4.6118419,
        "id": "Route de Mont-Cornillon"
    },
    {
        "lat": 50.6738995,
        "long": 4.6109208,
        "id": "Rue Saint-Ghislain"
    },
    {
        "lat": 50.6729560,
        "long": 4.6142941,
        "id": "Cours de Cramignon"
    },
    {
        "lat": 50.6729994,
        "long": 4.6178201,
        "id": "Cours Marie d'Oignies"
    },
    {
        "lat": 50.6680425,
        "long": 4.6126371,
        "id": "Chemin des Lorrains"
    },
    {
        "lat": 50.6654884,
        "long": 4.6146810,
        "id": "Chemin des Ecoliers"
    },
    {
        "lat": 50.6654133,
        "long": 4.6120881,
        "id": "Avenue du Ciseau"
    },
    {
        "lat": 50.6658065,
        "long": 4.6102349,
        "id": "Avenue de la Palette"
    },
    {
        "lat": 50.6662749,
        "long": 4.6061130,
        "id": "Rêverie du Promeneur Solitaire"
    },
    {
        "lat": 50.6686982,
        "long": 4.6101315,
        "id": "Aula Magna"
    },
    {
        "lat": 50.6686848,
        "long": 4.6107398,
        "id": "Cinéscope"
    },
    {
        "lat": 50.6689481,
        "long": 4.6133514,
        "id": "Place Rabelais"
    },
    {
        "lat": 50.6656253,
        "long": 4.6095088,
        "id": "Bois de la Palette"
    },
    {
        "lat": 50.6711216,
        "long": 4.6170416,
        "id": "L'Esplanade"
    },
    {
        "lat": 50.6740825,
        "long": 4.6130928,
        "id": "Cours de Valduc"
    },
    {
        "lat": 50.6672219,
        "long": 4.6119401,
        "id": "Rue du Buret"
    },
    {
        "lat": 50.6672351,
        "long": 4.6164802,
        "id": "Lycée Martin V"
    },
    {
        "lat": 50.6663708,
        "long": 4.6171925,
        "id": "Collège du Biereau"
    },
    {
        "lat": 50.6676357,
        "long": 4.6152017,
        "id": "Voie des Gaumais"
    },
    {
        "lat": 50.6636831,
        "long": 4.6173224,
        "id": "Place de la Neuville"
    },
    {
        "lat": 50.6684674,
        "long": 4.6169375,
        "id": "Place des Wallons"
    },
    {
        "lat": 50.6672445,
        "long": 4.6148753,
        "id": "Maison Médicale"
    },
    {
        "lat": 50.6677008,
        "long": 4.6178545,
        "id": "Place des Paniers"
    },
    {
        "lat": 50.6682781,
        "long": 4.6194632,
        "id": "Place des Sciences"
    },
    {
        "lat": 50.6702420,
        "long": 4.6029691,
        "id": "Rue des Sports"
    },
    {
        "lat": 50.6695682,
        "long": 4.6059977,
        "id": "Rue du Batty"
    },
    {
        "lat": 50.6623886,
        "long": 4.5954676,
        "id": "Rue de la Malaise"
    },
    {
        "lat": 50.6674653,
        "long": 4.6020174,
        "id": "Avenue des Quatre Bonniers"
    },
    {
        "lat": 50.6687793,
        "long": 4.6289096,
        "id": "Rue Génistroit"
    },
    {
        "lat": 50.6686238,
        "long": 4.6089314,
        "id": "Carrefour d'En Bas"
    },
    {
        "lat": 50.6652962,
        "long": 4.6072122,
        "id": "Sentier des Aquarelles"
    },
    {
        "lat": 50.6630207,
        "long": 4.6111889,
        "id": "Rue Marguerite Yourcenar"
    },
    {
        "lat": 50.6630431,
        "long": 4.6112534,
        "id": "Rue Marcel Thiry"
    },
    {
        "lat": 50.6615189,
        "long": 4.6102941,
        "id": "Parvis de la Cantilène"
    },
    {
        "lat": 50.6618077,
        "long": 4.6083275,
        "id": "Rue Marie Gevers"
    },
    {
        "lat": 50.6616347,
        "long": 4.6071350,
        "id": "Chemin de Moulinsart"
    },
    {
        "lat": 50.6627645,
        "long": 4.5872636,
        "id": "Avenue des Bouleaux"
    },
    {
        "lat": 50.6620330,
        "long": 4.5888170,
        "id": "Chemin de la Pépinière"
    },
    {
        "lat": 50.6594920,
        "long": 4.5886310,
        "id": "Piste de Robin"
    },
    {
        "lat": 50.6723318,
        "long": 4.6152628,
        "id": "Place du Bia Bouquet"
    },
    {
        "lat": 50.6656489,
        "long": 4.5903407,
        "id": "Pont du Pape"
    },
    {
        "lat": 50.6681421,
        "long": 4.6130274,
        "id": "Anneau Central-Sud"
    },
    {
        "lat": 50.6701430,
        "long": 4.6127213,
        "id": "Traverse"
    },
    {
        "lat": 50.6719919,
        "long": 4.6187817,
        "id": "Boulevard de Wallonie-Sud"
    },
    {
        "lat": 50.6712558,
        "long": 4.6162558,
        "id": "Boulevard de Wallonie-Nord"
    },
    {
        "lat": 50.6674556,
        "long": 4.6049708,
        "id": "Boulevard André Oleffe"
    },
    {
        "lat": 50.6703441,
        "long": 4.6108701,
        "id": "Anneau Central-Nord"
    },
    {
        "lat": 50.6690434,
        "long": 4.6129463,
        "id": "Agora"
    },
    {
        "lat": 50.6696544,
        "long": 4.6131374,
        "id": "Rue Charlemagne"
    },
    {
        "lat": 50.6694161,
        "long": 4.6139683,
        "id": "Passage de l'Ergot"
    },
    {
        "lat": 50.6693790,
        "long": 4.6131802,
        "id": "Rue Rabelais"
    },
    {
        "lat": 50.6699888,
        "long": 4.6170978,
        "id": "Voie des Hennuyers"
    },
    {
        "lat": 50.6649560,
        "long": 4.5999163,
        "id": "Malaise"
    },
    {
        "lat": 50.6649560,
        "long": 4.5997618,
        "id": "La Malaise"
    },
    {
        "lat": 50.6681900,
        "long": 4.6120376,
        "id": "Rue de la Lanterne Magique"
    },
    {
        "lat": 50.6688872,
        "long": 4.6148546,
        "id": "Traverse d'Ésope"
    },
    {
        "lat": 50.6687139,
        "long": 4.6297024,
        "id": "Fleming"
    },
    {
        "lat": 50.6720991,
        "long": 4.6287040,
        "id": "Monnet"
    },
    {
        "lat": 50.6683203,
        "long": 4.6189445,
        "id": "Bibliothèque  communale et Médiathèque"
    },
    {
        "lat": 50.6677461,
        "long": 4.6189100,
        "id": "Cercle Agro"
    },
    {
        "lat": 50.6677490,
        "long": 4.6191472,
        "id": "Casa"
    },
    {
        "lat": 50.6682040,
        "long": 4.6171984,
        "id": "Chapelle de la Source"
    },
    {
        "lat": 50.6719442,
        "long": 4.6130935,
        "id": "École fondamentale Martin V"
    },
    {
        "lat": 50.6659158,
        "long": 4.5944888,
        "id": "Église Saints-Marie-et-Joseph"
    },
    {
        "lat": 50.6694721,
        "long": 4.6155408,
        "id": "Galerie Saint-Hubert"
    },
    {
        "lat": 50.6731825,
        "long": 4.6240746,
        "id": "Rue de Gilly"
    },
    {
        "lat": 50.6724890,
        "long": 4.6240424,
        "id": "Chemin de Gilly"
    },
    {
        "lat": 50.6712786,
        "long": 4.6252333,
        "id": "Clos des Serres"
    },
    {
        "lat": 50.6708673,
        "long": 4.6226161,
        "id": "Rue de la Baraque"
    },
    {
        "lat": 50.6703575,
        "long": 4.6231794,
        "id": "Rue des Pommiers"
    },
    {
        "lat": 50.6711278,
        "long": 4.6232434,
        "id": "Verger de la Baraque"
    },
    {
        "lat": 50.6716832,
        "long": 4.6184922,
        "id": "Traverse de l'Echange"
    },
    {
        "lat": 50.6674075,
        "long": 4.6168949,
        "id": "Avenue de l'Espinette"
    },
    {
        "lat": 50.6644939,
        "long": 4.6187215,
        "id": "Scavée du Biéreau"
    },
    {
        "lat": 50.6662177,
        "long": 4.6166718,
        "id": "Rue du Collège"
    },
    {
        "lat": 50.6659329,
        "long": 4.6181009,
        "id": "Place Polyvalente"
    },
    {
        "lat": 50.6630347,
        "long": 4.6213032,
        "id": "Terrain de baseball"
    },
    {
        "lat": 50.6656142,
        "long": 4.6151918,
        "id": "Bois de Florival"
    },
    {
        "lat": 50.6629946,
        "long": 4.6154895,
        "id": "Place des Giroflées"
    },
    {
        "lat": 50.6641278,
        "long": 4.6153694,
        "id": "Rue de la Serpentine"
    },
    {
        "lat": 50.6632340,
        "long": 4.6122590,
        "id": "Bois des Bruyères"
    },
    {
        "lat": 50.6643155,
        "long": 4.6133104,
        "id": "Lycée Martin V - Bruyères"
    },
    {
        "lat": 50.6661743,
        "long": 4.6106623,
        "id": "Rue des Bruyères"
    },
    {
        "lat": 50.6647723,
        "long": 4.6106447,
        "id": "Rue Constantin Meunier"
    },
    {
        "lat": 50.6660778,
        "long": 4.6108231,
        "id": "Place René Magritte"
    },
    {
        "lat": 50.6657685,
        "long": 4.6115299,
        "id": "Car d'Or"
    },
    {
        "lat": 50.6662974,
        "long": 4.6116444,
        "id": "Rue Réné Magritte"
    },
    {
        "lat": 50.6658570,
        "long": 4.6121361,
        "id": "EPHEC"
    },
    {
        "lat": 50.6628949,
        "long": 4.6165886,
        "id": "Avenue des Coteaux"
    },
    {
        "lat": 50.6620438,
        "long": 4.6156834,
        "id": "Place des Primevères"
    },
    {
        "lat": 50.6621799,
        "long": 4.6157705,
        "id": "Rue de la Citronnelle"
    },
    {
        "lat": 50.6617773,
        "long": 4.6167000,
        "id": "Rue de l'Angélique"
    },
    {
        "lat": 50.6623125,
        "long": 4.6175164,
        "id": "Place de la Sauge"
    },
    {
        "lat": 50.6619237,
        "long": 4.6166879,
        "id": "Place des Capucines"
    },
    {
        "lat": 50.6623159,
        "long": 4.6163713,
        "id": "Rue des Primevères"
    },
    {
        "lat": 50.6629163,
        "long": 4.6151395,
        "id": "Chemin des Saxophones"
    },
    {
        "lat": 50.6630949,
        "long": 4.6187235,
        "id": "Rue de la Sarriette"
    },
    {
        "lat": 50.6632341,
        "long": 4.6183272,
        "id": "Cour de la Sariette"
    },
    {
        "lat": 50.6635295,
        "long": 4.6170799,
        "id": "Rue des Violettes"
    },
    {
        "lat": 50.6637305,
        "long": 4.6186199,
        "id": "Place de la Sarriette"
    },
    {
        "lat": 50.6641877,
        "long": 4.6181247,
        "id": "Rue du Sarcloir"
    },
    {
        "lat": 50.6645674,
        "long": 4.6176038,
        "id": "Rue Émile Goës"
    },
    {
        "lat": 50.6651492,
        "long": 4.6186136,
        "id": "Rue Émile Goes"
    },
    {
        "lat": 50.6643717,
        "long": 4.6194638,
        "id": "Place de la Marjolaine"
    },
    {
        "lat": 50.6658412,
        "long": 4.6173896,
        "id": "Ferme du Biéreau"
    },
    {
        "lat": 50.6660455,
        "long": 4.6154782,
        "id": "Chemin de Florival"
    },
    {
        "lat": 50.6655382,
        "long": 4.6153562,
        "id": "Rampe de Floribois"
    },
    {
        "lat": 50.6657496,
        "long": 4.6156519,
        "id": "Sentier du Goria"
    },
    {
        "lat": 50.6683289,
        "long": 4.6159949,
        "id": "Rampe des Ardennais"
    },
    {
        "lat": 50.6672081,
        "long": 4.6146031,
        "id": "Voie du Roman Pays"
    },
    {
        "lat": 50.6677539,
        "long": 4.6133676,
        "id": "Louvain-La-Neuve, Gare d'Autobus"
    },
    {
        "lat": 50.6627010,
        "long": 4.6102663,
        "id": "Avenue Maurice Maeterlinck"
    },
    {
        "lat": 50.6622970,
        "long": 4.6092763,
        "id": "Place des Poètes"
    },
    {
        "lat": 50.6617487,
        "long": 4.6099962,
        "id": "Rue des Poètes"
    },
    {
        "lat": 50.6625641,
        "long": 4.6097994,
        "id": "Rue Henry Michaux"
    },
    {
        "lat": 50.6618415,
        "long": 4.6083967,
        "id": "Rue Achille Chavée"
    },
    {
        "lat": 50.6618415,
        "long": 4.6083967,
        "id": "Avenue Émile Verhaeren"
    },
    {
        "lat": 50.6621468,
        "long": 4.6112749,
        "id": "Rue Jean Froissart"
    },
    {
        "lat": 50.6632728,
        "long": 4.6116739,
        "id": "Chemin du Commissaire Maigret"
    },
    {
        "lat": 50.6632272,
        "long": 4.6125548,
        "id": "Chemin de Trignolles"
    },
    {
        "lat": 50.6613159,
        "long": 4.6090024,
        "id": "Rue Albert Mockel"
    },
    {
        "lat": 50.6630574,
        "long": 4.6072606,
        "id": "Place Victor Horta"
    },
    {
        "lat": 50.6645442,
        "long": 4.6060033,
        "id": "Scavée du Point du Jour"
    },
    {
        "lat": 50.6644763,
        "long": 4.6089649,
        "id": "Avenue de l'Équerre"
    },
    {
        "lat": 50.6653948,
        "long": 4.6075787,
        "id": "Chemin des Fondeurs"
    },
    {
        "lat": 50.6684753,
        "long": 4.6161290,
        "id": "Place des Brabançons"
    },
    {
        "lat": 50.6682174,
        "long": 4.6165005,
        "id": "Cour des Borains"
    },
    {
        "lat": 50.6689062,
        "long": 4.6158771,
        "id": "Sentier du Luxembourg"
    },
    {
        "lat": 50.6687022,
        "long": 4.6172507,
        "id": "Impasse de Picardie"
    },
    {
        "lat": 50.6699415,
        "long": 4.6162269,
        "id": "Rue des Condruziens"
    },
    {
        "lat": 50.6681063,
        "long": 4.6172304,
        "id": "Rue des Liégeois"
    },
    {
        "lat": 50.6674915,
        "long": 4.6181234,
        "id": "Rue du Pont Neuf"
    },
    {
        "lat": 50.6680608,
        "long": 4.6179362,
        "id": "Ruelle Saint-Éloi"
    },
    {
        "lat": 50.6681458,
        "long": 4.6189070,
        "id": "Place Galilée"
    },
    {
        "lat": 50.6684639,
        "long": 4.6181035,
        "id": "Ruelle Dédale"
    },
    {
        "lat": 50.6683573,
        "long": 4.6190810,
        "id": "Le Galilée"
    },
    {
        "lat": 50.6676440,
        "long": 4.6187148,
        "id": "Pont-Neuf"
    },
    {
        "lat": 50.6678761,
        "long": 4.6194990,
        "id": "LOCI"
    },
    {
        "lat": 50.6681671,
        "long": 4.6229631,
        "id": "Vinci"
    },
    {
        "lat": 50.6687457,
        "long": 4.6216051,
        "id": "Réaumur"
    },
    {
        "lat": 50.6693456,
        "long": 4.6223129,
        "id": "Halls GTPL"
    },
    {
        "lat": 50.6689568,
        "long": 4.6207766,
        "id": "Voie Mickeleers"
    },
    {
        "lat": 50.6698555,
        "long": 4.6232236,
        "id": "ADST"
    },
    {
        "lat": 50.6689899,
        "long": 4.6249534,
        "id": "Rédimé"
    },
    {
        "lat": 50.6693314,
        "long": 4.6176683,
        "id": "Rue Lavoisier"
    },
    {
        "lat": 50.6700014,
        "long": 4.6181706,
        "id": "Parking des Wallons"
    },
    {
        "lat": 50.6710853,
        "long": 4.6214506,
        "id": "Rue des Artisans"
    },
    {
        "lat": 50.6706911,
        "long": 4.6204679,
        "id": "Voie du Vieux Quartier"
    },
    {
        "lat": 50.6708598,
        "long": 4.6225123,
        "id": "Rue du Jardinier"
    },
    {
        "lat": 50.6703335,
        "long": 4.6208238,
        "id": "Rue du Pépin"
    },
    {
        "lat": 50.6708231,
        "long": 4.6195739,
        "id": "Sentier des Ménagères"
    },
    {
        "lat": 50.6713885,
        "long": 4.6196697,
        "id": "Rue des Tisserands"
    },
    {
        "lat": 50.6713126,
        "long": 4.6204054,
        "id": "Rue du Facteur"
    },
    {
        "lat": 50.6715375,
        "long": 4.6204424,
        "id": "Rue du Potier"
    },
    {
        "lat": 50.6700180,
        "long": 4.6143757,
        "id": "Cour Durendal"
    },
    {
        "lat": 50.6645269,
        "long": 4.6098756,
        "id": "Place du Perron"
    },
    {
        "lat": 50.6647474,
        "long": 4.6102505,
        "id": "Rue du Perron"
    },
    {
        "lat": 50.6650763,
        "long": 4.6091072,
        "id": "Fond du Maître de Flémalle"
    },
    {
        "lat": 50.6646701,
        "long": 4.6073399,
        "id": "Chemin du Fil à Plomb"
    },
    {
        "lat": 50.6652969,
        "long": 4.6076291,
        "id": "Chemin des Graveurs"
    },
    {
        "lat": 50.6652285,
        "long": 4.5883061,
        "id": "Rue du Bauloy"
    },
    {
        "lat": 50.6640816,
        "long": 4.5876183,
        "id": "Clos du Grand Feu"
    },
    {
        "lat": 50.6645011,
        "long": 4.5888723,
        "id": "Clos des Lutins"
    },
    {
        "lat": 50.6649460,
        "long": 4.5885426,
        "id": "Clos du Tumulus"
    },
    {
        "lat": 50.6628398,
        "long": 4.5872144,
        "id": "Clos Marie Doudouye"
    },
    {
        "lat": 50.6642307,
        "long": 4.5897006,
        "id": "Clos des Gaulois"
    },
    {
        "lat": 50.6637484,
        "long": 4.5889065,
        "id": "Clos du Camp Romain"
    },
    {
        "lat": 50.6665660,
        "long": 4.6094103,
        "id": "Rue Pierre-Joseph Redouté"
    },
    {
        "lat": 50.6665571,
        "long": 4.6106343,
        "id": "Passage des Dinandiers"
    },
    {
        "lat": 50.6676288,
        "long": 4.6096715,
        "id": "Rue Basse"
    },
    {
        "lat": 50.6684030,
        "long": 4.6099055,
        "id": "Rue des Frères Lumière"
    },
    {
        "lat": 50.6682663,
        "long": 4.6104758,
        "id": "Chemin des Décrets"
    },
    {
        "lat": 50.6676364,
        "long": 4.6104593,
        "id": "Chemin d'Aristote"
    },
    {
        "lat": 50.6679997,
        "long": 4.6107722,
        "id": "Thomas More"
    },
    {
        "lat": 50.6684994,
        "long": 4.6113569,
        "id": "Auditoires Montesquieu (MONT)"
    },
    {
        "lat": 50.6684546,
        "long": 4.6120523,
        "id": "Dupriez"
    },
    {
        "lat": 50.6681601,
        "long": 4.6116657,
        "id": "Traverse Jaune"
    },
    {
        "lat": 50.6681393,
        "long": 4.6090136,
        "id": "Parking Aula Magna"
    },
    {
        "lat": 50.6622868,
        "long": 4.6305540,
        "id": "Ottignies - Mont-Saint-Guibert"
    },
    {
        "lat": 50.6734890,
        "long": 4.6311533,
        "id": "Chaumont-Gistoux - Ottignies-Louvain-la-Neuve"
    },
    {
        "lat": 50.6724083,
        "long": 4.6317613,
        "id": "E 411"
    },
    {
        "lat": 50.6687102,
        "long": 4.5889455,
        "id": "Rue de l'Invasion"
    },
    {
        "lat": 50.6620307,
        "long": 4.5953138,
        "id": "Bois des Rêves"
    },
    {
        "lat": 50.6661873,
        "long": 4.5926289,
        "id": "Château d'eau d'Ottignies"
    },
    {
        "lat": 50.6729631,
        "long": 4.6078923,
        "id": "Clos Gouyasse"
    },
    {
        "lat": 50.6712801,
        "long": 4.6123922,
        "id": "Chemin de Flupke"
    },
    {
        "lat": 50.6601025,
        "long": 4.6133959,
        "id": "Rue des Harmonies"
    },
    {
        "lat": 50.6615966,
        "long": 4.6141210,
        "id": "Clos des Violoneux"
    },
    {
        "lat": 50.6608956,
        "long": 4.6144017,
        "id": "Rue des Carilloneurs"
    },
    {
        "lat": 50.6602854,
        "long": 4.6152480,
        "id": "Clos des Sonneurs"
    },
    {
        "lat": 50.6607622,
        "long": 4.6146229,
        "id": "Clos des Fifres"
    },
    {
        "lat": 50.6603828,
        "long": 4.6144176,
        "id": "Sentier des Tambourins"
    },
    {
        "lat": 50.6606409,
        "long": 4.6113489,
        "id": "Place du Plat Pays"
    },
    {
        "lat": 50.6602208,
        "long": 4.6134300,
        "id": "Sentier de la Maclotte"
    },
    {
        "lat": 50.6613968,
        "long": 4.6114533,
        "id": "Rue Maurice Grevisse"
    },
    {
        "lat": 50.6719632,
        "long": 4.6165038,
        "id": "Rue de la Longue Haie"
    },
    {
        "lat": 50.6654688,
        "long": 4.6250921,
        "id": "Chemin du Cyclotron"
    },
    {
        "lat": 50.6673244,
        "long": 4.6234200,
        "id": "Avenue Théodore Schwann"
    },
    {
        "lat": 50.6669726,
        "long": 4.6264806,
        "id": "Centre d'examen permis de conduire"
    },
    {
        "lat": 50.6657534,
        "long": 4.6273216,
        "id": "New Tech Center"
    },
    {
        "lat": 50.6598322,
        "long": 4.6283888,
        "id": "I.R.I.S. sa"
    },
    {
        "lat": 50.6614622,
        "long": 4.6256751,
        "id": "Ciaco"
    },
    {
        "lat": 50.6714327,
        "long": 4.6115908,
        "id": "Chemin de la Bardane"
    },
    {
        "lat": 50.6698107,
        "long": 4.6308011,
        "id": "Rue du Génistroit"
    },
    {
        "lat": 50.6721896,
        "long": 4.6326159,
        "id": "Rue de Mèves"
    },
    {
        "lat": 50.6622543,
        "long": 4.6051905,
        "id": "Rue de la Ferme des Bruyères"
    },
    {
        "lat": 50.6606734,
        "long": 4.6094351,
        "id": "Chemin de Montauban"
    },
    {
        "lat": 50.6628197,
        "long": 4.6283035,
        "id": "Firmenich"
    },
    {
        "lat": 50.6641559,
        "long": 4.6263467,
        "id": "Yellow events"
    },
    {
        "lat": 50.6732760,
        "long": 4.6093169,
        "id": "Rue de la Haute Borne"
    },
    {
        "lat": 50.6728868,
        "long": 4.6100327,
        "id": "Voie Cardijn"
    },
    {
        "lat": 50.6669452,
        "long": 4.6211880,
        "id": "Boltzmann"
    },
    {
        "lat": 50.6729456,
        "long": 4.6088956,
        "id": "Rue du Try Martin"
    },
    {
        "lat": 50.6729092,
        "long": 4.6055293,
        "id": "Lauzelle"
    },
    {
        "lat": 50.6714172,
        "long": 4.6039264,
        "id": "Marcel Huet"
    },
    {
        "lat": 50.6690570,
        "long": 4.6096014,
        "id": "Parking Lac (ex-Musée)"
    },
    {
        "lat": 50.6728907,
        "long": 4.6156417,
        "id": "Chemin du Bia Bouquet"
    },
    {
        "lat": 50.6721632,
        "long": 4.6044313,
        "id": "Taille Djauquet"
    },
    {
        "lat": 50.6729427,
        "long": 4.6159625,
        "id": "Rue Charles de Loupoigne"
    },
    {
        "lat": 50.6737546,
        "long": 4.6168193,
        "id": "Place Verte"
    },
    {
        "lat": 50.6726939,
        "long": 4.6159126,
        "id": "Verte Voie"
    },
    {
        "lat": 50.6718750,
        "long": 4.6077063,
        "id": "Rue du Cheval Baillard"
    },
    {
        "lat": 50.6625813,
        "long": 4.6054472,
        "id": "Chemin de L'Escalpade"
    },
    {
        "lat": 50.6592177,
        "long": 4.5990397,
        "id": "Rue de l'Elevage"
    },
    {
        "lat": 50.6607450,
        "long": 4.5885116,
        "id": "Chavée des Roitelets"
    },
    {
        "lat": 50.6645547,
        "long": 4.5906781,
        "id": "Sentier de la Sapinière"
    },
    {
        "lat": 50.6620610,
        "long": 4.5908057,
        "id": "Chemin des Pouillots"
    },
    {
        "lat": 50.6607630,
        "long": 4.5892400,
        "id": "Sentier de l'Arbre Cassé"
    },
    {
        "lat": 50.6628860,
        "long": 4.5929257,
        "id": "Chemin du Lac"
    },
    {
        "lat": 50.6704636,
        "long": 4.5885132,
        "id": "Avenue des Chevreuils"
    },
    {
        "lat": 50.6699120,
        "long": 4.6081864,
        "id": "Passage de la Souille"
    },
    {
        "lat": 50.6671681,
        "long": 4.6035398,
        "id": "Passage des Cyclistes Quotidiens"
    },
    {
        "lat": 50.6699640,
        "long": 4.6086510,
        "id": "Rue Pindare"
    },
    {
        "lat": 50.6631015,
        "long": 4.6043287,
        "id": "Ferme équestre de Louvain-la-neuve"
    },
    {
        "lat": 50.6623628,
        "long": 4.6054741,
        "id": "École Escalpade"
    },
    {
        "lat": 50.6692250,
        "long": 4.6015847,
        "id": "Rue du Cheval d'Arçons"
    },
    {
        "lat": 50.6692684,
        "long": 4.5998922,
        "id": "Rue du Jeu de Paume"
    },
    {
        "lat": 50.6691886,
        "long": 4.6070936,
        "id": "Rue de l'Esplanade"
    },
    {
        "lat": 50.6693373,
        "long": 4.6066405,
        "id": "Venelle de l'Arc"
    },
    {
        "lat": 50.6732371,
        "long": 4.6047623,
        "id": "Sentier du 550e"
    },
    {
        "lat": 50.6703534,
        "long": 4.5922914,
        "id": "Sentier de l'Europe"
    },
    {
        "lat": 50.6703510,
        "long": 4.5955755,
        "id": "Taille des Faudes"
    },
    {
        "lat": 50.6593756,
        "long": 4.6059879,
        "id": "Vieux Chemin de Namur"
    },
    {
        "lat": 50.6702325,
        "long": 4.6047834,
        "id": "Ruelle du C. Godin"
    },
    {
        "lat": 50.6712518,
        "long": 4.6094134,
        "id": "Rue des Blancs-Chevaux"
    },
    {
        "lat": 50.6704673,
        "long": 4.6047908,
        "id": "Ruelle du Cheval Godin"
    },
    {
        "lat": 50.6703594,
        "long": 4.6045645,
        "id": "Rue de la Saint-Grégoire"
    },
    {
        "lat": 50.6684444,
        "long": 4.6033804,
        "id": "Rampe du Couvent"
    },
    {
        "lat": 50.6689923,
        "long": 4.6027672,
        "id": "Cortil des Grillons"
    },
    {
        "lat": 50.6692184,
        "long": 4.6037984,
        "id": "Avenue Sainte Gertrude"
    },
    {
        "lat": 50.6688347,
        "long": 4.6059235,
        "id": "Cour de la Taillette"
    },
    {
        "lat": 50.6690485,
        "long": 4.6024183,
        "id": "Rue des Grillons"
    },
    {
        "lat": 50.6734616,
        "long": 4.6171146,
        "id": "Rue de la Ramée"
    },
    {
        "lat": 50.6737622,
        "long": 4.6176149,
        "id": "Rue du Neufmoustier"
    },
    {
        "lat": 50.6673252,
        "long": 4.6020746,
        "id": "Chemin du Rieu"
    },
    {
        "lat": 50.6676420,
        "long": 4.6030868,
        "id": "Cortil du Bailly"
    },
    {
        "lat": 50.6701269,
        "long": 4.6095093,
        "id": "Institut Cardijn"
    },
    {
        "lat": 50.6664281,
        "long": 4.5972301,
        "id": "Rue du Grand-Mitan"
    },
    {
        "lat": 50.6693501,
        "long": 4.6003716,
        "id": "Rue du Discobole"
    },
    {
        "lat": 50.6681219,
        "long": 4.5998881,
        "id": "Rue du Palier"
    },
    {
        "lat": 50.6667547,
        "long": 4.5958600,
        "id": "Bois de Viverou"
    },
    {
        "lat": 50.6675736,
        "long": 4.5998623,
        "id": "Rue Haute"
    },
    {
        "lat": 50.6738878,
        "long": 4.6117472,
        "id": "La Clé des Champs"
    },
    {
        "lat": 50.6736588,
        "long": 4.6136516,
        "id": "Cours Charles Gheude"
    },
    {
        "lat": 50.6740272,
        "long": 4.6155662,
        "id": "Cours d'Orval"
    },
    {
        "lat": 50.6721994,
        "long": 4.6156185,
        "id": "Rue du Taillis"
    },
    {
        "lat": 50.6739872,
        "long": 4.6138016,
        "id": "Rue d'Aulne"
    },
    {
        "lat": 50.6728906,
        "long": 4.6121916,
        "id": "Promenade de la Nuit de Mai"
    },
    {
        "lat": 50.6732573,
        "long": 4.6144134,
        "id": "Chemin Charlier à la Jambe de Bois"
    },
    {
        "lat": 50.6740567,
        "long": 4.6092478,
        "id": "Pendée aux Bécasses"
    },
    {
        "lat": 50.6711681,
        "long": 4.6129477,
        "id": "Musée Hergé"
    },
    {
        "lat": 50.6665929,
        "long": 4.6254469,
        "id": "Rue Louis de Geer"
    },
    {
        "lat": 50.6644594,
        "long": 4.6125036,
        "id": "Kot Certino"
    },
    {
        "lat": 50.6626251,
        "long": 4.6220430,
        "id": "Terrain de football"
    },
    {
        "lat": 50.6628433,
        "long": 4.6228327,
        "id": "Atelier de dessin"
    },
    {
        "lat": 50.6630171,
        "long": 4.6232106,
        "id": "Chemin du Hangar à Ballons"
    },
    {
        "lat": 50.6635477,
        "long": 4.6231711,
        "id": "Chemin des Etoiles"
    },
    {
        "lat": 50.6643065,
        "long": 4.6221096,
        "id": "Baudouin 1er"
    },
    {
        "lat": 50.6683102,
        "long": 4.6184468,
        "id": "Rue des Wallons"
    },
    {
        "lat": 50.6735669,
        "long": 4.6143067,
        "id": "Chemin Jean Lariguette"
    },
    {
        "lat": 50.6640014,
        "long": 4.6118732,
        "id": "École des Bruyères"
    },
    {
        "lat": 50.6674469,
        "long": 4.6193700,
        "id": "Rue du Compas"
    },
    {
        "lat": 50.6677905,
        "long": 4.6210257,
        "id": "Pont aux Ânes"
    },
    {
        "lat": 50.6655548,
        "long": 4.6116722,
        "id": "Voie du Car d'Or"
    },
    {
        "lat": 50.6652695,
        "long": 4.6171733,
        "id": "Loungeatude"
    },
    {
        "lat": 50.6656517,
        "long": 4.5902252,
        "id": "pont du Pape"
    },
    {
        "lat": 50.6646571,
        "long": 4.6258655,
        "id": "IBA"
    },
    {
        "lat": 50.6598710,
        "long": 4.6284421,
        "id": "Krones"
    },
    {
        "lat": 50.6700267,
        "long": 4.6166243,
        "id": "Voie 2-3"
    },
    {
        "lat": 50.6701297,
        "long": 4.6164395,
        "id": "Voie 1"
    },
    {
        "lat": 50.6597824,
        "long": 4.6227660,
        "id": "Rue Emile Francqui"
    },
    {
        "lat": 50.6629945,
        "long": 4.6324407,
        "id": "Rue du Laid Burniat"
    },
    {
        "lat": 50.6653966,
        "long": 4.5880954,
        "id": "Avenue des Justes"
    },
    {
        "lat": 50.6703497,
        "long": 4.6128157,
        "id": "Anneau Central"
    },
    {
        "lat": 50.6655871,
        "long": 4.6134190,
        "id": "Boulevard du Sud"
    },
    {
        "lat": 50.6711949,
        "long": 4.6055209,
        "id": "Route du Longchamp"
    },
    {
        "lat": 50.6592001,
        "long": 4.6141519,
        "id": "Rue de Namur"
    },
    {
        "lat": 50.6682395,
        "long": 4.6214522,
        "id": "Auditoires Sainte-Barbe (BARB)"
    },
    {
        "lat": 50.6679716,
        "long": 4.6206528,
        "id": "Pierre Curie"
    },
    {
        "lat": 50.6677878,
        "long": 4.6200876,
        "id": "Pythagore"
    },
    {
        "lat": 50.6677088,
        "long": 4.6206869,
        "id": "Marie Curie"
    },
    {
        "lat": 50.6657758,
        "long": 4.6213082,
        "id": "Halls"
    },
    {
        "lat": 50.6661733,
        "long": 4.6199510,
        "id": "Kellner"
    },
    {
        "lat": 50.6666598,
        "long": 4.6193183,
        "id": "Carnoy C"
    },
    {
        "lat": 50.6665511,
        "long": 4.6204185,
        "id": "Auditoires croix du Sud (SUD)"
    },
    {
        "lat": 50.6660113,
        "long": 4.6206876,
        "id": "Mendel et Fac Agro"
    },
    {
        "lat": 50.6672042,
        "long": 4.6196916,
        "id": "Carnoy A"
    },
    {
        "lat": 50.6668195,
        "long": 4.6199259,
        "id": "Carnoy B"
    },
    {
        "lat": 50.6693032,
        "long": 4.6181734,
        "id": "Lavoisier"
    },
    {
        "lat": 50.6682655,
        "long": 4.6218800,
        "id": "Place Sainte Barbe"
    },
    {
        "lat": 50.6685304,
        "long": 4.6229890,
        "id": "Place du Levant"
    },
    {
        "lat": 50.6692196,
        "long": 4.6198054,
        "id": "Mercator (MERC)"
    },
    {
        "lat": 50.6693196,
        "long": 4.6189615,
        "id": "Place Louis Pasteur"
    },
    {
        "lat": 50.6697190,
        "long": 4.6192908,
        "id": "Bibliothèque des Sciences et Technologies"
    },
    {
        "lat": 50.6601524,
        "long": 4.6240067,
        "id": "Rue Ilya Prigogine"
    },
    {
        "lat": 50.6714845,
        "long": 4.6063041,
        "id": "Clos du Doudou"
    },
    {
        "lat": 50.6716251,
        "long": 4.6082005,
        "id": "Rue des Annettes"
    },
    {
        "lat": 50.6728628,
        "long": 4.6079971,
        "id": "Avenue des Clos"
    },
    {
        "lat": 50.6715071,
        "long": 4.6063055,
        "id": "Rue des Gilles"
    },
    {
        "lat": 50.6715134,
        "long": 4.6077828,
        "id": "Rue du Cheval Bayard"
    },
    {
        "lat": 50.6695870,
        "long": 4.6074258,
        "id": "Avenue Jean-Libert Hennebel"
    },
    {
        "lat": 50.6699274,
        "long": 4.6051471,
        "id": "Piscine du Blocry"
    },
    {
        "lat": 50.6722183,
        "long": 4.6077872,
        "id": "Place de la Butte"
    },
    {
        "lat": 50.6669141,
        "long": 4.6203017,
        "id": "Croix du Sud"
    },
    {
        "lat": 50.6701302,
        "long": 4.6017294,
        "id": "Place des Sports"
    },
    {
        "lat": 50.6689568,
        "long": 4.6015383,
        "id": "Route de Blocry"
    },
    {
        "lat": 50.6680663,
        "long": 4.6203421,
        "id": "Rue Archimède"
    },
    {
        "lat": 50.6668531,
        "long": 4.6189830,
        "id": "Rue Teihard de Chardin"
    },
    {
        "lat": 50.6720017,
        "long": 4.6099836,
        "id": "Rue du Paradis"
    },
    {
        "lat": 50.6717612,
        "long": 4.6084124,
        "id": "Rue du Pachis"
    },
    {
        "lat": 50.6717858,
        "long": 4.6103758,
        "id": "Sentier Cardijn"
    },
    {
        "lat": 50.6694948,
        "long": 4.6008375,
        "id": "Voie de la Petite Reine"
    },
    {
        "lat": 50.6725776,
        "long": 4.6074283,
        "id": "Rue des Molons"
    },
    {
        "lat": 50.6662844,
        "long": 4.6195697,
        "id": "Rue de la Croix du Sud"
    },
    {
        "lat": 50.6722136,
        "long": 4.6085253,
        "id": "Clos des Trimousettes"
    },
    {
        "lat": 50.6719904,
        "long": 4.6053370,
        "id": "Rue des Échassiers"
    },
    {
        "lat": 50.6599731,
        "long": 4.6100232,
        "id": "Rue Michel de Ghelderode"
    },
    {
        "lat": 50.6739008,
        "long": 4.6144562,
        "id": "Avenue des Mespeliers"
    },
    {
        "lat": 50.6611937,
        "long": 4.6107359,
        "id": "Chapelle de l'Espérance"
    },
    {
        "lat": 50.6699529,
        "long": 4.6129109,
        "id": "Carrefour d'En Haut"
    },
    {
        "lat": 50.6640911,
        "long": 4.6100844,
        "id": "Place de l'Equerre"
    },
    {
        "lat": 50.6646177,
        "long": 4.6204176,
        "id": "Porte du Jardin Botanique"
    },
    {
        "lat": 50.6625771,
        "long": 4.6178461,
        "id": "Résidence de la Sauge"
    },
    {
        "lat": 50.6634374,
        "long": 4.6186119,
        "id": "Cours de la Sarriette"
    },
    {
        "lat": 50.6646893,
        "long": 4.6190348,
        "id": "Rue de la Marjolaine"
    },
    {
        "lat": 50.6679785,
        "long": 4.6190890,
        "id": "Pyramide"
    },
    {
        "lat": 50.6684843,
        "long": 4.6185157,
        "id": "IAD"
    },
    {
        "lat": 50.6681657,
        "long": 4.6183985,
        "id": "Maison des Sciences"
    },
    {
        "lat": 50.6684321,
        "long": 4.6182521,
        "id": "AGL"
    },
    {
        "lat": 50.6683352,
        "long": 4.6207755,
        "id": "Secrétariat EPL"
    },
    {
        "lat": 50.6716110,
        "long": 4.6127842,
        "id": "Allée de la Source"
    },
    {
        "lat": 50.6677360,
        "long": 4.6119441,
        "id": "Jacques Leclercq (LECL)"
    },
    {
        "lat": 50.6688130,
        "long": 4.6172982,
        "id": "Tour du Biéreau"
    },
    {
        "lat": 50.6645406,
        "long": 4.5893812,
        "id": "Avenue des Vis Tchapias"
    },
    {
        "lat": 50.6687720,
        "long": 4.6226778,
        "id": "Stévin"
    },
    {
        "lat": 50.6692064,
        "long": 4.6236762,
        "id": "Euler"
    },
    {
        "lat": 50.6687796,
        "long": 4.6238195,
        "id": "Maxwell"
    },
    {
        "lat": 50.6666399,
        "long": 4.5949144,
        "id": "École du Blocry"
    },
    {
        "lat": 50.6659726,
        "long": 4.5942071,
        "id": "Cure"
    },
    {
        "lat": 50.6674147,
        "long": 4.6100555,
        "id": "Ermitage"
    },
    {
        "lat": 50.6712774,
        "long": 4.6095774,
        "id": "Rue des Blancs Chevaux"
    },
    {
        "lat": 50.6704351,
        "long": 4.6154811,
        "id": "Place de l'Accueil"
    },
    {
        "lat": 50.6683391,
        "long": 4.5935649,
        "id": "Clos des Huit Colonnes"
    },
    {
        "lat": 50.6659954,
        "long": 4.6113784,
        "id": "Blackfriars"
    },
    {
        "lat": 50.6660457,
        "long": 4.6114639,
        "id": "Couvent Fra Angelico"
    },
    {
        "lat": 50.6647596,
        "long": 4.6121574,
        "id": "Kotangente & Kot Louvain-Linux"
    },
    {
        "lat": 50.6690216,
        "long": 4.6136712,
        "id": "DUC"
    },
    {
        "lat": 50.6687306,
        "long": 4.6141103,
        "id": "Le Sablon"
    },
    {
        "lat": 50.6685753,
        "long": 4.6128997,
        "id": "Doyens"
    },
    {
        "lat": 50.6681157,
        "long": 4.6116442,
        "id": "Place Montesquieu"
    },
    {
        "lat": 50.6709200,
        "long": 4.6141428,
        "id": "Chemin du Chat Perché"
    },
    {
        "lat": 50.6714795,
        "long": 4.6130283,
        "id": "Rue du Labrador"
    },
    {
        "lat": 50.6698676,
        "long": 4.6161280,
        "id": "Train Station"
    },
    {
        "lat": 50.6697569,
        "long": 4.6159566,
        "id": "Gallerie des Halles"
    },
    {
        "lat": 50.6697098,
        "long": 4.6019514,
        "id": "Cour des Fleurets"
    },
    {
        "lat": 50.6664832,
        "long": 4.6108104,
        "id": "Kap Vert"
    },
    {
        "lat": 50.6649597,
        "long": 4.6075915,
        "id": "Jardin des Rondes Bosses"
    },
    {
        "lat": 50.6636245,
        "long": 4.6265512,
        "id": "GT&T"
    },
    {
        "lat": 50.6616867,
        "long": 4.6134302,
        "id": "Avenue des Musiciens"
    },
    {
        "lat": 50.6605489,
        "long": 4.6098687,
        "id": "Rue Jean d'Outremeuse"
    },
    {
        "lat": 50.6616262,
        "long": 4.6111593,
        "id": "Rue Joseph Hanse"
    },
    {
        "lat": 50.6611523,
        "long": 4.6110502,
        "id": "Rue Jean Haust"
    },
    {
        "lat": 50.6608299,
        "long": 4.6109173,
        "id": "Rue Sigebert de Gembloux"
    },
    {
        "lat": 50.6616283,
        "long": 4.6127058,
        "id": "Rue Charles De Coster"
    },
    {
        "lat": 50.6604336,
        "long": 4.5934716,
        "id": "Descente au Crahaut"
    },
    {
        "lat": 50.6674159,
        "long": 4.6174971,
        "id": "Place de l'Escholier"
    },
    {
        "lat": 50.6672806,
        "long": 4.6192856,
        "id": "Parking P22"
    },
    {
        "lat": 50.6664025,
        "long": 4.6218818,
        "id": "P12"
    },
    {
        "lat": 50.6671890,
        "long": 4.6184639,
        "id": "Parking du Pont-Neuf"
    },
    {
        "lat": 50.6664768,
        "long": 4.6209354,
        "id": "de Serres"
    },
    {
        "lat": 50.6656126,
        "long": 4.6201318,
        "id": "Rue Adolphe Quetelet"
    },
    {
        "lat": 50.6691820,
        "long": 4.6152410,
        "id": "ILV, CORE, ISBA, INESU"
    },
    {
        "lat": 50.6644376,
        "long": 4.6161517,
        "id": "Rue du Plantoir"
    },
    {
        "lat": 50.6654884,
        "long": 4.6146810,
        "id": "Chemin des Écoliers"
    },
    {
        "lat": 50.6664231,
        "long": 4.6144189,
        "id": "Rue de la Neuville"
    },
    {
        "lat": 50.6701511,
        "long": 4.6117038,
        "id": "Rue Paulin Ladeuze"
    },
    {
        "lat": 50.6643668,
        "long": 4.6166508,
        "id": "Rue de la Herse"
    },
    {
        "lat": 50.6613402,
        "long": 4.6164323,
        "id": "Place de l'Angélique"
    },
    {
        "lat": 50.6679855,
        "long": 4.6038924,
        "id": "Avenue du Grand Cortil"
    },
    {
        "lat": 50.6739721,
        "long": 4.6129935,
        "id": "Place Jean Lariguette"
    },
    {
        "lat": 50.6693690,
        "long": 4.6218999,
        "id": "Rue Zénobe Gramme"
    },
    {
        "lat": 50.6662577,
        "long": 4.6245986,
        "id": "P1"
    },
    {
        "lat": 50.6673829,
        "long": 4.6211676,
        "id": "Parking Sainte Barbe"
    },
    {
        "lat": 50.6660776,
        "long": 4.6079775,
        "id": "Place des Peintres"
    },
    {
        "lat": 50.6648181,
        "long": 4.6112566,
        "id": "Place du Puddleur"
    },
    {
        "lat": 50.6700297,
        "long": 4.6014462,
        "id": "Service des sports"
    },
    {
        "lat": 50.6682680,
        "long": 4.6003835,
        "id": "Rue J.M. de Vismes"
    },
    {
        "lat": 50.6634266,
        "long": 4.6086389,
        "id": "Rue du Bois-du-Luc"
    },
    {
        "lat": 50.6632593,
        "long": 4.6087680,
        "id": "rue du Bois-du-Luc"
    },
    {
        "lat": 50.6720033,
        "long": 4.6058818,
        "id": "Clos de la Haguette"
    },
    {
        "lat": 50.6691227,
        "long": 4.6045640,
        "id": "Raccourci du Lac"
    },
    {
        "lat": 50.6685085,
        "long": 4.6194975,
        "id": "Auditoire des sciences"
    },
    {
        "lat": 50.6684963,
        "long": 4.6200081,
        "id": "Décanat sciences"
    },
    {
        "lat": 50.6696994,
        "long": 4.6147977,
        "id": "BUCE - CPME"
    },
    {
        "lat": 50.6689545,
        "long": 4.6120712,
        "id": "Auditoires Agora"
    },
    {
        "lat": 50.6689029,
        "long": 4.6127775,
        "id": "Studios Agora"
    },
    {
        "lat": 50.6702387,
        "long": 4.6071566,
        "id": "IEPR"
    },
    {
        "lat": 50.6707022,
        "long": 4.6068163,
        "id": "Auditoires Pierre de Coubertin"
    },
    {
        "lat": 50.6705118,
        "long": 4.6068566,
        "id": "Place Pierre de Coubertin"
    },
    {
        "lat": 50.6701884,
        "long": 4.6043656,
        "id": "Ferme du Blocry"
    },
    {
        "lat": 50.6701199,
        "long": 4.6110025,
        "id": "Socrate"
    },
    {
        "lat": 50.6704656,
        "long": 4.6098057,
        "id": "CAV"
    },
    {
        "lat": 50.6701388,
        "long": 4.6211571,
        "id": "Rue du Poirier"
    },
    {
        "lat": 50.6695770,
        "long": 4.6106007,
        "id": "Descamps"
    },
    {
        "lat": 50.6699526,
        "long": 4.6100249,
        "id": "Erasme"
    },
    {
        "lat": 50.6697066,
        "long": 4.6107413,
        "id": "Rue Cardinal Mercier"
    },
    {
        "lat": 50.6652831,
        "long": 4.6208735,
        "id": "P20"
    },
    {
        "lat": 50.6647847,
        "long": 4.5876926,
        "id": "Clos du tumulus"
    },
    {
        "lat": 50.6663913,
        "long": 4.6188246,
        "id": "Serres Carnoy"
    },
    {
        "lat": 50.6667331,
        "long": 4.6243215,
        "id": "CEI"
    },
    {
        "lat": 50.6657255,
        "long": 4.6195324,
        "id": "Serres"
    },
    {
        "lat": 50.6684743,
        "long": 4.6164737,
        "id": "Place des wallons"
    },
    {
        "lat": 50.6683249,
        "long": 4.6086523,
        "id": "Passerelle de l'Aula Magna"
    },
    {
        "lat": 50.6689556,
        "long": 4.6106723,
        "id": "Place Raymond Lemaire"
    },
    {
        "lat": 50.6685124,
        "long": 4.6096377,
        "id": "Esplanades des Congrès"
    },
    {
        "lat": 50.6655197,
        "long": 4.6106555,
        "id": "Auberge des Bruyères"
    },
    {
        "lat": 50.6655652,
        "long": 4.6236236,
        "id": "Cyclofette"
    },
    {
        "lat": 50.6657409,
        "long": 4.6235436,
        "id": "Bibliothèque de mathématique et physique"
    },
    {
        "lat": 50.6663454,
        "long": 4.6230098,
        "id": "Boulevard Baudouin"
    },
    {
        "lat": 50.6682864,
        "long": 4.6283879,
        "id": "N4"
    },
    {
        "lat": 50.6622932,
        "long": 4.6140438,
        "id": "Rue des Fanfares"
    },
    {
        "lat": 50.6699078,
        "long": 4.6137749,
        "id": "Acces P Charlemagne"
    },
    {
        "lat": 50.6704079,
        "long": 4.6146626,
        "id": "Cortil du Coq Hardi"
    },
    {
        "lat": 50.6699817,
        "long": 4.6136737,
        "id": "Rue de Bologne"
    },
    {
        "lat": 50.6707148,
        "long": 4.6124510,
        "id": "Rue de l'Union Européenne"
    },
    {
        "lat": 50.6714184,
        "long": 4.6154432,
        "id": "Rue de la Gare"
    },
    {
        "lat": 50.6700406,
        "long": 4.6149434,
        "id": "Rue du Marché Commun"
    },
    {
        "lat": 50.6696856,
        "long": 4.6158659,
        "id": "Halles Universitaires"
    },
    {
        "lat": 50.6604933,
        "long": 4.6163285,
        "id": "Piste des Sonneurs"
    },
    {
        "lat": 50.6693239,
        "long": 4.6018609,
        "id": "Foyer Saint-Paul"
    },
    {
        "lat": 50.6695573,
        "long": 4.6018374,
        "id": "Chapelle"
    },
    {
        "lat": 50.6691370,
        "long": 4.6125111,
        "id": "Place Agora"
    },
    {
        "lat": 50.6605912,
        "long": 4.5920100,
        "id": "Pont des Chevreuils"
    },
    {
        "lat": 50.6723306,
        "long": 4.6067800,
        "id": "Clos Tchantchès"
    },
    {
        "lat": 50.6725727,
        "long": 4.6073515,
        "id": "Clos des Molons"
    },
    {
        "lat": 50.6720982,
        "long": 4.6063267,
        "id": "Clos des Blancs Moussis"
    },
    {
        "lat": 50.6724755,
        "long": 4.6093879,
        "id": "Clos de l'Argayon"
    },
    {
        "lat": 50.6707385,
        "long": 4.6105274,
        "id": "Chemin des sages"
    },
    {
        "lat": 50.6713635,
        "long": 4.6100401,
        "id": "Organe ASBL"
    },
    {
        "lat": 50.6692467,
        "long": 4.6011305,
        "id": "Les Granzenfants"
    },
    {
        "lat": 50.6692621,
        "long": 4.6012330,
        "id": "Latino Amerikap"
    },
    {
        "lat": 50.6692152,
        "long": 4.6015010,
        "id": "Passage des coulonneux"
    },
    {
        "lat": 50.6691224,
        "long": 4.6009080,
        "id": "Passage des Coulonneux"
    },
    {
        "lat": 50.6689921,
        "long": 4.6231873,
        "id": "Place du levant"
    },
    {
        "lat": 50.6682749,
        "long": 4.6154073,
        "id": "Passage de la Neuville"
    },
    {
        "lat": 50.6610794,
        "long": 4.6020861,
        "id": "Clairs Vallons"
    },
    {
        "lat": 50.6655196,
        "long": 4.6232106,
        "id": "IRMP/CP3"
    },
    {
        "lat": 50.6715039,
        "long": 4.6233786,
        "id": "Potagers"
    },
    {
        "lat": 50.6673550,
        "long": 4.6262722,
        "id": "Terrain de manoeuvre"
    },
    {
        "lat": 50.6678608,
        "long": 4.6263086,
        "id": "Proxy Delhaize"
    },
    {
        "lat": 50.6678050,
        "long": 4.6260275,
        "id": "Q8"
    },
    {
        "lat": 50.6667549,
        "long": 4.6285175,
        "id": "Tennis Club du Parc"
    },
    {
        "lat": 50.6680701,
        "long": 4.6303936,
        "id": "Oh! Green"
    },
    {
        "lat": 50.6702285,
        "long": 4.6207100,
        "id": "CESI"
    },
    {
        "lat": 50.6640569,
        "long": 4.6190224,
        "id": "Passage  de la Sarriette"
    },
    {
        "lat": 50.6695794,
        "long": 4.6200369,
        "id": "Chemin Louis Pasteur"
    },
    {
        "lat": 50.6730615,
        "long": 4.6189457,
        "id": "Total"
    },
    {
        "lat": 50.6648088,
        "long": 4.5899159,
        "id": "Clos des Tombelles"
    },
    {
        "lat": 50.6714215,
        "long": 4.6156794,
        "id": "Rue des Buissons"
    },
    {
        "lat": 50.6698190,
        "long": 4.6150367,
        "id": "Traverse Bleue"
    },
    {
        "lat": 50.6719007,
        "long": 4.6066887,
        "id": "Place de la Houssière"
    },
    {
        "lat": 50.6691021,
        "long": 4.5948865,
        "id": "Avenue de Lauzelle"
    },
    {
        "lat": 50.6605717,
        "long": 4.6180479,
        "id": "Cercle du Lac"
    },
    {
        "lat": 50.6695065,
        "long": 4.6127385,
        "id": "Traverse Verte"
    },
    {
        "lat": 50.6690884,
        "long": 4.6129024,
        "id": "Traverse Rouge"
    },
    {
        "lat": 50.6741598,
        "long": 4.6125336,
        "id": "Porte de Lauzelle-Vallons"
    },
    {
        "lat": 50.6718592,
        "long": 4.6137664,
        "id": "Chemin de Cerf Volant"
    },
    {
        "lat": 50.6705293,
        "long": 4.6122036,
        "id": "Rue du Traité de Rome"
    },
    {
        "lat": 50.6677415,
        "long": 4.6159706,
        "id": "Voie des Hesbignons"
    },
    {
        "lat": 50.6682948,
        "long": 4.6158096,
        "id": "Terrasse des Ardennais"
    },
    {
        "lat": 50.6598498,
        "long": 4.6093457,
        "id": "Ottignies - Louvain-la-Neuve"
    },
    {
        "lat": 50.6608885,
        "long": 4.6133923,
        "id": "Sentier des Menétriers"
    },
    {
        "lat": 50.6630565,
        "long": 4.6085872,
        "id": "Rampe"
    },
    {
        "lat": 50.6630532,
        "long": 4.6070343,
        "id": "Drève des Architectes"
    },
    {
        "lat": 50.6648986,
        "long": 4.6163446,
        "id": "Chemin de la Houe"
    },
    {
        "lat": 50.6664626,
        "long": 4.6149553,
        "id": "Tienne du Calimaçon"
    },
    {
        "lat": 50.6662427,
        "long": 4.6150749,
        "id": "Impasse du Rateau"
    },
    {
        "lat": 50.6665830,
        "long": 4.6154245,
        "id": "Sentier du Biéreau"
    },
    {
        "lat": 50.6729544,
        "long": 4.6149473,
        "id": "Cours du Bia Bouquet"
    },
    {
        "lat": 50.6687002,
        "long": 4.6053167,
        "id": "Cortil Géraldine"
    },
    {
        "lat": 50.6691632,
        "long": 4.6006738,
        "id": "Centre Kinos"
    },
    {
        "lat": 50.6618082,
        "long": 4.6292818,
        "id": "Corbais - Mont-Saint-Guibert"
    },
    {
        "lat": 50.6696938,
        "long": 4.6092943,
        "id": "Parvis Saint-François"
    },
    {
        "lat": 50.6698554,
        "long": 4.6091286,
        "id": "Clocher"
    },
    {
        "lat": 50.6605935,
        "long": 4.6081653,
        "id": "Rue Charles Plisnier"
    },
    {
        "lat": 50.6622812,
        "long": 4.6178073,
        "id": "Rue de la Sariette"
    },
    {
        "lat": 50.6627443,
        "long": 4.6172585,
        "id": "Cour de la Ciboulette"
    },
    {
        "lat": 50.6700648,
        "long": 4.6173436,
        "id": "Antenne administrative de la ville d'Ottignies-LLN"
    },
    {
        "lat": 50.6699447,
        "long": 4.6126622,
        "id": "Boucle de Roncevaux"
    },
    {
        "lat": 50.6650704,
        "long": 4.5987905,
        "id": "Local de la 26ème Unité Scoute de Blocry"
    }
];