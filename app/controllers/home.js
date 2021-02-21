const { application } = require("express");

module.exports.index = async (application, req, res) => {

    var nav = application.app.utils.utils.navMenu();
    var getPersonagens = await application.app.api.api.start('people');
    var getFilmes = await application.app.api.api.start('films');
    var getPlanetas = await application.app.api.api.start('planets');
    var getNaves = await application.app.api.api.start('starships');


    res.render("home/index", { navMenu: nav,  dadosPersonagens : getPersonagens, dadosFilmes : getFilmes, dadosPlanetas : getPlanetas, dadosNaves : getNaves});
}