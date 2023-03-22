'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('Users',
     {
         id: {
             type: Sequelize.INTEGER,
             allowNull: false,
             primaryKey: true,
             autoIncrement: true,
             unique: true
         },
         username: {
             type: Sequelize.STRING,
             unique: true,
             validate: {
                 notEmpty: {msg: "Username must not be empty."}
             }
         },
         password: {
             type: Sequelize.STRING,
             validate: {notEmpty: {msg: "Password must not be empty."}}
         },
         salt: {
             type: Sequelize.STRING
         },
         isAdmin: {
             type: Sequelize.BOOLEAN,
             defaultValue: false
         },
         email: {
             type: Sequelize.STRING,
             validate: {
                 isEmail: {msg: "Email must to be 'example@core.example'"}
             }
         },
         createdAt: {
             type: Sequelize.DATE,
             allowNull: false
         },
         updatedAt: {
             type: Sequelize.DATE,
             allowNull: false
         }
     },
     {
         sync: {force: true}
     }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('users');
  }
};
