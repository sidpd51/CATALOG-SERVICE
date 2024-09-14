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

        if (data.isbn) {
            filter.isbn = {
                [Op.startsWith]: data.isbn,
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

    async getAllBooks(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            console.log(filterObject)
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
            console.log(bookId)
            console.log(data)
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
