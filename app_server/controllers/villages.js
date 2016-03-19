/* GET 'homelist' page */
module.exports.homelist = function(req, res){
res.render('index', { 
    title: 'Lista de Aldeas',
    dataVillages: [{
        Aldea: "Batrako",
        Oro: 8000000,
        PctOro: 93,
        Elixir: 7000000,
        PctElixir:85, 
        Oscuro: 90000,
        PctOscuro: 60, 
        Constructores: 0,
        Copas: 860,
        Gemas: 980, 
        Status: 1
    },{
        Aldea: "JaggerM3ister",
        Oro: 8000000,
        PctOro: 93,
        Elixir: 7000000,
        PctElixir:85, 
        Oscuro: 90000,
        PctOscuro: 60, 
        Constructores: 0,
        Copas: 860,
        Gemas: 980, 
        Status: 0
    },{
        Aldea: "Sus",
        Oro: 8000000,
        PctOro: 93,
        Elixir: 7000000,
        PctElixir:85, 
        Oscuro: 90000,
        PctOscuro: 60, 
        Constructores: 0,
        Copas: 860,
        Gemas: 980, 
        Status: 1
    },{
        Aldea: "Erik",
        Oro: 8000000,
        PctOro: 93,
        Elixir: 7000000,
        PctElixir:85, 
        Oscuro: 90000,
        PctOscuro: 60, 
        Constructores: 0,
        Copas: 860,
        Gemas: 980, 
        Status: 2
    }]
});
};

/* GET 'homelist' page */
module.exports.villageInfo = function(req, res){
res.render('index', { title: 'Administración de Aldea' });
};
