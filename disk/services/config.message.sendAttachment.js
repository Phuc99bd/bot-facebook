var request = require("request");

let sendMessageAttachment = (senderId, message, tokenPage) => {
    return new Promise((resolve, reject) => {
        request({
            url: 'https://graph.facebook.com/v2.6/me/messages',
            qs: {
                access_token: tokenPage,
            },
            method: 'POST',
            json: {
                recipient: {
                    id: senderId
                },
                message: {
                    attachment: message
                }
            }
        }, function(err, res, body) {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })
}

module.exports = sendMessageAttachment;