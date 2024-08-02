Is this correct?, 

class TelegramBotApi {
  constructor(token) {
    this.token = token;
  }

  sendMessage(chatId, message) {
    fetch(`(https://api.telegram.org/bot${this.token}/sendMessage,, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    });
  }

  startPolling() {
    fetch(`(https://api.telegram.org/bot${this.token}/getupdates, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(updates => {
        updates.result.forEach(update => {
          const chatId = (link unavailable);
          const message = update.message.text;
          // Handle the update here
        });
      });
  }
}

class MiniApp {
  constructor(id, apiHash) {
    (link unavailable) = id;
    this.apiHash = apiHash;
  }

  initialize() {
    // Initialize the mini app here
  }
handleUpdate(update) {
  const chatId = update.message.chat.id;
  const message = update.message.text;
  // Handle the update here
}
