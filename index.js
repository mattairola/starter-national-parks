// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

// sortByName function
const sortByName = ((parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;

  if(parkAName < parkBName) {
    return -1
  } else if(parkAName > parkBName) {
    return 1;
  }else{
    return 0;
  }
});

//sortByRating function
const sortByRating = ((parkA, parkB) => {
  const parkARating = parkA.querySelector(".rating-display .value").innerText;
  const parkBRating = parkB.querySelector(".rating-display .value").innerText;

  if(parkARating > parkBRating){
    return -1
  }else if(parkARating < parkBRating){
    return 1
  }else{
    return 0
  }
});

//Function for handling the 'nameSorter' click

const nameSorterClickHandler = (event) => {
  event.preventDefault();
  
  const main = document.querySelector("main");
  const parksList = main.querySelectorAll(".park-display");
  main.innerHTML = " ";
  const parksArray = Array.from(parksList);
  parksArray.sort(sortByName);

  parksArray.forEach((park) => {
    main.appendChild(park);
  })
};

//Function for handling the 'ratingSorter' click

const ratingSorterClickHandler = (event) => {
  event.preventDefault();
  
  const main = document.querySelector("main");
  const parksList = main.querySelectorAll(".park-display");
  main.innerHTML = " ";
  const parksArray = Array.from(parksList);
  parksArray.sort(sortByRating);

  parksArray.forEach((park) => {
    main.appendChild(park);
  })
};

const main = () => {
    //select the nameSorter link
    const nameSorter = document.querySelector("#name-sorter");

    //add an event listener to the nameSorter
    nameSorter.addEventListener("click", nameSorterClickHandler)

    //select the ratingSorter link
    const ratingSorter = document.querySelector("#rating-sorter");

    //add an event listener to the ratingSorter
    ratingSorter.addEventListener("click", ratingSorterClickHandler)
  } 

// Add event listener for `DOMContentLoaded`
window.addEventListener("DOMContentLoaded", main);