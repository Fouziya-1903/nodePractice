import { setTimeout } from 'timers/promises';

console.log("The Application has been started");

(async function mockDatabaseQuery(){
    console.log("First function: Fetching data from the database");
    await setTimeout(3000);
    console.log("The First function result of database");
    console.log("First function is executed");
})();

(async function secondFunction(){
    console.log("Second function is initialised");
    await setTimeout(6000);
    console.log("the second function result");
    console.log("The second function executed");
})();

(async function thirdFunction(){
    console.log("Third function is initialised");
    await setTimeout(2000);
    console.log("the Third function result");
    console.log("The Third function executed");
})();