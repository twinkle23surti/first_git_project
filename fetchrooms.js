// Define the mock API endpoint
const apiEndpoint = 'https://67691034cbf3d7cefd3973f0.mockapi.io/api/starhotel/rooms';

// Function to fetch rooms data
async function fetchRooms() {
  try {
    const response = await fetch(apiEndpoint, {
      method: 'GET', // Use GET method
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const roomsData = await response.json(); // Parse JSON data
    console.log('Fetched Rooms Data:', roomsData);

    // Example: Render data to the DOM (optional)
    const outputElement = document.getElementById('rooms-output');
    if (outputElement) {
      outputElement.innerHTML = roomsData
        .map(
          (room) =>
            `<div>
              <h3>Room Name: ${room.name}</h3>
              <p>Price: ${room.price}</p>
              <p>Description: ${room.hotelDescription}</p>
            </div>`
        )
        .join('');
    }
  } catch (error) {
    console.error('Error fetching rooms data:', error);
  }
}


// Call the fetchRooms function when needed (e.g., on page load)
 fetchRooms();
document.addEventListener('DOMContentLoaded', () => {
const btn=document.getElementById('rooms_data_btn');
if(btn){
btn.addEventListener("click",fetchRooms)
}
});


