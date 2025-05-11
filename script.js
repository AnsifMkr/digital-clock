function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDate();
    let month = now.getMonth();  // Months are 0-based
    let year = now.getFullYear();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    
    // Format time
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format day and month
    day = day < 10 ? '0' + day : day;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = months[month];

    // Display time and date in the desired format
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('date').textContent = `${day} ${monthName}, ${year}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();

// Dark/Light Mode Toggle Functionality
const toggleButton = document.getElementById('toggle-btn');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
    document.body.classList.toggle('day-mode');
    const currentMode = document.body.classList.contains('night-mode') ? '🌞' : '🌙';
    toggleButton.textContent = currentMode;
});
