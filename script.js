// Reset the flow (persistent start-over button)
document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
});
document.getElementById("step1").classList.remove("hidden");

// Step 1: Enter Topic
document.getElementById("submitTopic").addEventListener("click", () => {
  const topic = document.getElementById("topicInput").value.trim();
  if (!topic) {
    document.getElementById("topicResponse").textContent = "Please enter a valid topic.";
    return;
  }

  // Simulate AI response
  document.getElementById("topicResponse").innerHTML = `
    Great topic! How would you refine it further? Example clarifying question: 
    "What specific aspect of ${topic} would you like to focus on?"
  `;

  // Future function:
  // submitTopic(topic) - Sends the user-provided topic to the backend for processing.

  document.getElementById("step2").classList.remove("hidden");
});

// Step 2: Clarify Topic
document.getElementById("submitClarification").addEventListener("click", () => {
  const clarification = document.getElementById("clarificationInput").value.trim();
  if (!clarification) {
    document.getElementById("clarificationResponse").textContent = "Please provide clarification.";
    return;
  }

  // Simulate AI response
  document.getElementById("clarificationResponse").innerHTML = `
    Thanks for clarifying! Based on your feedback, the topic is now refined to: 
    "${clarification} - A deeper dive."
  `;

  // Future function:
  // submitClarification(clarification) - Updates the topic details and refines further via API.

  document.getElementById("step3").classList.remove("hidden");
});

// Step 3: Title Selection (loop handling)
let titleAttempts = 0;
const maxAttempts = 20;

function renderTitles(attempt) {
  const hardcodedTitles = [
    "The Art of Focused Thinking",
    "Unlocking Your Potential: A Practical Guide",
    "Mastering the Non-Fiction Narrative",
    "Insights into Innovation",
    "Your Guide to Success: The Complete Journey",
  ];

  const titleOptionsDiv = document.getElementById("titleOptions");
  titleOptionsDiv.innerHTML = hardcodedTitles
    .map(
      (title, index) =>
        `<button class="title-option" data-title="${title}">Option ${index + 1}: ${title}</button>`
    )
    .join("");

  if (attempt >= 15) {
    titleOptionsDiv.insertAdjacentHTML(
      "beforeend",
      `<p><em>You’ve reviewed ${attempt} sets of options. Final options soon!</em></p>`
    );
  }
}

document.getElementById("titleOptions").addEventListener("click", (event) => {
  if (event.target.classList.contains("title-option")) {
    const selectedTitle = event.target.getAttribute("data-title");
    alert(`You selected: "${selectedTitle}"`);
    document.getElementById("step4").classList.remove("hidden");
  }
});

document.getElementById("submitTitle").addEventListener("click", () => {
  const feedback = document.getElementById("customTitle").value.trim();

  if (feedback) {
    titleAttempts += 1;

    if (titleAttempts >= maxAttempts) {
      alert("Final title options presented.");
      document.getElementById("step4").classList.remove("hidden");
    } else {
      renderTitles(titleAttempts);
    }
  } else {
    alert("Please choose a title or provide feedback.");
  }
});

// Step 4: Review Outline
const hardcodedOutline = `
<h4>Introduction: The Power of Knowledge</h4>
<ul>
  <li>Chapter 1: Foundations of Understanding</li>
  <li>Chapter 2: Building Expertise</li>
  <li>Chapter 3: Overcoming Barriers</li>
  <li>Chapter 4: Innovating for the Future</li>
  <li>Chapter 5: Sustaining Success</li>
</ul>
<h4>Conclusion: Reflecting on the Journey</h4>
`;

document.getElementById("outlinePreview").innerHTML = hardcodedOutline;

document.getElementById("approveOutline").addEventListener("click", () => {
  alert("Outline approved! Proceeding to ebook generation...");
  document.getElementById("step5").classList.remove("hidden");
});

document.getElementById("requestOutlineChanges").addEventListener("click", () => {
  alert("Thank you for the feedback! Generating updated outline...");
  document.getElementById("outlineResponse").textContent =
    "Updated outline coming soon (hardcoded response).";

  // Future function:
  // submitOutlineFeedback(feedback) - Sends feedback to update the outline.
});
