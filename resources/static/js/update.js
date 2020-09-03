document.addEventListener("DOMContentLoaded", function() {
    let urlParams;
    (window.onpopstate = function () {
        let match,
            pl     = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query  = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
    })();
    getData("/students/" + urlParams["id"]).then(data => UpdateData(data))
    //

})

function UpdateData(data) {
    const {id, name, course} = data;

    let idInput = document.createElement("input");
    idInput.value = id;
    idInput.type = "text";
    document.getElementById("id").appendChild(idInput);

    let nameInput = document.createElement("input");
    nameInput.value = name;
    nameInput.type = "text";
    document.getElementById("name").appendChild(nameInput);

    let courseInput = document.createElement("input");
    courseInput.value = course;
    courseInput.type = "text"
    document.getElementById("course").appendChild(courseInput);

    let updateButton = document.getElementById("update");
    let button = document.createElement("button");
    button.innerText = "Update";
    button.addEventListener("click", function() {
        let d = JSON.stringify({
            id: document.getElementById("id").firstChild.value,
            name: document.getElementById("name").firstChild.value,
            course: document.getElementById("course").firstChild.value
        });
        console.log(d);
        postData("students/updatestudent/", d)
            .then(window.location.replace("/student.html"))
    })
    document.getElementById("update").appendChild(button);
}

function getData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        //body: JSON.stringify(data), // must match 'Content-Type' header
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "user-agent": "Mozilla/4.0 MDN Example",
            "content-type": "application/json"
        },
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "same-origin", // no-cors, cors, *same-origin
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer" // *client, no-referrer
    }).then(response => response.json()); // parses response to JSON
}

function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: data, // must match 'Content-Type' header
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "user-agent": "Mozilla/4.0 MDN Example",
            "content-type": "application/json"
        },
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "same-origin", // no-cors, cors, *same-origin
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer" // *client, no-referrer
    }).then(response => response.json()); // parses response to JSON
}