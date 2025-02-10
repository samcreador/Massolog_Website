function handleRoomChange() {
    var roomSelect = document.getElementById('wRoom');
    var otherRoomInput = document.getElementById('otherRoomInput');
    
    // If the "Somewhere else" option is selected
    if (roomSelect.value === 'aElse') {
        otherRoomInput.style.display = 'block';  // Show the input field
    } else {
        otherRoomInput.style.display = 'none';  // Hide the input field
    }
}