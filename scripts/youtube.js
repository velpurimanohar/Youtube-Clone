var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var mainContainer = document.querySelector(".main-container");

menuIcon.onclick = function() {
    sidebar.classList.toggle("smaller-sidebar");
    mainContainer.classList.toggle("larger-mainContainer");
};

let commentBtn = document.getElementById("comment-btn"); // Add Comment button
let commentInput = document.getElementById("comment-input"); // Comment input field
let commentSection = document.getElementById("comment-section"); // Section where comments are displayed
let commentCount = document.getElementById("comment-count"); // To display the comment count

let comments = []; // Array to store the comments

// Function to handle comment submission
function submitComment() {
    let newComment = commentInput.value.trim(); // Get the comment from the input
    if (newComment) {
        comments.push(newComment); // Add comment to the array
        displayComments(); // Display all comments
        commentInput.value = "";  // Clear the input after submission
    }
}

// Event listener for the Add Comment button click
commentBtn.onclick = submitComment;

// Event listener for pressing "Enter" in the input field
commentInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Prevent default behavior (e.g., page refresh)
        submitComment();  // Submit the comment
    }
});

// Function to display all comments
function displayComments() {
    commentSection.innerHTML = ""; // Clear previous comments

    comments.forEach((comment) => {
        let commentDiv = document.createElement("div");
        commentDiv.className = "previous-comment d-flex";
        commentDiv.innerHTML = `
        <div class="privous-comment d-flex">
            <img src="./assets/my-img.jpg" alt="" class="my-profile-1">
            <div class="nameAndcomment">
                <p>@manoharvelpuri</p>
                <p>${comment}</p>
            </div>
        </div>    
        `;
        commentSection.appendChild(commentDiv); // Append new comment to the comment section
    });

    // Update the comment count
    commentCount.innerText = `${comments.length} Comment${comments.length > 1 ? "s" : ""}`;
}
