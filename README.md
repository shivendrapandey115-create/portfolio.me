# Shivendra Pandey — Personal Portfolio Website

A personal portfolio website for **Shivendra Pandey**, second-year B.Tech student at **GL Bajaj Institute of Technology and Management, Greater Noida**, practicing Python and Data Structures & Algorithms, and aspiring to become an AI/ML Engineer.

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## ⚡ Features & Content

- **Personal Identity**: Dedicated portfolio for Shivendra Pandey showcasing genuine academic milestones, Python & DSA learning, and AI/ML engineering goals.
- **Hero Section**: Heading `"Hi, I'm Shivendra Pandey."`, availability badge, verified social links, and interactive Python/DSA terminal widget.
- **About Me**: Authentic biography detailing education at GL Bajaj ITM, Greater Noida, and core principles (*Strengthening Programming Fundamentals*, *Technology for Practical Solutions*, *Continuous Learning Toward AI/ML*).
- **Accurate Technical Skills**: Honest presentation without arbitrary percentages or progress bars:
  - Python (Currently practicing)
  - Data Structures and Algorithms (Practicing with Python)
  - Artificial Intelligence (Area of interest)
  - Machine Learning (Career learning goal)
  - Git & GitHub, VS Code
- **Featured Projects**:
  1. **Safe Tour OS** — Tourist safety and emergency assistance system concept with SOS and location workflow.
  2. **Personal AI Assistant** — Conversational assistant concept for queries and basic PC application task assistance.
  3. **Small Python Games** — Programming practice projects (Tic-Tac-Toe, Guessing Game, Snake Game).
- **Education Section**: B.Tech at GL Bajaj Institute of Technology and Management, Greater Noida (Second Year).
- **Contact & Social Links**: Working `mailto:shivendrapandey115@gmail.com`, GitHub (`shivendrapandey115-create`), and LinkedIn.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm.cmd install

# 2. Start local development server
npm.cmd run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📸 Adding Your Profile Photograph & Resume

### 1. Profile Photograph
When you are ready to add your profile photo:
1. Copy your photo to the `public/` directory (e.g., name it `public/profile.jpg`).
2. In [`src/data/portfolio.ts`](src/data/portfolio.ts), update `personal.avatarUrl`:
   ```typescript
   avatarUrl: "/profile.jpg",
   ```

### 2. Resume
When you have your resume PDF ready:
1. Copy your resume file into `public/` (e.g., `public/Shivendra_Pandey_Resume.pdf`).
2. In [`src/data/portfolio.ts`](src/data/portfolio.ts), set:
   ```typescript
   resumeUrl: "/Shivendra_Pandey_Resume.pdf",
   ```
   The resume button will automatically activate in the Hero section.

---

## 🏗️ Production Build

```bash
npm.cmd run build
```

Generates an optimized, type-checked production bundle in `dist/`.
