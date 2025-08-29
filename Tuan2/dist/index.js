"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// A. Basics with Promise
// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const helloAsync = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
function cau1() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("=====Cau 1=====");
        console.log(yield helloAsync);
    });
}
// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
function returnTen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
function cau2() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("=====Cau 2=====");
        console.log(yield returnTen());
    });
}
// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
function rejectPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}
function cau3() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("=====Cau 3=====");
        try {
            yield rejectPromise();
        }
        catch (err) {
            console.error(err.message);
        }
    });
}
// 4. Use .then() and .catch() to handle a Promise that returns a random number.
function randomNumber() {
    return new Promise((resolve, reject) => {
        const num = Math.random();
        console.log("Generated number:", num);
        if (num > 0.5) {
            resolve(num);
        }
        else {
            reject(new Error("The Generated number is less than 0.5"));
        }
    });
}
function cau4() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("=====Cau 4=====");
        try {
            const num = yield randomNumber();
            console.log("Random number:", num, "is greater than 0.5");
        }
        catch (err) {
            console.error(err.message);
        }
    });
}
// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.
function simulateTask(name, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name, result: "done" });
        }, time);
    });
}
function cau5() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("=====Cau 5=====");
        const result = yield simulateTask("Task 1", 1000);
        console.log(`${result.name} ${result.result}`);
    });
}
// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
function runParallelTasks() {
    const task1 = simulateTask("Task 1", 1000).then((res) => {
        console.log(res.name + " " + res.result);
        return res;
    });
    const task2 = simulateTask("Task 2", 2000).then((res) => {
        console.log(res.name + " " + res.result);
        return res;
    });
    const task3 = simulateTask("Task 3", 1500).then((res) => {
        console.log(res.name + " " + res.result);
        return res;
    });
    return Promise.all([task1, task2, task3]);
}
function cau6() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("=====Cau 6=====");
        const results = yield runParallelTasks();
        console.log("All tasks completed:", results.map(r => r.name).join(", "));
    });
}
// 7. Use Promise.race() to return whichever Promise resolves first.
function runRaceTasks() {
    const task1 = simulateTask("Task 1", 1000).then((res) => {
        console.log(res.name + ": " + res.result);
        return res;
    });
    const task2 = simulateTask("Task 2", 1500).then((res) => {
        console.log(res.name + ": " + res.result);
        return res;
    });
    const task3 = simulateTask("Task 3", 2000).then((res) => {
        console.log(res.name + ": " + res.result);
        return res;
    });
    return Promise.race([task1, task2, task3]);
}
function cau7() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("=====Cau 7=====");
        const result = yield runRaceTasks();
        console.log("First task completed:", result.name);
    });
}
// 8. Create a Promise chain: square the number 2, then double it, then add 5.
// 9. Write a Promise that reads an array after 1 second and filters even numbers.
// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
// B. Async/Await
// 11. Convert Exercise 1 into async/await.
// 12. Write an async function that calls simulateTask(2000) and logs the result.
// 13. Handle errors using try/catch with async/await.
// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
// 15. Call multiple async functions sequentially using await.
// 16. Call multiple async functions in parallel using Promise.all().
// 17. Use for await...of to iterate over an array of Promises.
// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user
// object after 1 second).
// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
// C. Fetch API & Simulated I/O
// 21. Use fetch to get data from a public API (e.g., https://jsonplaceholder.typicode.com/todos/1).
// 22. Call the API multiple times and log the results.
// 23. Write an async function that fetches a list of todos and filters out those that are not completed.
// 24. Write an async function postData() that sends a POST request to a test API.
// 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.
// 26. Use async/await with setTimeout to simulate a 5-second wait.
// 27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.
// 28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).
// 29. Write an async function queueProcess() that processes tasks sequentially in a queue.
// 30. Use async/await + Promise.allSettled() to handle multiple API calls and display their success/failure status.
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield cau1();
        yield cau2();
        yield cau3();
        yield cau4();
        yield cau5();
        yield cau6();
        yield cau7();
    });
}
main();
