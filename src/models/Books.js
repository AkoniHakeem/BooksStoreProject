// javascript books
export const books = [
  {
    id: 1,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 15.99,
    image: "JsBook1.png",
    description: "A book about JavaScript",
  },
  {
    id: 2,
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    price: 29.99,
    image: "JsBook2.jpg",
    description: "A book about JavaScript",
  },
  {
    id: 3,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 15.99,
    image: "jsBook3.png",
    description: "A book about JavaScript",
  },
];

export const bookings = [
  {
    id: 1,
    bookId: 1,
    userId: 1,
    date: "2020-01-01",
    status: "pending",
  },
  {
    id: 2,
    bookId: 2,
    userId: 1,
    date: "2020-01-01",
    status: "pending",
  },
  {
    id: 3,
    bookId: 3,
    userId: 1,
    date: "2020-01-01",
    status: "pending",
  },
  {
    id: 4,
    bookId: 4,
    userId: 1,
    date: "2020-01-01",
    status: "pending",
  },
  {
    id: 5,
    bookId: 5,
    userId: 1,
    date: "2020-01-01",
    status: "pending",
  },
];

export function makeBooking(bookId, userId) {
  const booking = {
    id: bookings.length + 1,
    bookId: bookId,
    userId: userId,
    date: new Date().toISOString().split("T")[0],
    status: "pending",
  };
  bookings.push(booking);
  return booking;
}
