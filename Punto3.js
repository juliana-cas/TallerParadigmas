// Book class to represent individual books
class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.available = true;
    }
  
    // Method to mark the book as borrowed
    borrow() {
      if (this.available) {
        this.available = false;
        console.log(`Book "${this.title}" by ${this.author} has been borrowed.`);
      } else {
        console.log(`Sorry, book "${this.title}" by ${this.author} is currently not available.`);
      }
    }
  
    // Method to mark the book as returned
    returnBook() {
      if (!this.available) {
        this.available = true;
        console.log(`Book "${this.title}" by ${this.author} has been returned.`);
      } else {
        console.log(`This book "${this.title}" by ${this.author} is already available.`);
      }
    }
  }
  
  // Library class to manage library operations
  class Library {
    constructor() {
      this.books = [];
    }
  
    // Method to add a book to the library
    addBook(id, title, author) {
      const newBook = new Book(id, title, author);
      this.books.push(newBook);
      console.log(`Book "${title}" by ${author} has been added to the library.`);
    }
  
    // Method to search for a book by title
    searchBookByTitle(title) {
      const foundBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
      if (foundBooks.length > 0) {
        console.log(`Found ${foundBooks.length} book(s) with title containing "${title}":`);
        foundBooks.forEach(book => console.log(`- ${book.title} by ${book.author}`));
      } else {
        console.log(`No books found with title containing "${title}".`);
      }
    }
  
    // Method to borrow a book from the library
    borrowBook(title) {
      const foundBook = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
      if (foundBook) {
        foundBook.borrow();
      } else {
        console.log(`Book with title "${title}" is not available in the library.`);
      }
    }
  
    // Method to return a book to the library
    returnBook(title) {
      const foundBook = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
      if (foundBook) {
        foundBook.returnBook();
      } else {
        console.log(`Book with title "${title}" is not found in the library.`);
      }
    }
  }
  
  // Example usage
  const library = new Library();
  
  library.addBook(1, "The Great Gatsby", "F. Scott Fitzgerald");
  library.addBook(2, "To Kill a Mockingbird", "Harper Lee");
  library.addBook(3, "1984", "George Orwell");
  
  library.searchBookByTitle("mockingbird");
  
  library.borrowBook("To Kill a Mockingbird");
  library.borrowBook("1984");
  
  library.returnBook("To Kill a Mockingbird");
  library.borrowBook("1984");
  