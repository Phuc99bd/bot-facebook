var request = require("request");

function persistentMenu(call_to_actions, tokenPage) {
    return new Promise((resolve, reject) => {
        request({
                url: 'https://graph.facebook.com/v2.6/me/messenger_profile',
                qs: { access_token: tokenPage },
                method: 'POST',
                json: {
                    "persistent_menu": [{
                        "locale": "default",
                        "composer_input_disabled": false,
                        "call_to_actions": call_to_actions
                    }]
                }

            },
            function(err, res, body) {
                if (err) {
                    reject(err);
                }
                resolve(body);
            });
    })
}

module.exports = persistentMenu;