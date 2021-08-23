exports.success = function(req,res, baseKeywords, status){
    res.status(status || 200).send({
        error: '',
        body:baseKeywords
    });
}

exports.error = function(req,res, baseKeywords , status, details){
    console.error('[ Response Error Components/DATA]' + details);
    res.status(status || 500).send({
        error : baseKeywords,
        body: ''
    })
}