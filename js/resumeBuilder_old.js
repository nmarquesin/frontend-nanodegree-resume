// $("#main").append(["Nathalie Marquesin"]);
//var awesomeThoughts = "I am Nathalie and I am awesome";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace(["awesome"], ["fun"]);
//$("#main").append([funThoughts]);

var formattedName = HTMLheaderName.replace(["%data%"], ["Nathalie Marquesin"]);
var formattedRole = HTMLheaderRole.replace(["%data%"], ["Web Developer"]);

$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);

//var name = ;
//var role = ;
//var contactInfo = ["nmarquesin@live.com", "0044 7496 529051", "@mrsricehill", "https://github.com/nmarquesin", "Newbury, UK"];
//var picURL = "https://avatars.githubusercontent.com/u/23559837?v=3";
//var welcomeMsg = "Welcome to my corner of the Web.";
//var skills = ["Python", "HTML+CSS", "JavaScript", "ML"];


// here is an object declared with object notation:
// var myObj = {};

var bio = {
  "name" : "Nathalie Marquesin",
  "role" : "Web Developer",
  "contactInfo" : {
    "email":"nmarquesin@live.com",
    "mobile": "0044 7496 529051",
    "twitter": "@mrsricehill",
    "github":"https://github.com/nmarquesin",
    "loc":"Newbury, UK"
  },
  "picURL" : "https://avatars.githubusercontent.com/u/23559837?v=3",
  "welcomeMsg" : "Welcome to my corner of the Web.",
  "skills" : ["Python", "HTML+CSS", "JavaScript", "ML"]
};



// here is an object declared with bracket notation:
// var myObj;
// myObj["someProperty"] = someValue;



// -----------

// format bio variables
var formattedEmail = HTMLemail.replace(["%data%"], bio.contactInfo.email);
var formattedMobile = HTMLmobile.replace(["%data%"], bio.contactInfo.mobile);
var formattedGithub = HTMLgithub.replace(["%data%"], bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace(["%data%"], bio.contactInfo.loc);
var formattedPic = HTMLbioPic.replace(["%data%"], bio.picURL);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace(["%data%"], bio.welcomeMsg);
var formattedSkills = HTMLskills.replace(["%data%"], bio.skills);

// append or prepend bio variables
$("#topContacts").append([formattedMobile]);
$("#topContacts").append([formattedEmail]);
$("#footerContacts").append([formattedGithub]);
$("#topContacts").append([formattedLocation]);
$("#header").append([formattedWelcomeMessage]);



// here is an object declared with dot notation:
// var myObj;
// myObj.someProperty = someValue;

var work = { }

work.position = "Asset Integrity Engineer";
work.employer = "Oceaneering Asset Integrity";
work.city =  "Trondheim, Norway";


// format work variables in bracket format
//    var formattedEmployer = HTMLemail.replace(["%data%"], work["employer"]);
//    var formattedWorkTitle = HTMLworkTitle.replace(["%data%"], work["position"]);
//    var formattedWorkLocation = HTMLworkLocation.replace(["%data%"], work["city"]);

// append or prepend work variables
//    $("#workExperience").append([formattedEmployer]);
//    $("#workExperience").append([formattedWorkTitle]);
//    $("#workExperience").append([formattedWorkLocation]);

var education = {
  "schools" : [
    {
      "name": "NTNU",
      "location": "Trondheim, Norway",
      "degree": "MSc",
      "majors": ["Marine Technology"],
      "dates": 2015,
      "url": "#"
    },
    {
      "name": "UFRJ",
      "location": "Rio de Janeiro, Brazil",
      "degree": "BA",
      "majors": ["Naval Architecture and Marine Engineering"],
      "dates": 2011,
      "url": "#"
    }
  ],
  "onlineCourses" : [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": 2017,
      "url": "#"
    },
    {
      "title": "Intro to CS",
      "school": "Udacity",
      "dates": 2016,
      "url": "#"
    },
    {
      "title": "HTML and CSS Fundamentals",
      "school": "Udacity",
      "dates": 2017,
      "url": "#"
    },
    {
      "title": "Intro to Machine Learning",
      "school": "Udacity",
      "dates": 2017,
      "url": "#"
    },
    {
      "title": "Responsive Web Dev",
      "school": "Udacity",
      "dates": 2017,
      "url": "#"
    }
  ]
}

// education["name"] = "NTNU";
// education["years"] = "Fall 2013 - Spring 2015";
// education["city"] = work.city;

// format education variables in bracket format
//    var formattedSchoolName = HTMLschoolName.replace(["%data%"], education.name);
//    var formattedSchoolLocation = HTMLschoolLocation.replace(["%data%"], education.city);
//    var formattedSchoolDates = HTMLschoolDates.replace(["%data%"], education.years);

// append or prepend education variables
//    $("#education").append([formattedSchoolName]);
//    $("#education").append([formattedSchoolDates]);
//    $("#education").append([formattedSchoolLocation]);

var projects = {
  ["title":"Tribute Page", "date":"Jan 2017", "description":"Free Code Camp Exercise", "images": ["#"]],
  ["title":"Tribute Page", "date":"Jan 2017", "description":"Free Code Camp Exercise", "images": ["#"]],
  ["title":"Tribute Page", "date":"Jan 2017", "description":"Free Code Camp Exercise", "images": ["#"]]
}

$("#main").append([work["position"]]);
$("#main").append([education.schools[0].name]);
