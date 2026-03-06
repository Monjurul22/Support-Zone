# 🎫 SupportZone — Customer Support Dashboard

A React-based Customer Support Zone for displaying, tracking, and resolving customer tickets — with live stats, dark/light mode toggle, toast notifications, and a fully responsive UI.

[🔗 Live Demo](https://unique-tarsier-0eb1e2.netlify.app/)  
[📦 Repository](https://github.com/Monjurul22/Support-Zone)

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Monjurul22/Support-Zone.git

# Navigate to the project
cd Support-Zone

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## ✅ Features

- 🧭 **Navbar** — Logo, navigation links, dark/light toggle button, and "+ New Ticket" button
- 🎨 **Banner** — Gradient hero section with live stats (Total, In Progress, Resolved)
- 🗂️ **Ticket Cards** — 2-column grid displaying all open tickets with priority badges
- ✅ **Task Status Panel** — Tracks in-progress tickets with a workload progress bar
- 📋 **Resolved List** — Displays all completed tickets with timestamps
- 🌙 **Dark / Light Mode** — Smooth toggle with moon/sun icon
- 🔔 **Toast Notifications** — React-Toastify replaces all browser alerts
- 📱 **Fully Responsive** — Mobile, tablet, and desktop layouts

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| **React.js** | UI Library (mandatory) |
| **Tailwind CSS v4** | Styling & dark mode |
| **React-Toastify** | Toast notifications |
| **React Icons** | HeroIcons & FontAwesome icons |
| **Vite** | Build tool & dev server |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Top nav with dark mode toggle
│   ├── Banner.jsx       # Hero section with live stats
│   ├── TicketCard.jsx   # Individual ticket card
│   ├── TaskPanel.jsx    # In-progress & resolved panels
│   └── Footer.jsx       # Footer with links
├── data/
│   └── ticketsData.js   # Sample ticket dataset (12 tickets)
├── App.jsx              # Root component, state management
├── main.jsx             # React entry point
└── index.css            # Tailwind imports & dark mode config
```

---

## 🔄 Ticket Lifecycle

```
Open (Ticket Card)  →  In Progress (Task Panel)  →  Resolved (Resolved List)
```

1. **Click a ticket card** → Moves to In Progress, In Progress count increases
2. **Click "Done" button** → Removed from In Progress, added to Resolved, removed from ticket grid, Resolved count increases

---

## ❓ React Conceptual Questions

### 1. What is JSX, and why is it used?

JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows you to write HTML-like code directly inside JavaScript files.

```jsx
const element = <h1>Hello, World!</h1>;
```

**Why it's used:**
- Makes UI code more readable and intuitive by combining logic and markup in one place
- Gets compiled to `React.createElement()` calls by Babel under the hood
- Allows embedding JavaScript expressions using `{}` curly braces
- Reduces the mental overhead of switching between template files and logic files

Without JSX, the same code would look like:
```js
const element = React.createElement('h1', null, 'Hello, World!');
```

---

### 2. What is the difference between State and Props?

| Feature | State | Props |
|---|---|---|
| **Definition** | Data managed **inside** a component | Data passed **into** a component from its parent |
| **Mutability** | Mutable — updated with `useState` | Immutable — read-only inside the child |
| **Ownership** | Owned by the component itself | Owned by the parent component |
| **Purpose** | Tracks dynamic, changing data | Configures or customises a component |
| **Triggers re-render** | Yes, when updated | Yes, when parent re-renders with new props |

**Example from this project:**
```jsx
// Props — passed from parent
<TicketCard ticket={ticket} isInProgress={true} />

// State — managed inside the component
const [inProgress, setInProgress] = useState([]);
```

---

### 3. What is the useState hook, and how does it work?

`useState` is a built-in React Hook that lets functional components hold and update state.

**Syntax:**
```js
const [stateValue, setStateFunction] = useState(initialValue);
```

**How it works:**
1. `useState(initialValue)` initialises the state with a given value
2. Returns an array: the current state value and a setter function
3. Calling the setter **triggers a re-render** with the new value

**Example from this project:**
```jsx
const [tickets, setTickets] = useState(ticketsData);
const [inProgress, setInProgress] = useState([]);
const [resolved, setResolved] = useState([]);

// Adding a ticket to in-progress
setInProgress((prev) => [...prev, ticket]);
```

---

### 4. How can you share state between components in React?

The most common pattern is **lifting state up** — moving state to the closest common ancestor and passing it down via props.

**Steps:**
1. Define state in the **parent** component
2. Pass the value as a **prop** to children that need to read it
3. Pass the setter (or a handler function) as a **prop** to children that need to update it

**Example from this project:**
```jsx
// App.jsx — state lives here (parent)
const [inProgress, setInProgress] = useState([]);

const handleAddToProgress = (ticket) => {
  setInProgress((prev) => [...prev, ticket]);
};

// Passed down to child components
<TicketCard onAddToProgress={handleAddToProgress} />
<Banner inProgressCount={inProgress.length} />
<TaskPanel inProgress={inProgress} onComplete={handleComplete} />
```

`App.jsx` is the **single source of truth** — it owns all state and shares it with Banner, TicketCard, and TaskPanel through props.

---

### 5. How is event handling done in React?

React uses **synthetic events** — a cross-browser wrapper around native DOM events. Handlers are written as camelCase JSX attributes.

**Syntax:**
```jsx
<button onClick={handleClick}>Click Me</button>
```

**Key rules:**
- Use camelCase: `onClick`, `onChange`, `onSubmit`
- Pass a **reference**, not a call: `onClick={handleClick}` ✅ not `onClick={handleClick()}` ❌
- To pass arguments, wrap in an arrow function: `onClick={() => handleComplete(ticket)}`
- Event object is passed automatically: `onChange={(e) => setValue(e.target.value)}`

**Examples from this project:**
```jsx
// TicketCard.jsx — clicking a card adds it to progress
<div onClick={() => onAddToProgress(ticket)}>

// TaskPanel.jsx — clicking Done completes the ticket
<button onClick={() => onComplete(ticket)}>Done</button>

// Navbar.jsx — toggle button switches dark/light mode
<button onClick={() => setIsDark(!isDark)}>
```

---

## 🌙 Dark Mode Implementation

Dark mode uses **Tailwind CSS v4's class strategy**. The key config in `index.css`:

```css
@variant dark (&:where(.dark, .dark *));
```

When the toggle button is clicked, a `"dark"` class is added to the root `<div>` in `App.jsx`, which activates all `dark:` utility classes throughout the entire component tree.

---

## 📄 License

MIT © 2025 SupportZone — [Monjurul Ahamed](https://github.com/Monjurul22)