module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const colors = require('src-module');
    const chosenColor = colors.getRandomColor();    
    const responseMessage = `Your lucky color is ${chosenColor.name}`;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}