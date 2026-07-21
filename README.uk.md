<div align="center">

# English Excellence

### Адаптивний лендинг для сучасної онлайн-школи англійської мови

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/uk/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/uk/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://developer.mozilla.org/uk/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-222?logo=github)](https://avaliany.github.io/lingua-coders-team/)

[Deutsch](README.md) · [Українська](README.uk.md) · [English](README.en.md)

[Жива сторінка](https://avaliany.github.io/lingua-coders-team/) · [Репозиторій](https://github.com/AvalianY/lingua-coders-team)

</div>

## Зміст

- [Про проєкт](#про-проєкт)
- [Функціональність](#функціональність)
- [Структура сторінки](#структура-сторінки)
- [Технології](#технології)
- [Структура проєкту](#структура-проєкту)
- [Встановлення та запуск](#встановлення-та-запуск)
- [Доступні команди](#доступні-команди)
- [Командний процес](#командний-процес)
- [Деплой](#деплой)
- [Команда](#команда)

## Про проєкт

**English Excellence** — командний проєкт зі створення сучасного лендингу для онлайн-школи англійської мови. Сайт презентує переваги школи, навчальні пропозиції, викладачів, відгуки та форму запису на пробне заняття.

Проєкт побудований на компонентному підході до HTML: кожна секція сторінки розміщується в окремому partial-файлі та підключається до головної сторінки під час збирання Vite.

## Функціональність

- Адаптивне відображення на мобільних пристроях, планшетах і десктопах
- Семантична HTML-розмітка
- Мобільне меню
- Навігація між секціями за якірними посиланнями
- Представлення навчальних пакетів
- Секція з викладачами
- Відгуки студентів
- Контактна форма та форма заявки
- Оптимізовані зображення для різної щільності екранів
- Автоматичне збирання та розгортання через GitHub Actions

## Структура сторінки

Лендинг складається з таких секцій:

1. Header і навігація
2. Мобільне меню
3. Hero-секція
4. Про нас
5. Наші уроки
6. Пропозиція залишити заявку
7. Наші викладачі
8. Форма заявки
9. Відгуки
10. Footer

## Технології

- **HTML5** — семантична структура сторінки
- **CSS3** — стилізація, адаптивна верстка та компонування
- **JavaScript** — інтерактивні елементи
- **Vite** — локальна розробка та production-збірка
- **vite-plugin-html-inject** — підключення повторно використовуваних HTML-partials
- **vite-plugin-full-reload** — автоматичне оновлення сторінки під час розробки
- **PostCSS** — обробка та сортування медіазапитів
- **Modern Normalize** — узгоджене відображення в різних браузерах
- **Git і GitHub** — контроль версій та командна робота
- **GitHub Actions і GitHub Pages** — CI/CD та публікація

## Структура проєкту

```text
lingua-coders-team/
├── .github/
│   └── workflows/          # GitHub Actions workflows
├── assets/                 # Ресурси проєкту
├── src/
│   ├── css/                # Глобальні та компонентні стилі
│   ├── fonts/              # Локальні шрифти
│   ├── img/                # Зображення та SVG-спрайти
│   ├── partials/           # HTML-компоненти сторінки
│   ├── public/             # Статичні публічні файли
│   ├── index.html          # Головна HTML-сторінка
│   └── main.js             # Точка входу JavaScript
├── .editorconfig
├── .gitignore
├── .prettierrc.json
├── package.json
└── vite.config.js
```

## Встановлення та запуск

### Передумови

- [Node.js](https://nodejs.org/) LTS
- npm
- Git

### Локальне встановлення

```bash
git clone https://github.com/AvalianY/lingua-coders-team.git
cd lingua-coders-team
npm install
npm run dev
```

Після запуску Vite покаже локальну адресу в терміналі. Типова адреса:

```text
http://localhost:5173
```

## Доступні команди

```bash
npm run dev
```

Запускає локальний сервер розробки.

```bash
npm run build
```

Створює оптимізовану production-версію в папці `dist`.

```bash
npm run preview
```

Запускає локальний перегляд production-збірки.

## Командний процес

1. Для кожного завдання створюється окремий GitHub Issue.
2. Розробка виконується в окремій гілці.
3. Зміни зберігаються зрозумілими комітами.
4. Після завершення відкривається Pull Request до `main`.
5. Код проходить перевірку перед злиттям.
6. Прямі зміни в захищеній гілці `main` не використовуються.
7. Після merge у `main` автоматично запускається деплой.

Приклад створення робочої гілки:

```bash
git switch main
git pull origin main
git switch -c feature/section-name
```

## Деплой

Production-збірка створюється через GitHub Actions і публікується за допомогою GitHub Pages.

Базовий шлях Vite налаштовано для цього репозиторію:

```json
"build": "vite build --base=/lingua-coders-team/"
```

Жива сторінка:

**https://avaliany.github.io/lingua-coders-team/**

## Команда

Проєкт розробляє команда **Lingua Coders Team**.

Власник репозиторію: [AvalianY](https://github.com/AvalianY)

---

<div align="center">

Розроблено як командний проєкт для практичного застосування HTML, CSS, Git і GitHub.

</div>
