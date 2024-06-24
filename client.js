console.log("Client connected to server."); // debug
const socket = io();
let roomUID = null;
let host = false; // should be server-sided
let canPlay = false; // should be server-sided


function createRoom() {
    host = true;
    socket.emit("createRoom");
}

function joinRoom() {
    roomUID = document.getElementById("roomUID").value; // Takes client text field input
    socket.emit("joinRoom", { roomUID: roomUID });
}

socket.on("roomCreated", (data) => {
    roomUID = data.roomUID;
    document.getElementById("roomUID").value = roomUID;
    document.getElementById("roomUID").readOnly = true;
    document.getElementById("roomUID").style.backgroundColor = "lightgray";
    document.getElementById("roomUID").style.color = "black";
    document.getElementById("createRoom").disabled = true;
    document.getElementById("joinRoom").disabled = true;
    console.log("Room created: " + roomUID); // debug:
});