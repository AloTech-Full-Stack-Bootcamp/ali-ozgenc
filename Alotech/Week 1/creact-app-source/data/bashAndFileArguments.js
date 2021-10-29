const bash = {
  INIT: `npm init -y && npm set-script dev "parcel ./src/html/index.html"`,
  PRRD: `npm install react react-dom && npm install -D parcel tailwindcss@latest postcss@latest autoprefixer@latest && npm install --save-dev @babel/core @babel/preset-env @babel/node babel && npx tailwindcss init --postcss`,
  CHILDS: `js,css,html`,
  FILEPERCHILDS: `app.js,tailwind.css,index.html`,
  DEV: `npm run dev`,
};

//bash script and folder name data

module.exports = bash;
