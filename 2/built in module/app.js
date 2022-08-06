///////////// Syncronas process ////////
// const fs = require("fs");
// let text = fs.readFileSync("./files/input.txt", "utf-8");
// console.log(text);

// text = `Copied Text: ${text}`;
// fs.writeFileSync("./files/Copied.txt", text);

/////////////Asyncronas process ////////

const fs = require("fs");
fs.readFile("./files/input.txt", "utf-8", (error, text) => {
  if (error) {
    console.log(error);
  } else {
    console.log(text);
    fs.writeFile("./files/output2.txt", text, "utf-8", (error) => {
      if (error) {
        console.log(error);
      }
    });
  }
});
