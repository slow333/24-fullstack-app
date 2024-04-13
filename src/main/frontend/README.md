# Getting Started with Create React App
## tailwind and styled-components 사용 법
```angular2html
tailwind 설정

npm install -D tailwindcss
npx tailwindcss init

tailwind.config.js

content: ["./src/**/*.{html,js}"],

src/input.css

@tailwind base;
@tailwind components;
@tailwind utilities;
Start the Tailwind CLI build process
Run the CLI tool to scan your template files for classes and build your CSS.

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```