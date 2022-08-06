///////////// Syncronas process ////////
// const fs = require("fs");
// let text = fs.readFileSync("./files/input.txt", "utf-8");
// console.log(text);

// text = `Copied Text: ${text}`;
// fs.writeFileSync("./files/Copied.txt", text);

/////////////Asyncronas process ////////

// const fs = require("fs");
// fs.readFile("./files/input.txt", "utf-8", (error, text) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(text);
//     fs.writeFile("./files/output2.txt", text, "utf-8", (error) => {
//       if (error) {
//         console.log(error);
//       }
//     });
//   }
// });

/// EVENT MOPDULE ///

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("event1", () => {
//   console.log("Event 1 Callad");
// });
// emitter.on("event2", (e) => {
//   console.log("Event 2 Callad", e); //// eta call hobe
// });

// emitter.emit("event2", { name: "karim" });

/////////// transfer object one file to another //////

const MyEvent = require("./myEvant");

const myEvant = new MyEvent();

myEvant.on("event1", () => {
  console.log("Event 1 Triggerred");
});

myEvant.function1();
