const readline = require('readline-sync');
const axios = require('axios');

module.exports.teste = (search) => {
    return axios.get(`https://swapi.dev/api/${search}/`,{
        params: {
            _limit: 10
        }
    });
    
}

module.exports.start = async (search) => {

    var dados = await this.teste(search);
    return dados.data.results
};

