const firstArgu = parseInt(process.argv[2]);

console.log(isNaN(firstArgu) ? "Not a number" : `My Number:<${firstArgu}>`);