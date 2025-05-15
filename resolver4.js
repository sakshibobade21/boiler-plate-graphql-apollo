import {books, authors} from './data.js'

export const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors
  },
  Mutation: {
    addBook: (parent, args) => {
      books.push({...args, id: books.length+1})
      return books[books.length-1]
    }
  }
 
};


/*
  mutation AddBook($title: String!, $authorId: ID!) {
    addBook(title: $title, authorId: $authorId) {
      title
    }
  }
*/