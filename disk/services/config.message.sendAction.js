var request = require("request");

let sendAction = (senderId, action, tokenPage) => {
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
                sender_action: action,
            }
        }, (err, res, body) => {
            if (err) {
                reject(err)
            }
            resolve(body);
        })
    })
}

module.exports = sendAction;