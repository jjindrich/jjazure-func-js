module.exports = async function (context, myQueueItem) {
    context.log('JJ JavaScript queue trigger function processed work item', myQueueItem);
};