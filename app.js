// I don't advise running all of this at the same time, it'd be a mess. Only run the section that is being... 
// ...observed, and comment out the rest.

// Timing Out 1-3
function returnText(string) {
    return new Promise((resolve, reject) => {

        console.log(string1);
        setTimeout(() => {
            resolve(`${string2}`);
        }, 2000);
    });
}

const string1 = "Hello there."
const string2 = "General Kenobi."

async function messenger() {
    let message = await returnText(string1);
    console.log(string1);
    console.log(string2);
}

messenger();

// Timing Out 4

function getWords() {
    console.log('Now');
    setTimeout(() => {
        console.log(`this`);
        setTimeout(() => {
            console.log(`is`);
            setTimeout(() => {
                console.log(`pod-racing.`)
            }, 1000);
        }, 2000);
    }, 3000);
}

getWords();

// Callbacks and Recursion

function done() {
    console.log("Job's done!");
}

function countdown(num, callback) {
    
    if(num > 0){
        setTimeout(() => {
            console.log(num);
            countdown(num - 1, callback);
        }, 1000);
    } else {
        console.log(callback);
    }
}

countdown(5, done);

// Promises Promises ;)

let lunchTime = true;
function orderMeSomeFood() {
    return new Promise((resolve, reject) => {
        if(lunchTime === true) {
            let myOrder = {
                lunch: "pizza",
                drink: "cold brew"
            }
            resolve(myOrder);
        } else {
            let error = new Error('Going back to sleep.')
            reject(error);
        }
    })
}

orderMeSomeFood()
.then((response) => {
    console.log(response);
})
.catch((response) => {
    console.log(response);
})