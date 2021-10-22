const mongoose = require('mongoose');
const { SerFinanzaConn, BancolombiaConn, EnelChileConn,IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,BpogsBoldFrenchFRConn,IgsDaviplataCOConn, BpogsAMCCOCon,
IgsBancoDeOccidenteCOConn,IgsSufiCOConn,BpogsHitesFinancieroCOConn,
IgsColpatriaCOConn, IgsEntelCLConn, IgsPromericaCOConn, IgsBancolombiaAMConn,IgsAlmacenesSIConn,
IgsJelpitCOConn, IgsComfamiliarCOConn, IgsBancoAgricolaSVConn, IgsDaviviendaCRConn } = require('../../db');
const Schema = mongoose.Schema;
 
const baseKeywordsSchema = new Schema({
    keyword :{
        type: String,
        unique:true,
        required:true,
        //lowercase: true
    },
    category: String,
        
    
    module: String,
        
    
    cluster: String,
        
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
}, 
{
    versionKey: false,
});

//const model = mongoose.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsSerFinanzaModel = SerFinanzaConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsBancoColombiaModel = BancolombiaConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsEnelChileModel = EnelChileConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsBanorteMXModel = IgsBanorteMXConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsBanistmoPAModel = IgsBanistmoPAConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsBpogsBoldEnglishUSModel = BpogsBoldEnglishUSConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsBpogsHitesDespachoRetrioCOModel = BpogsHitesDespachoRetrioCOConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsBpogsBoldFrenchFRModel = BpogsBoldFrenchFRConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsDaviplataCOModel = IgsDaviplataCOConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsBpogsAMCCOModel = BpogsAMCCOCon.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsBancoDeOccidenteCOModel = IgsBancoDeOccidenteCOConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsSufiCOModel = IgsSufiCOConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsBpogsHitesFinancieroCOModel = BpogsHitesFinancieroCOConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsColpatriaCOModel = IgsColpatriaCOConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsEntelCLModel = IgsEntelCLConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsPromericaCOModel = IgsPromericaCOConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsBancolombiaAMModel = IgsBancolombiaAMConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsAlmacenesSIModel = IgsAlmacenesSIConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsJelpitCOModel = IgsJelpitCOConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsComfamiliarCOModel = IgsComfamiliarCOConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsBancoAgricolaSVModel = IgsBancoAgricolaSVConn.model('Basekeywords', baseKeywordsSchema);
const baseKeywordsIgsDaviviendaCRModel = IgsDaviviendaCRConn.model('Basekeywords', baseKeywordsSchema);

module.exports = {
    baseKeywordsDaviplataCOModel,
    baseKeywordsBpogsBoldFrenchFRModel,
    baseKeywordsSerFinanzaModel,
    baseKeywordsBancoColombiaModel,
    baseKeywordsEnelChileModel,
    baseKeywordsIgsBanorteMXModel,
    baseKeywordsIgsBanistmoPAModel,
    baseKeywordsBpogsBoldEnglishUSModel,
    baseKeywordsBpogsHitesDespachoRetrioCOModel,
    baseKeywordsBpogsAMCCOModel,
    baseKeywordsIgsBancoDeOccidenteCOModel,
    baseKeywordsIgsSufiCOModel,
    baseKeywordsBpogsHitesFinancieroCOModel,
    baseKeywordsIgsColpatriaCOModel,
    baseKeywordsIgsEntelCLModel,
    baseKeywordsIgsPromericaCOModel,
    baseKeywordsIgsBancolombiaAMModel,
    baseKeywordsIgsAlmacenesSIModel,
    baseKeywordsIgsJelpitCOModel,
    baseKeywordsIgsComfamiliarCOModel,
    baseKeywordsIgsBancoAgricolaSVModel,
    baseKeywordsIgsDaviviendaCRModel

};
