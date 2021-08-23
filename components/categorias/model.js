const mongoose = require('mongoose');
const { IgsDaviplataCOConn,SerFinanzaConn, BancolombiaConn, 
    EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn, BpogsAMCCOCon,
    IgsBancoDeOccidenteCOConn,IgsSufiCOConn,
    BpogsHitesFinancieroCOConn,
    IgsColpatriaCOConn  } = require('../../db');

const Schema = mongoose.Schema;

const categoriasSchema = new Schema({
    name : {
        type: String,
        required:true,
        
    },
    qualifying : {
        type : Boolean,
        default: 0
    },
    
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
}, 
{
    versionKey: false,
});

//const model = mongoose.model('BaseAgents', agentsSchema);
const categoriasSerFinanzaModel = SerFinanzaConn.model('Basecategories', categoriasSchema);
const categoriasBancoColombiaModel = BancolombiaConn.model('Basecategories', categoriasSchema);
const categoriasEnelChileModel = EnelChileConn.model('Basecategories', categoriasSchema);
const categoriasIgsBanorteMXModel = IgsBanorteMXConn.model('Basecategories', categoriasSchema);
const categoriasIgsBanistmoPAModel = IgsBanistmoPAConn.model('Basecategories', categoriasSchema);
const categoriasBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Basecategories', categoriasSchema);
const categoriasBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Basecategories', categoriasSchema);
const categoriasBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Basecategories', categoriasSchema);
const categoriasDaviplataCOModel = IgsDaviplataCOConn.model('Basecategories', categoriasSchema);
const categoriasBpogsAMCCOModel = BpogsAMCCOCon.model('Basecategories', categoriasSchema );
const categoriasIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Basecategories', categoriasSchema );
const categoriasIgsSufiCOModel = IgsSufiCOConn.model('Basecategories', categoriasSchema );
const categoriasBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('Basecategories', categoriasSchema );
const categoriasIgsColpatriaCOModel = IgsColpatriaCOConn.model('Basecategories', categoriasSchema );
module.exports = {
    categoriasSerFinanzaModel,categoriasBancoColombiaModel,categoriasEnelChileModel,
    categoriasIgsBanorteMXModel,categoriasIgsBanistmoPAModel,
    categoriasBpogsBoldEnglishUSModel,
    categoriasBpogsHitesDespachoRetrioCOModel,categoriasBpogsBoldFrenchFRModel,
    categoriasDaviplataCOModel,categoriasBpogsAMCCOModel,categoriasIgsBancoDeOccidenteCOModel,
    categoriasIgsSufiCOModel,
    categoriasBpogsHitesFinancieroCOModel,
    categoriasIgsColpatriaCOModel
};
