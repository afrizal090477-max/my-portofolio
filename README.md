# Personal Portfolio Website - Afrizal Yakub

A highly optimized, responsive, and pixel-perfect personal portfolio website built with modern front-end technologies. This project focuses on high performance, clean reusable architecture, and seamless user experiences across all screen dimensions.

## 🌐 Live Demo
See the live website here: [my-portofolio-seven-theta.vercel.app](https://my-portofolio-seven-theta.vercel.app/)

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js (App Router)
- **Styling & Responsive:** Tailwind CSS
- **Typography:** Poppins (Google Fonts)
- **Icons:** Custom SVG Assets & Optimization via Next.js `Image` component
- **Deployment & Hosting:** Vercel

---

## ✨ Features & Optimizations Included

- **Pixel-Perfect Alignment:** Built strictly according to Figma layout specifications down to font sizes, line heights, and padding parameters.
- **Dynamic CSS Sizing Engine:** Utilizes pure Tailwind utility primitives (`hidden` vs `min-[1200px]:grid`) to control client-side layouts without invoking cascading JavaScript re-renders.
- **Robust Hydration System:** Resolves React SSR mismatch issues by ensuring identical HTML structure matching between server builds and client hydration nodes.
- **Responsive Dynamic Pagination:** Custom layout configurations that auto-adapt pagination indices dynamically (`6 items per page` for desktop viewports, `3 items per page` for mobile screen sizes).

---

## 🚀 Getting Started Locally

First, clone the repository and install the dependencies:

```bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/my-portofolio.git](https://github.com/YOUR_GITHUB_USERNAME/my-portofolio.git)
cd my-portofolio
npm install
npm run dev