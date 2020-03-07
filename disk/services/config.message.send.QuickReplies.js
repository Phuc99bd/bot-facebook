var request = require("request");

let sendQuickReplies = (senderId, text, quick_replies, tokenPage) => {
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
                    text: text,
                    quick_replies: quick_replies
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

module.exports = sendQuickReplies;