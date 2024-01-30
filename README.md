# healthy-life
Dedalus test task


Setup:

1. Init project
    ```bash
    npm init
    npm i http-server --save-dev
    ```

2. Add run script to package.json
    ```text
    {
    ...
      "scripts": {
        "start": "http-server -o .",
        ...
      },
    ...
    }
    ```

3. Run project
    ```bash
    npm start
    ```
   
4. Click event fix:
Add `; return false` after `onclick` function call in `index.html` file