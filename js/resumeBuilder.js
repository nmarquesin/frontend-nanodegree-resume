// ----------- Class Note

// here is an object declared with bracket notation:
// var myObj;
// myObj["someProperty"] = someValue;

// here is an object declared with dot notation:
// var myObj;
// myObj.someProperty = someValue;

// -----------


// create and append name and role in header

var formattedName = HTMLheaderName.replace(["%data%"], ["Nathalie Marquesin"]);
var formattedRole = HTMLheaderRole.replace(["%data%"], ["Web Developer"]);

$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);

// create and append bio object

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

var formattedEmail = HTMLemail.replace(["%data%"], bio.contactInfo.email);
var formattedMobile = HTMLmobile.replace(["%data%"], bio.contactInfo.mobile);
var formattedGithub = HTMLgithub.replace(["%data%"], bio.contactInfo.github);
var formattedLocation = HTMLlocation.replace(["%data%"], bio.contactInfo.loc);
var formattedPic = HTMLbioPic.replace(["%data%"], bio.picURL);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace(["%data%"], bio.welcomeMsg);
var formattedSkills = HTMLskills.replace(["%data%"], bio.skills);

$("#topContacts").append([formattedMobile]);
$("#topContacts").append([formattedEmail]);
$("#footerContacts").append([formattedGithub]);
$("#topContacts").append([formattedLocation]);
$("#header").append([formattedWelcomeMessage]);


// create work object

var work = { };

work.position = "Asset Integrity Engineer";
work.employer = "Oceaneering Asset Integrity";
work.city =  "Trondheim, Norway";


// create education object

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
};


// create projects array

var projects = [
  {
    "title": "Tribute Page",
    "date": "Jan 2017",
    "description": "Free Code Camp Exercise",
    "images": "#"
  },
  {
    "title": "Tribute Page",
    "date": "Jan 2017",
    "description": "Free Code Camp Exercise",
    "images": "#"
  }
];

// tests
// $("#main").append([work["position"]]);
// $("#main").append([education.schools[0].name]);
// $("#main").append([projects[0].title]);
