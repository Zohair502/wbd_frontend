const API_URL = "http://127.0.0.1:8080";
// OR use your deployed URL:
// const API_URL = "https://tariqmuh-rathi-webcom-git-webcom-project.2.rahtiapp.fi";

async function getRooms() {
  const res = await fetch(`${API_URL}/rooms`);
  const rooms = await res.json();

  console.log(rooms); // teacher style (keep this)

  const roomList = document.getElementById("room-list");

  rooms.forEach(room => {
    const li = document.createElement("li");
    li.textContent = `Room ${room.room_number} - ${room.room_type} - €${room.price}`;
    roomList.appendChild(li);
  });
}

getRooms();