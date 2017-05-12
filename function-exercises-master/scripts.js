function animalTester (userName){
  var argLength = arguments.length;
  var otherArgs = [];
  if(argLength > 1) {
    for (var i=1; i<argLength; i++) {
        otherArgs.push(arguments[i]);
    }
  }
  return {
    'userName': userName,
    'otherArgs': otherArgs
  };
}
