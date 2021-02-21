const { json } = require("body-parser")



module.exports.navMenu = () => {

    let nav = [
                'films', 
                'people', 
                'planets', 
                'starships', 
            ];
    return nav

}