const {
  mkdirSync,
  writeFileSync,
  existsSync,
  rmSync,
  chmodSync,
} = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const fileContent = require("./data/data");
const bash = require("./data/bashAndFileArguments");

/* To find the desktop path of the operating system of interest */
const projectPath = path.join(os.homedir(), "Desktop", "simple-react-app");

/* 
A function that returns a path to create files inside the main folder is by default bash.sh because most operations take place with that file FUNCTION NAME IS NOT A SELF-DESCRIPTION NAME IT WILL BE REPLACED */
function createFile(filePath, filename = "bash.sh") {
  return path.join(filePath, filename);
}

function creact() {
  /* INIT AND PRRD are bash script data,  
CHILDS and FILEPERCHILDS are the folders and files that make up the infrastructure of the src folder. */
  const { INIT, PRRD, CHILDS, FILEPERCHILDS } = bash;
  /* INIT AND PRRD are bash script data,  
CHILDS and FILEPERCHILDS are the folders and files that make up the infrastructure of the src folder. */

  /* Child folders and files of those folders  */
  const srcChilds = CHILDS.split(",");
  const srcChildFiles = FILEPERCHILDS.split(",");
  /* Child folders and files of those folders  */

  /* The reason the for loop exists is to add a number to the name of the parent folder until there is no conflict if there is another folder with the same name */
  for (let i = 1; i < i + 1; i++) {
    const finalPath = `${projectPath}-${i}`;
    //If the folder does not exist, it starts processing.
    const isExists = existsSync(finalPath);

    if (!isExists) {
      console.log("Generating file structure");
      //create src folder
      mkdirSync(path.join(finalPath, "src"), { recursive: true });

      /* create html css and js folders in src and add related files to each */
      srcChilds.forEach((val, index) => {
        mkdirSync(path.join(finalPath, "src", val));

        writeFileSync(
          path.join(finalPath, "src", val, srcChildFiles[index]),
          fileContent[val]
        );
      });
      /* create html css and js folders in src and add related files to each */

      /* Create readme containing usage information of file in main folder */
      writeFileSync(createFile(finalPath, "README.md"), fileContent["readme"]);
      /* Create readme containing usage information of file in main folder */

      /* create bash script change permission and execute bash script */
      writeFileSync(createFile(finalPath), INIT);
      chmodSync(createFile(finalPath), 0o700);
      execSync(`sh ${createFile(finalPath)}`, {
        cwd: finalPath,
      });
      /* create bash script change permission and execute bash script */

      console.log(
        "Dependencies may take a long time to install please wait..."
      );

      /* create bash script change permission and execute bash script */
      writeFileSync(createFile(finalPath), PRRD);
      chmodSync(createFile(finalPath), 0o700);
      execSync(`sh ${createFile(finalPath)}`, {
        cwd: finalPath,
      });
      /* create bash script change permission and execute bash script */

      /* create .gitignore file */
      writeFileSync(
        createFile(finalPath, ".gitignore"),
        ".parcel-cache/\ndist/\nnode_modules/"
      );
      /* create .gitignore file */

      /* remove bash script from main react folder */
      rmSync(createFile(finalPath), { force: true });
      /* remove bash script from main react folder */

      /* Delayed settimeout for a more satisfying logging experience */
      setTimeout(() => {
        console.log("Process complete");
      }, 2000);
      /* Delayed settimeout for a more satisfying logging experience */

      return;
    }
  }
}

module.exports = creact;
