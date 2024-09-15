"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("BookMetaData", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            bookId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "Books",
                    key: "id",
                    as: "bookId",
                },
                allowNull: false,
                unique: true,
            },
            language: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            pages: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            publisher: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            summary: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            edition: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("BookMetaData");
    },
};
