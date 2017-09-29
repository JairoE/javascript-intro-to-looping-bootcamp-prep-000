function forLoop(ar) {
  for (var i = 0; i<25; i++) {
    if (i===1) {ar.push("I am 1 strange loop.")}
    else {
      ar.push(`I am ${i} strange loops.`)
    }
  }
  return ar
}

function whileLoop(num){

  while (num >0){
    console.log(num)
    num = num - 1
  }
  return 'done'
}

function maybeTrue(){
  return Math.random() >= 0.5
}

function doWhileLoop(ar){
  do {console.log('erasing')
} while (maybeTrue() && ar.length >0) {
    ar.shift(1)
  }
  return ar
}
