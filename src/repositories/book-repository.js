const { Book } = require("../models/index");
const { Op, where } = require("sequelize");

class BookRepository {
    #createFilter(data) {
        let filter = {};

        if (data.title) {
            filter.title = {
                [Op.startsWith]: data.title,
            };
        }

        if (data.author) {
            filter.author = {
                [Op.startsWith]: data.author,
            };
        }

        if (data.category) {
            filter.category = {
                [Op.startsWith]: data.category,
            };
        }

        if (data.ISBN) {
            filter.ISBN = {
                [Op.startsWith]: data.ISBN,
            };
        }

        return filter;
    }

    async createBook(data) {
        try {
            const book = await Book.create(data);
            return book;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteBook(bookId) {
        try {
            await Book.destroy({
                where: {
                    id: bookId,
                },
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getBook(bookId) {
        try {
            const book = await Book.findByPk(bookId);
            return book;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAll(filter) {
        try {
            const filterObject = await this.#createFilter(filter);
            const books = await Book.findAll({
                where: filterObject,
            });
            return books;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async updateBook(bookId, data) {
        try {
            await Book.update(data, {
                where: {
                    id: bookId,
                },
            });

            const book = Book.findByPk(bookId);
            return book;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = BookRepository;
