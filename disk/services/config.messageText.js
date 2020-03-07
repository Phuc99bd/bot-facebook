var request = require("request");

let sendMessageText = (senderId, message, tokenPage) => {
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
                    text: message
                }
            }
        }, (error, response, body) => {
            if (error) {
                reject(error)
            }
            resolve(response);
        })
    })

}

module.exports = sendMessageText;