// onclick event for the button
function getData() {
    console.log("button clicked");
    fetch('http://localhost:8080/yt/ai?q=' + "Trignometry")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("output").innerHTML = data;
        }
        );
}

//  get the button element
var button = document.getElementById("button");
button.addEventListener("click", getData);