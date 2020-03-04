var persistent = require("./services/config.persistent.menu"),
    sendAction = require("./services/config.message.sendAction"),
    messageText = require("./services/config.messageText"),
    messageAttachment = require("./services/config.message.sendAttachment"),
    messageButton = require("./services/config.message.sendButton"),
    messageQuickReplies = require("./services/config.message.send.QuickReplies"),
    savefile = require("./services/config.message.saveAttachment"),
    init = require("./services/config.init"),
    getStart = require("./services/config.getStart"),
    getInfoUser = require("./services/config.getInfouser");

function botFacebook(access_token) {
    this.token = access_token;
}

botFacebook.prototype._verify = function(req, res, verifyToken) {
    init(req, res, verifyToken);
}
botFacebook.prototype._getStart = async function(messageData, ) {
    return await getStart(messageData, this.token)
}
botFacebook.prototype._persistentMenu = async function(form) {
    return await persistent(form, this.token);
}
botFacebook.prototype._sendAction = async function(senderId, action) {
    return await sendAction(senderId, action, this.token);
}
botFacebook.prototype._sendMessageText = async function(senderId, text) {
    return await messageText(senderId, text, this.token);
}
botFacebook.prototype._sendQuickReplies = async function(senderId, text, quickreplies) {
    return await messageQuickReplies(senderId, text, quickreplies, this.token)
}
botFacebook.prototype._sendAttachment = async function(senderId, attachment) {
    return await messageAttachment(senderId, attachment, this.token);
}
botFacebook.prototype._sendTemplateButton = async function(senderId, arrayBtn) {
    return await messageButton(senderId, arrayBtn, this.token);
}
botFacebook.prototype._saveAttachment = async function(attachment) {
    return await savefile(attachment, this.token);
}
botFacebook.prototype._getInfoUser = async function(senderId) {
    return await getInfoUser(senderId, this.token);
}