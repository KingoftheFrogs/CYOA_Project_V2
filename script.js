// Declare variables below to save the different divs of your story.
let option_one_button = document.querySelector(".option-one");
let option_two_button = document.querySelector(".option-two");
let option_one_screen = document.querySelector(".option-one-screen");
let option_three_screen = document.querySelector(".option-three-screen");
let option_four_screen = document.querySelector(".option-four-screen");
let option_five_screen = document.querySelector(".option-five-screen");
let option_two_screen = document.querySelector(".option-two-screen");
let header = document.querySelector(".main-story");
let title = document.querySelector(".story-opening");
let main_image = document.querySelector(".story-opening img")
let progress = 0;
let option_one_end = document.querySelector(".option-one-end");
let option_two_end = document.querySelector(".option-two-end");






// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


option_one_button.addEventListener('click', function(){
   if (progress == 0){
      option_one_screen.style.display = "block";
      title.style.display = "none";
      option_one_button.innerHTML = "Enter the Tent";
      option_two_button.innerHTML = "Look for the Exit";
      progress +=1;

   } 
    else if(progress == 1){
      option_one_screen.style.display = "none";
      option_three_screen.style.display = "block";
      option_one_button.innerHTML = "Fight the Hodag";
      option_two_button.innerHTML = "Run Away";
      progress+=1;

    }
    else if (progress == 2){
      option_three_screen.style.display = "none";
      option_one_end.style.display = "block";
      progress+=1;
      option_one_button.style.display = "none";
      option_two_button.style.display = "none";
    }
 });

 option_two_button.addEventListener('click', function(){
    if(progress == 0){
      option_two_screen.style.display = "block";
      title.style.display = "none";
      option_one_button.style.display = "none";
      option_two_button.style.display = "none";
    }
    else if (progress == 1){
      option_two_screen.style.display = "none";
      option_two_end.style.display = "block";
      option_one_screen.style.display = "none";
      option_one_button.style.display = "none";
      option_two_button.style.display = "none";
    }
    else if (progress == 2){
      option_three_screen.style.display = "none";
      option_two_end.style.display = "block";
      option_one_screen.style.display = "none";
      option_one_button.style.display = "none";
      option_two_button.style.display = "none";
    }
   


 });


// INSERT_VARIABLE.addEventListener('click', function(){

// });