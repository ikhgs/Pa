const request = require('request');

function sendMessage(recipientId, text) {
  const messageData = {
    recipient: { id: recipientId },
    message: { text: text }
  };

  request({
    uri: 'https://graph.facebook.com/v11.0/me/messages',
    qs: { access_token: process.env.PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: messageData
  }, (error, response, body) => {
    if (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
    } else if (response.body.error) {
      console.error('Erreur API:', response.body.error);
    }
  });
}

module.exports = sendMessage;
