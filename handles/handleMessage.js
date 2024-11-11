const path = require('path');
const sendMessage = require('./sendMessage');
const commands = require(path.resolve(__dirname, '../commands')); // Chemin absolu pour éviter les erreurs de module introuvable

function execute(command, args, senderId) {
  if (commands[command]) {
    commands[command].execute(args, senderId);
  } else {
    sendMessage(senderId, `Commande inconnue: ${command}`);
  }
}

function onchat(senderId, message) {
  for (const commandName in commands) {
    const command = commands[commandName];
    if (command.onchat) {
      command.onchat(senderId, message); // Exécute la fonction "onchat" si elle existe
      return;
    }
  }
}

module.exports = (event) => {
  const senderId = event.sender.id;
  const message = event.message;

  if (message.text) {
    const text = message.text;
    const [command, ...args] = text.split(" ");

    // Si "onchat" est défini dans une commande, répondre automatiquement
    onchat(senderId, message);

    // Exécute la commande si elle a été explicitement entrée par l'utilisateur
    if (commands[command]) {
      execute(command, args, senderId);
    }
  }
};
