1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 1000);
}).then((response) => {
  console.log(response);
});
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
new Promise((resolve, reject) => {
  reject(`That didn't work`);
}).catch((response) => {
  console.log(response);
});
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
new Promise((resolve, reject) => {
  reject("Rejected Promise!");
})
  .catch((response) => {
    console.log(response);
  })
  .finally((response) => {
    console.log("Promise Settled!");
  });
```

4. What will be the output of the code below.

```js
console.log("A");

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log("B"), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log("C"));

console.log("D");

// A
// D
// C
// B
```

5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js
function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved!");
    }, 1000);
  }).then((response) => {
    console.log(response);
  });
}
```

6. Do the following:

- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
new Promise((resolve, reject) => {
  resolve(21);
})
  .then((response) => {
    return response + 10;
  })
  .then((response) => {
    return response + 10;
  })
  .then((response) => {
    if (response > 100) {
      console.log("The value is greater than 100");
    } else {
      console.log(`The value is less than 100`);
    }
  })
  .catch((response) => {
    console.log(response);
  });
```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
let A = ['A'];
new Promise((resolve, reject)=>{
    resolve(A);
}).then((response)=>{
    return response.push('B');
}).then((response) =>{
    return Object.assign({}, A);
}).then((response)=>{
    console.log(response);
})
```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js
let first = new Promise((resolve, reject)=>{
    resolve(1);
}).then((response)=>{
    return response + 1;
}).then((response)=>{
    return response + 1;
}).then((response)=>{
    return response + 1;
}).then((response)=>{
    console.log(response);
});

```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
// Your code
```

10. Try to understand the difference between the problem 8 and 9. Write your observation.

11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js
// Your code
```
