const firstArgu = parseInt(process.argv[2])

if (isNaN(firstArgu)) {
    console.log("Missing number of occurrences")
} else {
    for (let i = 0; i < firstArgu; i++) {
        console.log("C is fun")
    }
}

