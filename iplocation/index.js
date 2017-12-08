var https = require('https');
//const cheerio = require('cheerio');
 
module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
 
    if (req.body && req.body.name) {
 
        var srvname = req.body.name;
        srvname = srvname.toLowerCase();
        srvname = srvname.replace("https://", "");
        srvname = srvname.replace("http://", "");
        srvname = srvname.split("/")[0];
 
        https.get("https://www.iplocation.net/who-is-hosting-website?domain=" + srvname, function(res) {
            var body = '';
            var ret = {
                server: srvname,
                webhost: "",
                iploc: "",
                error: true
            };
            res.on('data', function(chunk) {
                body += chunk;
            });
            res.on('end', function() {
                var myRegexp = />Web Host<\/th><td width="70%">(.*)<\/td><\/tr>/g
                var myRet = myRegexp.exec(body);
                if(myRet.length>0){
                    ret.webhost = myRet[1];
                    ret.error = false;
                }
                context.log("webhost: " + ret.webhost);
 
                myRegexp = /<tr><th>IP Location<\/th><td>(.*)<\/td><\/tr>/g
                myRet = myRegexp.exec(body);
                if(myRet.length>0){
                    ret.iploc = myRet[1];
                    ret.error = false;
                }
                context.log("iploc: " + ret.iploc);
 
                // return response
                context.res = {
                    // status: 200, /* Defaults to 200 */
                    body: ret
                };
                context.done();
            });
        }).on('error', function(e) {
            ret = "Error during processing your request.";
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: ret
            };
            context.done();
        });
 
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
        context.done();
    }
};
