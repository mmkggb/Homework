//declare html element nodes and assign text content values

let heading = document.createElement("h1");
heading.textContent = "Welcome To Mike Kelly's Portfolio";
document.querySelector("#heading").appendChild(heading);

let about = document.createElement("h3");
about.textContent = "About Me ";
document.querySelector("main > #mainText").appendChild(about);

let aboutMe = document.createElement("p");
aboutMe.textContent = "Hello & welcome again to my bio website! My name is Michael Kelly and I'm an aspiring JavaScript Full-Stack-Developer who has a lot of spunk and charisma to offer. By day I provide technical support for computer systems and by night I'm a Savvy Coder learning modern programming practices in front-end and back-end web development while simultaneously focusing on agile delivery. Currently I'm looking to change lanes in my career and become a full time web developer. My end goal of this January 2022 cohort is to showcase my capstone project to demonstrate my understanding of the curriculum. ";
document.querySelector("main > #mainText").appendChild(aboutMe);

let ftHeader = document.createElement("h3");
ftHeader.textContent = "Fun Facts";
document.querySelector("#footHeading").appendChild(ftHeader);

let funFacts = document.createElement("p");
funFacts.textContent = "After a four year break, I have rejoined Savvy Coders as a second-time student and a former 2018 graduate of their Front-End boot camp. In my leisure time I enjoy nature walks, traveling, and spending time with my family. ";
document.querySelector(".footer-text > #footerText").appendChild(funFacts);

let image = document.createElement("img");
image.src = "./pics/Bio Pic1.jpg";
image.height = 110;
image.height = 146;
image.textContent = "click me"
document.querySelector("#heading").appendChild(image);

// Create two arrays for list items

let FrontArry = [
    "Functions " , 
    " Arrays And Objects " ,
    " HTML And CSS" , 
    " Document Object Model" ,
    " Array Methods" , 
    " Debugging" ,
    " Classes "
    ]
    let BackArry = [
    "Introduction to Backend Development",
    "HTTP Web server using Express ",
    "MongoDB Configuration and Setup ",
    "CRUD Operations using Express Routes ",
    "Submitting data to the API server from a SPA ",
    "Hosting created API w/ Heroku-And-Connect-To-Frontend"      
    ]
    
// create unordered list element
const ulFrontE = document.createElement("ul");
const ulBackE = document.createElement("ul");
ulFrontE.textContent = "Front End"
document.getElementById("frontend").appendChild(ulFrontE);
ulBackE.textContent = "Back End"
document.querySelector("#backend").appendChild(ulBackE);


//create li elements and append  to appropriate u.o. list element
const frItem1 = document.createElement("li");
frItem1.textContent = FrontArry[0] 
document.querySelector("#frontend > ul").appendChild(frItem1);

const frItem2 = document.createElement("li");
frItem2.textContent = FrontArry[1];
document.querySelector("#frontend > ul").appendChild(frItem2);
const frItem3 = document.createElement("li");
frItem3.textContent = FrontArry[2] 
document.querySelector("#frontend > ul").appendChild(frItem3);
const frItem4 = document.createElement("li");
frItem4.textContent = FrontArry[3];
document.querySelector("#frontend > ul").appendChild(frItem4);
const frItem5 = document.createElement("li");
frItem5.textContent = FrontArry[4];
document.querySelector("#frontend > ul").appendChild(frItem5);
const frItem6 = document.createElement("li");
frItem6.textContent = FrontArry[5] //"Functions ";
document.querySelector("#frontend > ul").appendChild(frItem6);
const frItem7 = document.createElement("li");
frItem7.textContent = FrontArry[6];
document.querySelector("#frontend > ul").appendChild(frItem7);
// back end array
const bkItem1 = document.createElement("li");
bkItem1.textContent = BackArry[0];
document.querySelector("#backend > ul").appendChild(bkItem1);

const bkItem2 = document.createElement("li");
bkItem2.textContent = BackArry[1];
document.querySelector("#backend > ul").appendChild(bkItem2);
const bkItem3 = document.createElement("li");
bkItem3.textContent = BackArry[2];
document.querySelector("#backend > ul").appendChild(bkItem3);
const bkItem4 = document.createElement("li");
bkItem4.textContent = BackArry[3];
document.querySelector("#backend > ul").appendChild(bkItem4);
const bkItem5 = document.createElement("li");
bkItem5.textContent = BackArry[4];
document.querySelector("#backend > ul").appendChild(bkItem5);
const bkItem6 = document.createElement("li");
bkItem6.textContent = BackArry[5];
document.querySelector("#backend > ul").appendChild(bkItem6);



