'use strict';
const models = require('../../models');
const User = models.User
const Chat = models.Chat
const ChatUser = models.ChatUser
const Message = models.Message


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const users = await User.findAll({
      order:[['id','DESC']],
      limit:2
    
    });
    const chat = await Chat.create();
    
    //creating chat user table seeder
    await ChatUser.bulkCreate([
      {
        chatId: chat.id,
        userId: users[0].id
      },
      {
        chatId: chat.id,
        userId: users[1].id
      }
    ]);

    await Message.bulkCreate([
      {
        message:"Hello whats up?",
        chatId: chat.id,
        fromUserId: users[0].id
      },
      {
        message:"Long tiem no see?",
        chatId: chat.id,
        fromUserId: users[1].id
      }
    ])


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await Chat.bulkDelete('');

  }
};
