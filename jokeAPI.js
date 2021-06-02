function async(){
    fetch("https://v2.jokeapi.dev/joke/pun").then()
}

function sync() {
    Promise.all(fetch)
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