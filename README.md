# Facebook Messenger Platform App

#### Node API adapter in ECMAScript 2015 (ES6)

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/bot-facebook) [![npm](https://img.shields.io/npm/dm/fb-messenger-app.svg)](https://www.npmjs.com/package/bot-facebook) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![npm](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e49cfaf866174e5fa9053cc2e894927f)](https://www.codacy.com/app/charlesaraya/fb-messenger-app?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=charlesaraya/fb-messenger-app&amp;utm_campaign=Badge_Grade)

## Installation

Install the `bot-facebook` package in your node server app's local `node_modules` folder.

```bash
npm i bot-facebook
```

### How to start

I take for granted that you've already [setup your Messenger Platform app](https://developers.facebook.com/docs/messenger-platform/quickstart):

1. Created a Facebook App and Page
2. Setup the Webhook
3. Got a Page Access Token
4. Subscribed the App to the Page

After installing the fb-messenger-app package with npm as shown above, import it in your app

```js
const botFacebook = require('bot-facebook/disk/bot-facebook')
```

Then create a new messenger instance passing your Facebook App page access token (this token will include all messenger permissions)

```js
var messenger = new botFacebook(MY_PAGE_ACCESS_TOKEN)
```

### Receive Messages

You'll have to listen for _GET_ calls at your webhook. [Callbacks](https://developers.facebook.com/docs/messenger-platform/webhook-reference#format) will be made to this webhook. 

```js
var messenger = new botFacebook(MY_PAGE_ACCESS_TOKEN)
app.get('/webhook', function (req, res) {
    messenger._verify(req,res,verifyToken);
})
```

### Event Message

```js
var messenger = new botFacebook(MY_PAGE_ACCESS_TOKEN)
app.post('/webhook', function (req, res) {
     var entries = req.body.entry;
            for (var entry of entries) {
                var messaging = entry.messaging;
                for (var message of messaging) {
                    var senderId = message.sender.id;

                    if (message.message) {
                        var text = message.message.text;
                        // Send message Text, Replies, TemplateButton, Action
                          if (message.message.attachments) {
                              //Save attachment 
                               // Send message Text, Replies, TemplateButton, Action
                          }
                    }
                     if (message.postback) {
                         // Send message Text, Replies, TemplateButton ,Action
                     }
                     if(message.)
                }
            }
})
```
#### Send message text

```js
    var messenger = new botFacebook(MY_PAGE_ACCESS_TOKEN)
    messenger._sendMessageText(senderId,"^^ Hello");
```
##### Result
```js
{
  "recipient_id": "1254477777772919",
  "message_id": "AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P"
}  
```

#### Send message Attachment

The Messenger Platform allows you to attach assets to messages, including audio, video, images, and files. The maximum attachment size is 25 MB. The maximum resolution for images is 85 Megapixel. There are three ways to attach an asset to a message:

+ URL
+ attachment_id

Attachment Types
The Messenger Platform supports the following attachment types, specified in the attachment.type property of the message:

+ audio
+ video
+ image
+ file

```js
    var messenger = new botFacebook(MY_PAGE_ACCESS_TOKEN);
    var attachment = {
      "type":"image", 
      "payload":{
        "url":"http://www.messenger-rocks.com/image.jpg", 
        "is_reusable":true
      }
    }
    var attach = {
      "type":"image", 
      "payload":{
        "attachment_id": "1745504518999123"
      }
    }
    messenger._sendAttachment(senderId,attachment)
    messenger._sendAttachment(senderId,attach)
```

#### Send message Quickreplies

```js
   var messenger = new botFacebook(MY_PAGE_ACCESS_TOKEN);
   var quickreplies = [
      {
        "content_type":"text",
        "title":"Red",
        "payload":"<POSTBACK_PAYLOAD>",
        "image_url":"http://example.com/img/red.png"
      },{
        "content_type":"text",
        "title":"Green",
        "payload":"<POSTBACK_PAYLOAD>",
        "image_url":"http://example.com/img/green.png"
      }
    ]
    messenger._sendQuickReplies(senderId,"Hello",quickreplies)
```
#### Send Action read,typing on,typing off

```js
    var messenger = new botFacebook(MY_PAGE_ACCESS_TOKEN);
    // Make seen
    messenger._sendAction(senderId,"mark_seen")
    // Typing On
    messenger._sendAction(senderId,"typing_on")
    // Typing Off
    messenger._sendAction(senderId,"typing_off")
```
#### Send TemplateButton

```js
    var messenger = new botFacebook(MY_PAGE_ACCESS_TOKEN);
    let arraybtn ={
         "type": "template",
            "payload": {
                "template_type": "button",
                "text": `Click button dưới đây để sử dụng chức năng`,
                "buttons": [{
                                "type": "postback",
                                "title": "Hello everyOne",
                                "payload": "<POSTBACK_PAYLOAD>"
                            }
                ]
           }
     }
     messenger._sendTemplateButton(senderId,arraybtn);
```

#### Save Attachment 

```js
    var messenger = new botFacebook(MY_PAGE_ACCESS_TOKEN);
    /**
    * @param {retrieved in the event message} message.message.attachments
    */
    messenger._saveAttachment(senderId,message.message.attachments)
```
#### Get started

```js
    var messenger = new botFacebook(MY_PAGE_ACCESS_TOKEN);
    messenger._getStart({
        "get_started":[
        {
            "payload":"USER_DEFINED_PAYLOAD"
            }
        ]
    })
```

#### Persistent Menu

```js
    var messenger = new botFacebook(MY_PAGE_ACCESS_TOKEN);
    messenger._persistentMenu([{ "title": "Xem tin tức", "type": "postback", "payload": "<POSTBACK_PAYLOAD>" }]);
```

### GetInfoUser

```js
    var messenger = new botFacebook(MY_PAGE_ACCESS_TOKEN);
    messenger._getInfoUser(senderId);
```
+ Result
```js
{
  "first_name": "Peter",
  "last_name": "Chang",
  "profile_pic": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p200x200/13055603_10105219398495383_8237637584159975445_n.jpg?oh=1d241d4b6d4dac50eaf9bb73288ea192&oe=57AF5C03&__gda__=1470213755_ab17c8c8e3a0a447fed3f272fa2179ce",
  "locale": "en_US",
  "timezone": -7,
  "gender": "male",
}
```
