const { BookRepository } = require("../repositories/index");

class BookService {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    async createBook(data) {
        try {
            const book = await this.bookRepository.createBook(data);
            return book;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }

    async deleteBook(bookId) {
        try {
            const response = await this.bookRepository.deleteBook(bookId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }

    async updateBook(bookId, data) {
        try {
            const book = await this.bookRepository.updateBook(bookId, data);
            return book;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }

    async getBook(bookId) {
        try {
            console.log(bookId)
            const book = await this.bookRepository.getBook(bookId);
            return book;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }

    async getAllBooks(filter) {
        try {
            const books = await this.bookRepository.getAllBooks(filter);
            return books;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }
}

module.exports = BookService;
