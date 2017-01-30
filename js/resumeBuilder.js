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

var work = {
  jobs : [{
    "position" : "Asset Integrity Engineer",
    "employer" : "Oceaneering Asset Integrity",
    "dates" : "01.2011 - 01.2100",
    "location" :  "Trondheim, Norway",
    "descrip" : "Cupcake ipsum dolor sit amet chocolate bonbon lemon drops. Bear claw donut danish chocolate I love sweet wafer. Caramels wafer pudding cheesecake cupcake."
  },
  {
    "position" : "Research Assistant",
    "employer" : "NTNU",
    "dates" : "01.2011 - 01.2100",
    "location" :  "Trondheim, Norway",
    "descrip" : "Cupcake ipsum dolor sit amet chocolate bonbon lemon drops. Bear claw donut danish chocolate I love sweet wafer. Caramels wafer pudding cheesecake cupcake."
  }
]};



function displayWork () {
  for (item in work.jobs){
    $("#workExperience").append([HTMLworkStart]);
    var employer = HTMLworkEmployer.replace(["%data%"], work.jobs[item].employer);
    var title = HTMLworkTitle.replace(["%data%"], work.jobs[item].position);
    $(".work-entry:last").append([employer.concat(title)]);
    var dates = HTMLworkDates.replace(["%data%"], work.jobs[item].dates);
    var location = HTMLworkLocation.replace(["%data%"], work.jobs[item].location);
    var description = HTMLworkDescription.replace(["%data%"], work.jobs[item].descrip);
    $(".work-entry:last").append([dates]);
    $(".work-entry:last").append([location]);
    $(".work-entry:last").append([description]);
  }
};

displayWork();

//$(document).click(function(loc) {
//  var x = loc.pageX;
//  var y = loc.pageY;
//
//  logClicks(x,y);
//});




// work.position = "Asset Integrity Engineer";
// work.employer = "Oceaneering Asset Integrity";
// work.location =  "Trondheim, Norway";

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
      "school": "Udalocation",
      "dates": 2017,
      "url": "#"
    },
    {
      "title": "Intro to CS",
      "school": "Udalocation",
      "dates": 2016,
      "url": "#"
    },
    {
      "title": "HTML and CSS Fundamentals",
      "school": "Udalocation",
      "dates": 2017,
      "url": "#"
    },
    {
      "title": "Intro to Machine Learning",
      "school": "Udalocation",
      "dates": 2017,
      "url": "#"
    },
    {
      "title": "Responsive Web Dev",
      "school": "Udalocation",
      "dates": 2017,
      "url": "#"
    }
  ]
};


// create projects array

var projects = {
  "projects" : [
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
]};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
        $(".project-entry:last").append(formattedImage);
      }
    }


  }
};

projects.display();

// tests
// $("#main").append([work["position"]]);
// $("#main").append([education.schools[0].name]);
// $("#main").append([projects[0].title]);

if (bio.skills) {
  $("#header").append([HTMLskillsStart]);
  $("#skills-h3").append([HTMLskills.replace(["%data%"], bio.skills)]);
};

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0]+ " " + name[1];
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
