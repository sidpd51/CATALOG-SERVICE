"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class BookMetaData extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Book, {
                foreignKey: { name: "bookId", allowNull: false },
                onDelete: "CASCADE",
            });
        }
    }
    BookMetaData.init(
        {
            bookId: { type: DataTypes.INTEGER, allowNull: false, unique: true },
            language: { type: DataTypes.STRING, allowNull: false },
            pages: { type: DataTypes.INTEGER, allowNull: false },
            publisher: { type: DataTypes.STRING, allowNull: false },
            summary: { type: DataTypes.STRING, allowNull: false },
            edition: { type: DataTypes.INTEGER, allowNull: false },
        },
        {
            sequelize,
            modelName: "BookMetaData",
        }
    );
    return BookMetaData;
};
