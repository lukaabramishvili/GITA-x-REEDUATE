class Todo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.isDone = false;
    this.createdAt = new Date();
  }
}

class TodoList {
  constructor() {
    this.todos = [];
  }

  add(title) {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 5);
    const newTodo = new Todo(id, title);
    this.todos.push(newTodo);
    return newTodo;
  }

  delete(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  checkActiveTodo(id) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.isDone = true;
    }
  }

  getTodos(filter = 'all') {
    if (filter === 'active') {
      return this.todos.filter(todo => !todo.isDone);
    }
    if (filter === 'done') {
      return this.todos.filter(todo => todo.isDone);
    }
    return this.todos;
  }

  getAllTodos(options) {
    if (options && options.hasOwnProperty('active')) {
      const isActive = options.active;
      return this.todos.filter(todo => todo.isDone !== isActive);
    }
    return this.todos;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    const existing = this.items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity || 1;
    } else {
      this.items.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1,
      });
    }
  }

  removeFromCart(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  updateItem(itemId, newQuantity) {
    const item = this.items.find(i => i.id === itemId);
    if (item) {
      if (newQuantity <= 0) {
        this.removeFromCart(itemId);
      } else {
        item.quantity = newQuantity;
      }
    }
  }

  calculateTotalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 5);
    this.books.push({ ...book, id });
  }

  removeBook(bookId) {
    this.books = this.books.filter(book => book.id !== bookId);
  }

  listBooks(sortBy = null) {
    let booksCopy = [...this.books];
    if (sortBy === 'year') {
      booksCopy.sort((a, b) => a.year - b.year);
    } else if (typeof sortBy === 'function') {
      booksCopy.sort(sortBy);
    }
    return booksCopy;
  }
}

class ContactManager {
  constructor() {
    this.contacts = [];
  }

  addNewContact(name, phone, email) {
    const emailExists = this.contacts.some(c => c.email === email);
    const phoneExists = this.contacts.some(c => c.phone === phone);
    if (emailExists) {
      throw new Error('Contact with this email already exists');
    }
    if (phoneExists) {
      throw new Error('Contact with this phone number already exists');
    }
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 5);
    const newContact = { id, name, phone, email };
    this.contacts.push(newContact);
    return newContact;
  }

  viewAllContacts() {
    return this.contacts;
  }

  updatePhone(contactId, newPhone) {
    const contact = this.contacts.find(c => c.id === contactId);
    if (contact) {
      const phoneExists = this.contacts.some(c => c.id !== contactId && c.phone === newPhone);
      if (phoneExists) {
        throw new Error('Phone number already in use by another contact');
      }
      contact.phone = newPhone;
    } else {
      throw new Error('Contact not found');
    }
  }

  deleteContact(contactId) {
    this.contacts = this.contacts.filter(c => c.id !== contactId);
  }
}