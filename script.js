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

  // Uncomment when ready for API:
  // submitTopic(topic);

  // Move to Step 2
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

  // Uncomment when ready for API:
  // submitClarification(clarification);

  // Move to Step 3
  document.getElementById("step3").classList.remove("hidden");
});

// Step 3: Choose Title
document.getElementById("submitTitle").addEventListener("click", () => {
  const customTitle = document.getElementById("customTitle").value.trim();
  if (!customTitle) {
    document.getElementById("titleOptions").textContent = "Please choose or enter a title.";
    return;
  }

  alert(`Title selected: ${customTitle}`);
  
  // Uncomment when ready for API:
  // storeTitleSelection(customTitle);

  // Move to Step 4
  document.getElementById("step4").classList.remove("hidden");
});

// Step 4: Review Outline
document.getElementById("approveOutline").addEventListener("click", () => {
  alert("Outline approved! Moving to ebook generation...");
  document.getElementById("step5").classList.remove("hidden");
});
