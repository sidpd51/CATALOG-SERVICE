"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Book.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            ISBN: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            publishedDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            totalCopies: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            availableCopies: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM,
                values: ["Active", "Other"],
                defaultValue: "Active",
            },
        },
        {
            sequelize,
            modelName: "Book",
        }
    );
    return Book;
};
