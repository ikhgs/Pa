const sendMessage = require('../handles/sendMessage');

module.exports = {
  onchat: (senderId, message) => {
    const responseText = "Bonjour! Je suis votre assistant AI. Posez-moi vos questions!";
    sendMessage(senderId, responseText);
  },
  execute: (args, senderId) => {
    const responseText = `Vous avez exécuté la commande AI avec les arguments : ${args.join(" ")}`;
    sendMessage(senderId, responseText);
  }
};
