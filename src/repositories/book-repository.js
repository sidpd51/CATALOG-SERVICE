const { Book } = require("../models/index");

class BookRepository {
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

    async getAll() {
        try {
            const books = await Book.findAll({});
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
