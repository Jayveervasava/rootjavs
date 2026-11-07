# rootjavs — Learn computers by doing

A professional learning platform for computer basics, MS Office and (coming soon) cyber security.
Every course has lesson notes with PDF download, a hands-on browser lab, a timed theory exam,
a practical exam and a verifiable certificate.

## How to open
1. Unzip the folder.
2. Double-click **index.html** (Chrome or Edge recommended).
   No installation or server needed. Fonts load from Google Fonts when online.

## Pages (23)
| Page | File |
|---|---|
| Home | index.html |
| All courses (filter + search) | courses.html |
| Course detail (curriculum, progress, exams) | course.html?c=COURSE_ID |
| Lesson (notes, PDF, quiz, practice) | lesson.html?c=COURSE_ID&l=0 |
| Lab (practice / practical exam) | lab.html?c=COURSE_ID&mode=practice or exam |
| Final theory exam / mock test | exam.html?c=COURSE_ID (add &mock=1 for mock) |
| All labs | labs.html |
| Typing speed test | typing-test.html |
| Mock tests | mock-tests.html |
| Career roadmaps | roadmaps.html |
| Cheat sheets (PDF downloads) | cheatsheets.html |
| Interview questions | interview.html |
| Glossary | glossary.html |
| Dashboard | dashboard.html |
| Certificates | certificate.html |
| Verify certificate | verify.html |
| Log in / Sign up | login.html |
| About, Contact, FAQ, Privacy, Terms, 404 | about.html, contact.html, faq.html, privacy.html, terms.html, 404.html |

## Courses (7 live, 33 lessons, 165 quiz questions)
1. Computer Fundamentals — Laptop Anatomy Lab
2. File Management Essentials — File Explorer Simulator
3. Typing Mastery — Typing Trainer (colour-coded keyboard, live WPM)
4. Keyboard Shortcuts for Productivity — Shortcut Trainer
5. MS Word: Basic to Advanced — Document Editor (downloads a Word file)
6. MS Excel: Basic to Advanced — Spreadsheet Lab with a formula engine (downloads .xlsx)
7. MS PowerPoint: Basic to Advanced — Slide Builder (downloads .pptx)

## Learning flow
Lesson notes (+PDF) → lesson quiz (3/5 to pass) → after all lessons: final theory exam
(10 questions, 15 min, 60% to pass) + practical exam in the lab → certificate (PNG/PDF).

## Certificates
Each certificate ID (e.g. `RJ-XL-261011-3F2A9`) encodes the course, the date and a checksum of
the holder's name, so verify.html can confirm it with just the ID and the name.

## Data storage
This version stores accounts and progress in the browser (localStorage). For a public launch,
connect Firebase (Auth + Firestore) to sync progress across devices.

## Deploy online (free)
- **GitHub Pages:** push this folder to a repo → Settings → Pages → deploy from main branch.
- **Netlify:** drag and drop the folder on app.netlify.com/drop.
- Connect a domain such as rootjavs.in in the hosting settings.

## Tech
HTML, CSS and vanilla JavaScript. Libraries (bundled in assets/vendor, work offline):
jsPDF (PDFs), SheetJS (Excel export), PptxGenJS (PowerPoint export).

## Structure
All files sit in the root folder: HTML pages, `style.css` (design system), `data.js` (courses),
`content.js` (resources), `app.js` (core), `labs.js` (lab engines), `pages.js` (page renderers)
and the bundled libraries `jspdf.umd.min.js`, `xlsx.full.min.js`, `pptxgen.bundle.js`.

© rootjavs · Founded by Jayveer Vasava · Vadodara, Gujarat

## Course catalogue (v2, 2026-11)
- `content/catalog.json` is the master list: every course with its number, track (category), status and, when written, a short description, level, hours and "what you will learn" points.
- Full courses live in `content/courses/<track-folder>/<id>.json` (folders: cyber-security, ai, cloud, development, career, basics, emerging-tech).
- **To make a course live:** check the file with `python3 tools/validate.py <file>`, put it in its folder, and set `"status": "ready"` for it in `catalog.json`. Nothing else is needed.
- Courses that are not ready open an overview page (syllabus) with "Lessons are being added".
- The 7 original courses in `data.js` are kept unchanged. If a ready catalogue course has the same id as an old one, the new one opens as `<id>-new` and both are shown.
- `course-loader.js` reads the catalogue and course files, `mission-lab.js` runs the labs and practical exams of the new courses.
- The site must be served over http(s) (GitHub Pages does this). Opening `index.html` by double-click still shows the old courses, but not the catalogue.
- The previous home page is still available at `index.html?classic=1`.
