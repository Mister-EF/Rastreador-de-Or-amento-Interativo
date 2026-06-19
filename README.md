# Interactive Budget Tracker - rastreador de orçamento interativo''

A functional web application that calculates balances dynamically using JavaScript and utilizes `localStorage` to keep user financial data persistent across browser sessions. Add income, log expenses, and watch your balance update instantly — no page reloads, no data loss.

---

## How It Works

Every transaction is stored as a JSON object in `localStorage` on submission. On page load, the script reads that data back and rebuilds the transaction history and balance values from scratch — keeping everything intact between sessions without any backend.

---

## Built With

| Technology | Role |
|------------|------|
| HTML5 | Form structure and transaction list markup |
| CSS3 | Balance display, income/expense color coding, and card layout |
| JavaScript | Dynamic balance calculation, DOM rendering, and data persistence |
| `localStorage` | Client-side storage for persistent transaction history |

---

## Project Structure

```
/
├── index.html        # Budget UI, form, and transaction list structure
├── style.css         # Light theme, color-coded transaction items, and layout
└── script.js         # Transaction logic, balance updates, and localStorage sync
```

---

## Getting Started

No installs or build tools required.

```bash
git clone https://github.com/Mister-EF/Rastreador-de-Or-amento-Interativo.git
cd budget-tracker
```

Open `index.html` in your browser. Your data will persist automatically across sessions via `localStorage`.

---

## Features

- Real-time balance, income, and expense totals recalculated on every entry
- Positive values logged as income (green), negative values as expenses (red)
- Full transaction history rendered from `localStorage` on page load
- Persistent data survives tab closes, refreshes, and browser restarts
- Zero dependencies — runs entirely in the browser with no backend

---

Thank you for your attention!
