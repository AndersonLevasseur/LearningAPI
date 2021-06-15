document.getElementById("clear").addEventListener("click", clear);
document.getElementById("async").addEventListener("click", async);
document.getElementById("sync").addEventListener("click", sync);

function clear() {
    document.getElementById("cell1").innerHTML = "not started";
    document.getElementById("cell2").innerHTML = "not started";
    document.getElementById("cell3").innerHTML = "not started";
    document.getElementById("cell4").innerHTML = "not started";
    console.clear();
}

function pending() {
    document.getElementById("cell1").innerHTML = "pending";
    document.getElementById("cell2").innerHTML = "pending";
    document.getElementById("cell3").innerHTML = "pending";
    document.getElementById("cell4").innerHTML = "pending";
}

function async() {
    pending();
    // make it able to run for number of jokes wanted?, would totally change html though
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single")
        .then(response => response.json())
        .then(json => json.joke)
        /*replace line below with html editing*/
        .then(data => {
            document.getElementById("cell1").innerHTML = `${data}`;
            return fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single")
        })
        .then(response => response.json())
        .then(json => json.joke)
        /*replace line below with html editing*/
        .then(data => {
            document.getElementById("cell2").innerHTML = `${data}`;
            return fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single")
        })
        .then(response => response.json())
        .then(json => json.joke)
        /*replace line below with html editing*/
        .then(data => {
            console.log(data);
            return fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single")
        })
        .then(response => response.json())
        .then(json => json.joke)
        /*replace line below with html editing*/
        .then(data => {
            console.log(data);
        })
        .catch(console.log("FAIL"));
}

let arr = [
    fetch("https://v2.jokeapi.dev/joke/Any?type=single"),
    fetch("https://v2.jokeapi.dev/joke/Any?type=single"),
]

function sync() {
    pending();
    Promise.all(arr)
        .then(response => {
            for (let i = 1; i < 5; i++) {
                response[i].json()
                    .then((data) => data.joke)
                    .then(data => {
                        document.getElementById(`cell${i}`).innerHTML = `${data}`;
                    })
            }
        })
        .catch(console.log("FAIL"));
}

/*
async

Fetch returns a promise with json inside?
then call next fetch and run display func

sync

call all fetchs using promise.all?
as complete call display func


display(location, joke, or pending) {

}

take main table id.data id and change to json.joke

looks fishy https://www.codemag.com/Article/1511031/CRUD-in-HTML-JavaScript-and-jQuery

https://stackoverflow.com/questions/27859976/how-to-dynamically-change-html-table-content-using-javascript

clear func
runs display for each loc and adds pending
*/