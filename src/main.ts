function getRandomNumber(min: number = 5, max: number = 40): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumbers(count: number): number[] {
  const numbers: Set<number> = new Set();

  while (numbers.size < count) {
    numbers.add(getRandomNumber());
  }

  return Array.from(numbers);
}

function displayRandomNumbers() {
  const numberContainer = document.getElementById("numberContainer");
  if (!numberContainer) return;

  // Clear the container before adding new numbers
  numberContainer.innerHTML = "";

  // Generate 6 unique random numbers
  const randomNumbers = generateRandomNumbers(6);

  // Create and display the numbers
  randomNumbers.forEach((num) => {
    const numberElement = document.createElement("div");
    numberElement.className = "random-number";
    numberElement.textContent = num.toString();
    numberContainer.appendChild(numberElement);
  });
}

// Event listener for button click
document
  .getElementById("generateBtn")
  ?.addEventListener("click", displayRandomNumbers);
