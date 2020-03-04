var request = require("request");

function getInfoUser(senderId, tokenPage) {
    return new Promise((resolve, reject) => {
        request({
            url: `https://graph.facebook.com/${senderId}?fields=first_name,last_name,profile_pic`,
            encoding: null,
            qs: {
                access_token: tokenPage
            },
            method: "GET",
        }, async function(err, res, body) {
            let data = JSON.parse(fixEncoding(body));
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    })
}

function fixEncoding(string) {
    return iconv.decode(iconv.encode(string, "latin1"), "utf8")
}

module.exports = getInfoUser;