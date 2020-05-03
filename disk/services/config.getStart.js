var request = require("request");

function getStart(messageData, tokenPage) {
    return new Promise(async(resolve,reject)=>{
        request({
            url: 'https://graph.facebook.com/v2.6/me/messenger_profile?access_token=' + tokenPage,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            form: messageData
        },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                // Print out the response body
               resolve(body)

            } else {
                // TODO: Handle errors
               reject(error);
            }
        });
    })
}
module.exports = getStart;