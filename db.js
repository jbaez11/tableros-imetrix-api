require('dotenv').config();
const mongoose = require('mongoose');


function makeNewConnection(dbname) {
    const db = mongoose.createConnection(`${process.env.MONGO_STRING}`, 
    {
        dbName:dbname,
        useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect:true,
        tls: true,
        tlsCAFile: `${__dirname}/${process.env.CERTIFICATE}`
        
    });

    db.on('error', function (error) {
        console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
        db.close().catch(() => console.log(`MongoDB :: failed to close connection ${this.name}`));
    });

    db.on('connected', function () {
        mongoose.set('debug', function (col, method, query, doc) {
            console.log(`MongoDB :: ${this.conn.name} ${col}.${method}(${JSON.stringify(query)},${JSON.stringify(doc)})`);
        });
        console.log(`MongoDB :: connected ${this.name}`);
    });

    db.on('disconnected', function () {
        console.log(`MongoDB :: disconnected ${this.name}`);
    });

    return db;
}

const SerFinanzaConn = makeNewConnection('igsSerfinanzaCO');
const BancolombiaConn = makeNewConnection('igsBancolombiaCO');
const EnelChileConn = makeNewConnection('igsEnelCL');
const IgsBanorteMXConn = makeNewConnection('igsBanorteMX');
const IgsBanistmoPAConn = makeNewConnection('igsBanistmoPA');
const BpogsBoldEnglishUSConn = makeNewConnection('bpogsBoldEnglishUS');
const BpogsHitesDespachoRetrioCOConn = makeNewConnection('bpogsHitesDespachoRetiroCO');
const alkTestCOconn = makeNewConnection('alkTestCO');
const BpogsBoldFrenchFRConn = makeNewConnection('bpogsBoldFrenchFR');
const IgsDaviplataCOConn = makeNewConnection('igsDaviplataCO');
const BpogsAMCCOCon = makeNewConnection('bpogsAMCCO');
const IgsBancoDeOccidenteCOConn = makeNewConnection('igsBancoDeOccidenteCO');
const IgsSufiCOConn = makeNewConnection('igsSufiCO');
const BpogsHitesFinancieroCOConn = makeNewConnection('bpogsHitesFinancieroCO');
const IgsColpatriaCOConn = makeNewConnection('igsColpatriaCO');
const IgsEntelCLConn = makeNewConnection('igsEntelCL');
const IgsPromericaCOConn = makeNewConnection('igsPromericaCO')



module.exports = {
    SerFinanzaConn,BancolombiaConn,EnelChileConn,
    IgsBanorteMXConn,IgsBanistmoPAConn,BpogsBoldEnglishUSConn,
    BpogsHitesDespachoRetrioCOConn,alkTestCOconn,
    BpogsBoldFrenchFRConn,IgsDaviplataCOConn,BpogsAMCCOCon,IgsBancoDeOccidenteCOConn,
    IgsSufiCOConn,BpogsHitesFinancieroCOConn,IgsColpatriaCOConn, IgsEntelCLConn,
    IgsPromericaCOConn
};

