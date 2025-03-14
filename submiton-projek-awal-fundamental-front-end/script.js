class AppBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <header>
              <h1>Notes App</h1>
          </header>
      `;
  }
}
customElements.define("app-bar", AppBar);

class NoteItem extends HTMLElement {
  static get observedAttributes() {
    return ["title", "body", "created"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
          <style>
              .date {
                  font-size: 0.8rem;
                  color: #666;
              }
          </style>
          <div class="note-card">
              <h3 class="title"></h3>
              <p class="body"></p>
              <p class="date"></p>
          </div>
      `;

    this.titleElement = this.shadowRoot.querySelector(".title");
    this.bodyElement = this.shadowRoot.querySelector(".body");
    this.dateElement = this.shadowRoot.querySelector(".date");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    switch (name) {
      case "title":
        this.titleElement.textContent = newValue;
        break;
      case "body":
        this.bodyElement.textContent = newValue;
        break;
      case "created":
        this.dateElement.textContent = new Date(newValue).toLocaleDateString();
        break;
    }
  }

  connectedCallback() {
    this.titleElement.textContent = this.getAttribute("title") || "";
    this.bodyElement.textContent = this.getAttribute("body") || "";
    this.dateElement.textContent = this.getAttribute("created")
      ? new Date(this.getAttribute("created")).toLocaleDateString()
      : "";
  }
}

customElements.define("note-item", NoteItem);

class AddNoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
          <style>
              form {
                  background: white;
                  padding: 2rem;
                  border-radius: 8px;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .form-group {
                  margin-bottom: 1rem;
              }
              input, textarea {
                  font-family: "Poppins", sans-serif;
                  width: 100%;
                  padding: 0.5rem;
                  border: 1px solid #ddd;
                  border-radius: 4px;
              }
              button {
                  background: var(--primary-color);
                  color: white;
                  padding: 0.5rem 1rem;
                  border: none;
                  border-radius: 4px;
                  cursor: pointer;
              }
          </style>
          <form id="noteForm">
              <div class="form-group">
                  <input type="text" id="title" placeholder="Judul Catatan" required>
              </div>
              <div class="form-group">
                  <textarea id="body" rows="4" placeholder="Isi Catatan" required></textarea>
              </div>
              <button type="submit">Tambah Catatan</button>
          </form>
      `;

    const form = this.shadowRoot.getElementById("noteForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newNote = {
        title: this.shadowRoot.getElementById("title").value,
        body: this.shadowRoot.getElementById("body").value,
        created: new Date().toISOString(),
      };
      this.dispatchEvent(
        new CustomEvent("add-note", {
          detail: newNote,
          bubbles: true,
          composed: true,
        })
      );
      form.reset();
    });
  }
}
customElements.define("add-note-form", AddNoteForm);

document.addEventListener("DOMContentLoaded", async () => {
  const notesGrid = document.getElementById("notes-grid");

  const response = await fetch(
    "https://raw.githubusercontent.com/dicodingacademy/a163-bfwd-labs/099-shared-files/notes.js"
  );
  const notesText = await response.text();
  const notes = new Function(`return ${notesText.match(/\[.*?\]/s)[0]}`)();

  function renderNotes() {
    notesGrid.innerHTML = "";
    notes.forEach((note) => {
      const noteElement = document.createElement("note-item");
      noteElement.setAttribute("title", note.title);
      noteElement.setAttribute("body", note.body);
      noteElement.setAttribute("created", note.createdAt);
      notesGrid.appendChild(noteElement);
    });
  }
  renderNotes();

  document.addEventListener("add-note", (e) => {
    notes.unshift({
      ...e.detail,
      id: `note-${Date.now()}`,
      createdAt: new Date().toISOString(),
    });
    renderNotes();
  });
});
