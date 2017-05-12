var noiseArray = [1, "hella", "high"];
noiseArray.unshift("quack");
noiseArray.push("fart");
noiseArray[3] = "sativa";
console.log(noiseArray.length); //5

console.log(noiseArray); //["quack", 1, "hella", "sativa", "fart"]
