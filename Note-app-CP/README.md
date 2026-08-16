# MINO - Modern Note-Taking App

MINO is a sleek, modern note-taking application built with **React 19** and **Tailwind CSS 4**. Designed for speed and simplicity, it allows users to capture their thoughts, organize them into folders, and keep them persistent across browser sessions.

---

## 🚀 About the Project

MINO (or AHEXX) provides a clean, card-based interface for managing personal notes. Whether you're brainstorming ideas, listing tasks, or journaling, MINO's intuitive design ensures your focus stays on the content.

### Key Features:
- **Dynamic Note Creation**: Choose from a palette of colors to categorize your notes visually.
- **Inline Editing**: Edit titles and descriptions directly on the note cards.
- **Auto-Persistence**: Your data is automatically saved to your browser's `localStorage`.
- **Responsive Design**: A fluid layout that works across different screen sizes.
- **Folder Organization**: Categorize notes into logical folders for better management.

---

## 🛠️ Methods & Technologies Used

### Core Stack
- **React 19**: Leverages the latest React features for efficient UI rendering and state management.
- **Vite 8**: Used as the build tool for lightning-fast Hot Module Replacement (HMR) and optimized production builds.
- **Tailwind CSS 4**: Utilized for utility-first styling, enabling a highly customizable and modern design system.
- **Lucide React**: A beautiful and consistent icon set used throughout the application.

### State & Data Management
- **React Context API**: Used to manage global state (notes, colors, and actions) without the complexity of external libraries.
- **LocalStorage API**: Provides client-side persistence, ensuring notes remain available even after refreshing or closing the browser.
- **Debouncing Technique**: Implemented in the saving logic to prevent excessive writes to `localStorage` while the user is typing, ensuring smooth performance.

---

## ❓ Why These Methods?

- **React & Vite**: We chose this combination to ensure a professional-grade development experience and a highly performant end-user application.
- **Tailwind CSS 4**: Version 4 brings even better performance and a streamlined configuration, allowing for rapid UI iteration without leaving the HTML/JSX.

- **Context API**: For an application of this scale, Context API provides the perfect balance between simplicity and scalability for state management.
- **LocalStorage + Debouncing**: By using `localStorage`, we provide a "zero-setup" experience for users. The debouncing mechanism is crucial to prevent UI lag during intensive typing sessions.

---

## 📈 Project Progress

- [x] **Phase 1: Foundation**
  - [x] Project initialization with Vite and React 19.
  - [x] Tailwind CSS 4 integration.
  - [x] Global state setup via `NoteContext`.
- [x] **Phase 2: Core Functionality**
  - [x] Note creation with color-coded categories.
  - [x] Real-time inline editing for titles and content.
  - [x] Automatic persistence with `localStorage`.
  - [x] Debounced saving logic for performance optimization.
- [x] **Phase 3: UI/UX Enhancements**
  - [x] Responsive Sidebar and Navbar.
  - [x] Folder-based organization UI.
  - [x] Card-based layout for "Recent Notes".
- [ ] **Phase 4: Advanced Features (Planned)**
  - [ ] Search and Filter functionality.
  - [ ] Calendar view for dated notes.
  - [ ] Archive and Trash bin management.
  - [ ] Cloud synchronization / User Authentication.

---

## 🛠️ Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/note-app-cp.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```
