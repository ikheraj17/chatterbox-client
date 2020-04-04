var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('load', MessagesView.renderMessage);
  },

  renderMessage: function(message) {
    this.$chats.prepend(MessageView.render(message));
  },

};
