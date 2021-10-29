const files = {
  js: `import React from "react";
import ReactDOM from "react-dom";
import "../css/tailwind.css";
  
function Hello() {
  return (
    <div className="text-9xl flex justify-center items-center h-screen text-blue-600 bg-gray-200">
      <h1>Hello World!</h1>
    </div>
  );
}
  
ReactDOM.render(<Hello />, document.getElementById("root"));
  `,
  css: `@tailwind base;\n@tailwind components;\n@tailwind utilities;`,
  html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="../js/app.js" type="module"></script>
  </body>
</html>
    `,
  readme: `You can start the project by typing <b>npm run dev</b><br>
  Created project
  
  - parcel
  - tailwind
  - babel
  - react
  
  includes
  
  The src folder contains as simple a file structure as possible
  
  - css
  - html
  - js

  I also suggest you look into <b>tailwindcss purging</b>.
  
  --- 
  `,
};

//  data of files of child folders

module.exports = files;
