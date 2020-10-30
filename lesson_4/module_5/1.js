function makeMultipleLister(number) {
  return function() {
    for (let i = 1; i < 100; i += 1) {
      if (i % number === 0) {
        console.log(i);
      }
    }
  };
}

let lister = makeMultipleLister(13);
lister();
