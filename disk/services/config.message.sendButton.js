var request = require("request");

let sendTemplateButton = (senderId, text, element, tokenPage) => {
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
                        attachment: {
                            "type": "template",
                            "payload": {
                                "template_type": "button",
                                "text": text,
                                "buttons": element
                            }
                        }
                    },
                }
            },
            (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                }
            })
    })
}

module.exports = sendTemplateButton;