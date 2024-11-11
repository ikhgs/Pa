const sendMessage = require('./sendMessage');

module.exports = (event) => {
  const senderId = event.sender.id;
  const payload = event.postback.payload;

  if (payload === 'GET_STARTED') {
    sendMessage(senderId, 'Bienvenue sur notre bot Messenger!');
  } else {
    sendMessage(senderId, `Payload inconnu: ${payload}`);
  }
};
