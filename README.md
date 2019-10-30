# r365-calculator

Users are able to calculate basic additions with custom delimiters

## <strong>Key Features</strong>

---

- Users are able to add numbers that do not exceed 1000
- Users are able to instantiate 1 custom delimiter
- Users are able to instantiate a custom delimiter with any length
- Users are able to instantiate multiple custom delimiter with any length

## <strong>How to use</strong>

---

- Step 1.
  ```bash
      npm install
  ```
- Step 2.
  ```bash
      npm run build
      or
      npm run dev (to run in dev mode)
  ```
- Step 3. (skip this step if running in dev mode) Open index.html that is in the directory of: build/index.html
- Step 4.
  - Interact
    - Enter x amount of numbers to add, in a form of: (e.g) 2,4 (separated by commas)
    - Enter a custom delimiter of 1, in a form of: (e.g) //#\n2#5,6
    - Enter a custom delimiter of any length, in a form of: (e.g) //[***]\n2\*\*5,6
    - Enter multiple custom delimiters of any length, in a form of: (e.g) //[\$\$\$][#][@]\n2@,,,,,,,\n\n2\$\$\$
  - Testing
    ```bash
        npm run test
    ```

## <strong>Author</strong>

Gerret Kubota
