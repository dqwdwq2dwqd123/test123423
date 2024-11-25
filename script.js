const nameInput = document.getElementById("nameInput");
const dobInput = document.getElementById("dobInput");
const submitButton = document.getElementById("submitButton");
const messageParagraph = document.getElementById("message");
const outputSection = document.getElementById("outputSection");
const nextButton = document.getElementById("nextButton");
const heartSection = document.getElementById("heartSection");
const asciiHeart = document.getElementById("asciiHeart");

const heartArt = `
     ******       ******
   **********   **********
  ************* *************
  *****************************
   ***************************
    *************************
      *********************
        *****************
          *************
            *********
              *****
               ***
                *
`;

submitButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const dob = dobInput.value;

  if (name.toLowerCase() === "mazzybomb" && dob === "2006-02-27") {
    // Display the heartfelt message
    messageParagraph.innerHTML = `
      Maria, my Mazzybomb, from the day I met you, my life has been filled with joy, love, and purpose. 
      You’re the light that brightens my darkest days, the calm to my chaos, and my partner in every sense of the word. 
      There’s nothing in this world that means more to me than you do. You are my everything, and I am so lucky to have you.
      I love you beyond words, and I’ll continue to love you for eternity.
    `;
    outputSection.style.display = "block";
    nextButton.style.display = "inline-block";
  } else {
    // Display an error message
    alert("Oops! Please check your name or date of birth.");
  }
});

nextButton.addEventListener("click", () => {
  // Hide the message and show the heart section
  outputSection.style.display = "none";
  heartSection.style.display = "flex";

  // Display the ASCII heart
  asciiHeart.textContent = heartArt;
});
