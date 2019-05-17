module.exports = async function (context, myQueueItem) {
    context.log('JJ process new order -> save to delivery queue :', myQueueItem);
    context.done(null, myQueueItem);    
};