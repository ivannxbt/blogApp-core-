'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable( 'Posts', 
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          unique: true
        },
        title: {
          type: Sequelize.STRING,
          validate: {notEmpty: {msg: "Title must not be empty."}}
        },
        body: {
          type: Sequelize.STRING,
          validate: {notEmpty: {msg: "Body must not be empty."}}
        },
        attachmentId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Attachments",
            key: "id"  
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
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
    await queryInterface.droptTable('Posts');
  }
};
