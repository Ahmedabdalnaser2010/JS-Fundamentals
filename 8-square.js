const firstArgu = parseInt(process.argv[2])

if (isNaN(firstArgu)) {
    console.log("Missing size")
} else {
    for (let i = 0; i < firstArgu; i++) {
        console.log("X".repeat(firstArgu))
    }
}

