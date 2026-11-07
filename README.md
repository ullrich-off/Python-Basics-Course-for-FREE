# Ten Minute Python

Learn the basics of Python in 10 minutes a day. **Ten Minute Python** is a free, Codecademy-style web course for complete beginners. You read a short idea, type a little code, and run it right in your browser. No installs, no sign-up.

**Try it live:** [https://ullrich-off.github.io/Python-Basics-Course-for-FREE/](https://ullrich-off.github.io/Python-Basics-Course-for-FREE/)

## What you get
- **10 courses, 38 lessons, about 160 small steps**, from your first `print()` to a final exam:
  1. Meet Python
  2. Variables
  3. Working with Text
  4. Making Decisions
  5. Lists
  6. Loops
  7. Functions
  8. Dictionaries
  9. Bug Squash (reading errors, `try` / `except`)
  10. Mini Projects (a guessing game, a quiz, a calculator, and the final exam)
- **A real code editor** with colours, a Run button, an output box, and an `input()` box that works like a real program.
- **Friendly error messages.** When your code breaks, you get a plain-English explanation and the faulty line is marked.
- **Automatic checks** for every exercise, with hints, and a "show the answer" button after two tries.
- **A daily 10-minute goal and a streak**, plus XP, levels, badges and a certificate when you finish.
- **A daily plan:** a 3-question warm-up, a daily challenge, a Playground to experiment in, a cheat sheet, and a glossary.
- Works in light and dark mode.

## Run it yourself
It is plain HTML and JavaScript, so there is nothing to build.

1. Download or clone this repository.
2. Open `index.html` in your browser.

For the most reliable results, serve the folder instead:

```
python -m http.server 8000
```

then open http://localhost:8000. You need an internet connection, because the page loads its Python engine (Skulpt) from the jsDelivr CDN. The fonts are bundled in the `fonts/` folder, so visitors' browsers do not contact Google.

## Put it online with GitHub Pages
1. Create a public repository and upload these files.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, pick **main** and **/ (root)**, and save.
4. After a minute or two your course is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## How it works
- **Python runs in the browser** with [Skulpt](https://skulpt.org/), a Python interpreter written in JavaScript. Skulpt is very good for beginner Python, but it is not identical to the official CPython, so some error messages differ slightly.
- Lessons, exercises and tests live in `courses-a.js`, `courses-b.js` and `courses-c.js`. The app itself (editor, checker, streaks, screens) is in `index.html`.
- **Your progress is saved only in your own browser** (localStorage). Nothing is sent to a server. Use **Profile → Back up your progress** to keep a copy.

## Known limits
- Tested on desktop browsers. Phone layouts use responsive CSS but have not been tested on real devices.
- Needs an internet connection (Skulpt loads from the jsDelivr CDN).
- Skulpt supports most beginner Python, but not everything in real Python.

## Contributing
Found a typo, a confusing explanation, or a bug? Please open an issue or a pull request. New lessons are easy to add: copy an existing lesson in one of the `courses-*.js` files and change the text, the starter code, the hidden tests, and the solution.

## Credits
- [Skulpt](https://skulpt.org/) runs the Python code in the browser.
- Fonts: Fredoka, Nunito and Fira Code (latin and latin-ext), self-hosted in `fonts/`. They are licensed under the [SIL Open Font License 1.1](https://openfontlicense.org/).

## License
Add a `LICENSE` file before sharing (GitHub can create an MIT license for you when you set up the repository). MIT means anyone may use, copy and change the course, as long as they keep your copyright notice.
