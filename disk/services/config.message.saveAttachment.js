var request = require("request");

function saveAttachment(attachment, tokenPage) {
    return new Promise((resolve, reject) => {
        attachment.forEach(async attach => {
            request({
                url: `https://graph.facebook.com/v6.0/me/message_attachments?access_token=${tokenPage}`,
                method: "POST",
                json: {
                    message: {
                        attachment: {
                            type: attach.type,
                            payload: {
                                "is_reusable": true,
                                "url": attach.payload.url
                            }
                        }
                    }
                }
            }, (err, res, body) => {
                if (err) {
                    reject(err);
                }
                resolve(body);
            })
        })
    })
}

module.exports = saveAttachment;