document.addEventListener("DOMContentLoaded", () => {
  const bookForm = document.getElementById("bookForm");
  const incompleteBookList = document.getElementById("incompleteBookList");
  const completeBookList = document.getElementById("completeBookList");

  let books = JSON.parse(localStorage.getItem("books")) || [];
  books = books.map((book) => ({
    ...book,
    year: Number(book.year),
  }));

  function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
  }

  function renderBooks() {
    incompleteBookList.innerHTML = "";
    completeBookList.innerHTML = "";

    books.forEach((book) => {
      const bookElement = createBookElement(book);
      if (book.isComplete) {
        completeBookList.appendChild(bookElement);
      } else {
        incompleteBookList.appendChild(bookElement);
      }
    });
  }

  function createBookElement(book) {
    const div = document.createElement("div");
    div.className = "book-item col-md-6";
    div.dataset.bookid = book.id;
    div.setAttribute("data-testid", "bookItem");
    div.innerHTML = `
      <h3 data-testid="bookItemTitle">${book.title}</h3>
      <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
      <p data-testid="bookItemYear">Tahun: ${book.year}</p>
      <div>
        <button data-testid="bookItemIsCompleteButton" class="btn btn-success btn-sm me-2 toggle-complete">${
          book.isComplete ? "Pindah ke Belum Selesai" : "Selesai Dibaca"
        }</button>
        <button data-testid="bookItemDeleteButton" class="btn btn-danger btn-sm me-2 delete-book">Hapus</button>
        <button data-testid="bookItemEditButton" class="btn btn-warning btn-sm edit-book">Edit</button>
      </div>
    `;

    div.querySelector(".toggle-complete").addEventListener("click", () => {
      book.isComplete = !book.isComplete;
      saveBooks();
      renderBooks();
    });

    div.querySelector(".delete-book").addEventListener("click", () => {
      books = books.filter((b) => b.id !== book.id);
      saveBooks();
      renderBooks();
    });

    div.querySelector(".edit-book").addEventListener("click", () => {
      editBook(book);
    });

    return div;
  }

  // Event listener untuk form tambah buku
  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("bookFormTitle").value;
    const author = document.getElementById("bookFormAuthor").value;
    const year = parseInt(document.getElementById("bookFormYear").value, 10);
    const isComplete = document.getElementById("bookFormIsComplete").checked;

    const newBook = {
      id: Date.now(),
      title,
      author,
      year,
      isComplete,
    };

    books.push(newBook);
    saveBooks();
    renderBooks();
    bookForm.reset();
  });

  // Fungsi untuk mengedit buku
  function editBook(book) {
    const title = prompt("Edit Judul:", book.title);
    const author = prompt("Edit Penulis:", book.author);
    const year = parseInt(prompt("Edit Tahun:", book.year), 10);

    if (title && author && year) {
      book.title = title;
      book.author = author;
      book.year = year;
      saveBooks();
      renderBooks();
    }
  }

  renderBooks();
});
