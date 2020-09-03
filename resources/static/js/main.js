document.addEventListener("DOMContentLoaded", function () {
    getData("/students/","").then(data => updateData(data))
})

function updateData(data) {
    let students = document.getElementById("students");
    students.innerHTML = "<tr>\n" +
        "            <th>ID</th>\n" +
        "            <th>Name</th>\n" +
        "            <th>Course</th>\n" +
        "            <th>DELETE</th>\n" +
        "            <th>UPDATE</th>\n" +
        "        </tr>";
    data.forEach(function (i, e) {

        let href = "/students/" + i.id;

        let row = document.createElement("tr");
        let idtd = document.createElement("td");
        let studentAnchorid = document.createElement("a");
        studentAnchorid.href = href;
        studentAnchorid.innerText = i.id;
        idtd.appendChild(studentAnchorid);
        //idtd.innerText = i.id;
        let nametd = document.createElement("td");
        let studentAnchorname = document.createElement("a");
        studentAnchorname.href = href;
        studentAnchorname.innerText = i.name;
        nametd.appendChild(studentAnchorname);
        //nametd.innerText = i.name;
        let coursetd = document.createElement("td");
        let studentAnchorcourse = document.createElement("a");
        studentAnchorcourse.href = href;
        studentAnchorcourse.innerText = i.course;
        coursetd.appendChild(studentAnchorcourse);
        //coursetd.innerText = i.course;
        let deletebutton = document.createElement("td");
        let studentDeletebutton = document.createElement("button");
        studentDeletebutton.addEventListener("click", function(){
            getData("/students/deletestudent/" + i.id, "").then(window.location.reload());
        })
        studentDeletebutton.innerText = "delete";
        deletebutton.appendChild(studentDeletebutton);
        let updatebutton = document.createElement("td");
        let studentUpdatebutton = document.createElement("button");
        studentUpdatebutton.addEventListener("click", function(){
            window.location.replace("/UpdateStudent.html?id=" + i.id);
        })
        studentUpdatebutton.innerText = "update";
        updatebutton.appendChild(studentUpdatebutton);

        row.appendChild(idtd);
        row.appendChild(nametd);
        row.appendChild(coursetd);
        row.appendChild(deletebutton);
        row.appendChild(updatebutton);
        //studentAnchor.appendChild(row)
        students.appendChild(row);

    })


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