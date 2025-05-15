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
    },
    addAuthor: (parent, args) => {
      authors.push({...args, id: authors.length+1})
      return authors[authors.length-1]
    }
  }
 
};


/*
  mutation AddAuthor($name: String!, $bookIds: [ID!]!) {
    addAuthor(name: $name, bookIds: $bookIds) {
      name
    }
  }

*/