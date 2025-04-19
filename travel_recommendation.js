// Create variables for the elements
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");

// Add event listeners to the top navigation links to redirect them for now
home.addEventListener("click", linkAlertUser);
about.addEventListener("click", linkAlertUser);
contact.addEventListener("click", linkAlertUser);

// Add event listeners to the search button and clear button
searchBtn.addEventListener("click", searchDestination);
clearBtn.addEventListener("click", clearSearch);

function linkAlertUser() {
  // Alert the user that the link does not work yet
  about.href = "travel_recommendation.html";
  contact.href = "travel_recommendation.html";
  alert("This link does not work yet. Please check back later.");
}

function searchDestination() {
  // Get the value from the search field
  const destination = document.getElementById("destinationField").value;

  // Check if the input is empty
  if (destination === "") {
    alert("Please enter a destination.");
    return;
  }

  // Display a message with the destination
  alert("This functionality is not yet implemented. You searched for: " + destination);
  // For now, just log the destination to the console
  console.log("User searched for: " + destination);

  // Clear the input field after searching
  clearSearch();
}

function clearSearch() {
  // Clear the input field
  document.getElementById("destinationField").value = "";
}
