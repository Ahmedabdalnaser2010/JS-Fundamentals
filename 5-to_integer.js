const firstArg = parseInt(process.argv[2]);
console.log(isNaN(firstArg) ? "Not a number" : `My number: ${firstArg}`);