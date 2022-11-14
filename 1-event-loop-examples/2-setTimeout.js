// started operating system process
console.log('first');
setTimeout(() => {
  console.log('second');
}, 0)
console.log('third');
// completed and exited operating system process

// THIS PRINTS FIRST THEN THIRD AND THEN SECOND, EVEN IF SETTIMEOUT IT SET TO 0 SECONDS. THIS BC IT IS A CALLBACK AND ASYNC, SO WILL EXECUTE AT THE END OF CODE  