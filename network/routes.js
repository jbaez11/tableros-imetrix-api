const express = require('express');
const basekeywords = require('../components/baseKeywords/network');
const agents = require('../components/agents/network');
//const basephrases = require('../components/basePhrases/network');
const agentsaudit = require('../components/agentsAudit/network');
//const agentsauditphrases = require('../components/agentsAuditPhrases/network');
const consumption = require('../components/consumption/network');
const keywords = require('../components/keywords/network');
//const phrases = require('../components/phrases/network');
const scores = require('../components/scorebykeywords/network');
const scoringkeywords = require('../components/scoringKeywords/network');
const auditconversations = require('../components/auditconversations/network');
const conversations = require('../components/conversations/network');
const stadisticsofkeywords = require('../components/stadisticsofkeywords/network');
const basescore = require('../components/basescore/network');
const basescores = require('../components/basescores/network');
const auditkeywordstatistics = require('../components/auditkeywordstatistics/network');

const basecategories = require('../components/categorias/network');
const modules = require('../components/modulos/network');
const clusters = require('../components/clusters/network');
const statisticsofclusters = require('../components/statisticsofclusters/network');



const routes = function(server){
    server.use(`/:bd/basekeywords`, basekeywords);
    server.use('/:bd/baseagents', agents);
    //server.use('/:bd/basephrases', basephrases);
    server.use('/:bd/auditkeywords', agentsaudit);
    //server.use('/:bd/auditphrases', agentsauditphrases);
    server.use('/:bd/consumptions', consumption);
    server.use('/:bd/keywords', keywords);
    //server.use('/:bd/phrases', phrases);
    server.use('/:bd/auditscoringkeywords', scores);
    server.use('/:bd/scoringkeywords', scoringkeywords);
    server.use('/:bd/auditconversations', auditconversations);
    server.use('/:bd/conversations', conversations);
    server.use('/:bd/stadisticsofkeywords', stadisticsofkeywords);
    server.use('/:bd/basescore',basescore);
    server.use('/:bd/basescoresp',basescores);
    server.use('/:bd/auditkeywordstatistics',auditkeywordstatistics);
    server.use('/:bd/basecategories',basecategories);
    server.use('/:bd/modules',modules);
    server.use('/:bd/clusters',clusters);
    server.use('/:bd/statisticsofclusters',statisticsofclusters);
    
    
}

module.exports = routes;

