const api = "https://reactnd-books-api.udacity.com";

// Generate a unique token for storing your bookshelf
// data on the backend server.
const token = localStorage.token
  ? localStorage.token
  : Math.random()
      .toString(36)
      .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

export const BooksApi = {
  get: bookId =>
    fetch(`${api}/books/${bookId}`, { headers })
      .then(res => res.json())
      .then(data => data.book),

  getAll: () =>
    fetch(`${api}/books`, { headers })
      .then(res => res.json())
      .then(data => data.books),

  update: (book, shelf) =>
    fetch(`${api}/books/${book.id}`, {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ shelf })
    }).then(res => res.json()),

  search: query =>
    fetch(`${api}/search`, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then(data => data.books)
};
