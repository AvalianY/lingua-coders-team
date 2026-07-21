<div align="center">

# English Excellence

### A responsive landing page for a modern online English school

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-222?logo=github)](https://avaliany.github.io/lingua-coders-team/)

[Deutsch](README.md) · [Українська](README.uk.md) · [English](README.en.md)

[Live Demo](https://avaliany.github.io/lingua-coders-team/) · [Repository](https://github.com/AvalianY/lingua-coders-team)

</div>

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Page Structure](#page-structure)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Available Scripts](#available-scripts)
- [Team Workflow](#team-workflow)
- [Deployment](#deployment)
- [Team](#team)

## About the Project

**English Excellence** is a team project focused on building a modern landing page for an online English school. The website presents the school's benefits, lesson plans, teachers, student reviews, and an application form for a trial lesson.

The project uses a component-oriented HTML structure. Each page section is stored in a separate partial file and injected into the main page during the Vite build process.

> Project status: active development.

## Features

- Responsive layout for mobile, tablet, and desktop screens
- Semantic HTML structure
- Mobile navigation menu
- Anchor navigation between page sections
- Lesson plan presentation
- Teachers section
- Student reviews
- Contact and application forms
- Optimized images for different pixel densities
- Automated build and deployment with GitHub Actions

## Page Structure

The landing page contains the following sections:

1. Header and navigation
2. Mobile menu
3. Hero section
4. About us
5. Our lessons
6. Application proposal
7. Our teachers
8. Application form
9. Reviews
10. Footer

## Technology Stack

- **HTML5** — semantic page structure
- **CSS3** — styling, responsive layout, and component presentation
- **JavaScript** — interactive behaviour
- **Vite** — development server and production build
- **vite-plugin-html-inject** — reusable HTML partial injection
- **vite-plugin-full-reload** — automatic reload during development
- **PostCSS** — media-query processing and sorting
- **Modern Normalize** — consistent browser rendering
- **Git and GitHub** — version control and team collaboration
- **GitHub Actions and GitHub Pages** — CI/CD and deployment

## Project Structure

```text
lingua-coders-team/
├── .github/
│   └── workflows/          # GitHub Actions workflows
├── assets/                 # Project assets
├── src/
│   ├── css/                # Global and component styles
│   ├── fonts/              # Local fonts
│   ├── img/                # Images and SVG sprites
│   ├── partials/           # HTML page components
│   ├── public/             # Static public files
│   ├── index.html          # Main HTML entry point
│   └── main.js             # JavaScript entry point
├── .editorconfig
├── .gitignore
├── .prettierrc.json
├── package.json
└── vite.config.js
```

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) LTS
- npm
- Git

### Local installation

```bash
git clone https://github.com/AvalianY/lingua-coders-team.git
cd lingua-coders-team
npm install
npm run dev
```

Vite will display the local development URL in the terminal. The default address is:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates an optimized production build in the `dist` directory.

```bash
npm run preview
```

Starts a local preview of the production build.

## Team Workflow

1. A separate GitHub Issue is created for every task.
2. Development is performed in a dedicated branch.
3. Changes are saved using clear commit messages.
4. A Pull Request to `main` is opened after the task is completed.
5. The code is reviewed before merging.
6. Direct changes to the protected `main` branch are avoided.
7. Merging into `main` automatically starts the deployment workflow.

Example of creating a feature branch:

```bash
git switch main
git pull origin main
git switch -c feature/section-name
```

## Deployment

The production build is generated with GitHub Actions and published through GitHub Pages.

The Vite base path is configured for this repository:

```json
"build": "vite build --base=/lingua-coders-team/"
```

Live version:

**https://avaliany.github.io/lingua-coders-team/**

## Team

The project is developed by the **Lingua Coders Team**.

Repository owner: [AvalianY](https://github.com/AvalianY)

---

<div align="center">

Developed as a team project for practical work with HTML, CSS, JavaScript, Git, and GitHub.

</div>
