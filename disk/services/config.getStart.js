var request = require("request");

function getStart(messageData, tokenPage) {
    request({
            url: 'https://graph.facebook.com/v2.6/me/messenger_profile?access_token=' + tokenPage,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            form: messageData
        },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                // Print out the response body
                res.send(body);

            } else {
                // TODO: Handle errors
                res.send(body);
            }
        });
}
module.exports = getStart;