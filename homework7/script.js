// Define the class for each image
class ViewMasterImage {
    constructor(title, imageSrc, description, author, year) {
      this.title = title;
      this.imageSrc = imageSrc;
      this.description = description;
      this.author = author;
      this.year = year;
    }
  }
  
  // Create an array
  const imageArray = [
    new ViewMasterImage(
      "Standards of Beauty",
      "images/1.jpeg",
      "Challenging general perceptions of beauty.2",
      "Rozeal",
      2011
    ),
    new ViewMasterImage(
      "John Lewis and Colleagues",
      "images/2.jpeg",
      "Protesting segregation through prayer at a swimming pool.",
      "Jane Smith",
      1969
    ),
    new ViewMasterImage(
      "Women's Rights",
      "images/3.webp",
      "Tying pro choice bandanas to the White House fence.",
      "Tyrone Turner",
      2022
    ),
    new ViewMasterImage(
      "Outside Looking In",
      "images/4.jpeg",
      "Alabama family esxperiencing effects of segregation.",
      "Gordon Parks",
      1956
    ),
    new ViewMasterImage(
      "BLM",
      "images/5.jpeg",
      "Protester carrying flag in Minneapolis.",
      "Julio Cortez",
      2020
    )
  ];
  
  // Function to randomly select an image from the array and display it
  function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const imageObj = imageArray[randomIndex];
  
    document.getElementById("image").src = imageObj.imageSrc;
    document.getElementById("title").innerText = imageObj.title;
    document.getElementById("description").innerText = imageObj.description;
    document.getElementById("author").innerText = "Author: " + imageObj.author;
    document.getElementById("year").innerText = "Year: " + imageObj.year;
  }
  
  // Event listener for the button click
  document.getElementById("nextButton").addEventListener("click", displayRandomImage);
  
  // Display initial image when the page loads
  displayRandomImage();
  