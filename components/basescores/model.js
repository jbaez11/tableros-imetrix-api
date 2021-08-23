const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn, BpogsAMCCOCon,
    IgsBancoDeOccidenteCOConn} = require('../../db');

const Schema = mongoose.Schema;

const basescoreSchema = new Schema({
    category:{
        type:String,
        default:'infaltable'
    },
    modulo:{
        type:String,
        required:true,
        unique:true,
        default:'pruebva'
    },
    clusters:{
        type:Array
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },

    
}, 
{
    versionKey: false,
});


const basescoreSerFinanzaModel = SerFinanzaConn.model('Basescoresp', basescoreSchema);
const basescoreBancoColombiaModel = BancolombiaConn.model('Basescoresp', basescoreSchema);
const basescoreEnelChileModel = EnelChileConn.model('Basescoresp', basescoreSchema);
const basescoreIgsBanorteMXModel = IgsBanorteMXConn.model('Basescoresp', basescoreSchema);
const basescoreIgsBanistmoPAModel = IgsBanistmoPAConn.model('Basescoresp', basescoreSchema);
const basescoreBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Basescoresp', basescoreSchema);
const basescoreBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Basescoresp', basescoreSchema);
const basescoreBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Basescoresp', basescoreSchema);
const basescoreDaviplataCOModel = IgsDaviplataCOConn.model('Basescoresp', basescoreSchema);
const basescoreBpogsAMCCOModel = BpogsAMCCOCon.model('Basescoresp', basescoreSchema);
const basescoreIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Basescoresp', basescoreSchema);


module.exports = {
    basescoreDaviplataCOModel,
    basescoreBpogsBoldFrenchFRModel,
    basescoreSerFinanzaModel,
    basescoreBancoColombiaModel,
    basescoreEnelChileModel,
    basescoreIgsBanorteMXModel,
    basescoreIgsBanistmoPAModel,
    basescoreBpogsBoldEnglishUSModel,
    basescoreBpogsHitesDespachoRetrioCOModel,
    basescoreBpogsAMCCOModel,
    basescoreIgsBancoDeOccidenteCOModel,
    
};