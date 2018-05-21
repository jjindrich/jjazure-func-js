module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        var name = req.query.name || req.body.name;
        context.log(name);

        context.bindings.outputDocument = JSON.stringify({ 
            id: name,
            name: name
            });
    }
    
    context.done();
};