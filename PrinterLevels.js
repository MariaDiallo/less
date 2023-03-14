function inkLevels(inks) {
    let min = inks.cyan
    for (let key in inks) {
        if (min > inks[key]) {
            min = inks[key];
            
        }
    }
    return(min)
}
console.log(inkLevels({
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
    }))