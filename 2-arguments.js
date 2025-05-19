// 2-arguments-browser.js
const args = prompt("Enter arguments separated by space:").split(" ");

if (args.length === 0 || args[0] === "") {
    console.log("No argument");
} else if (args.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}