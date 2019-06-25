var users = [
  {
    name: "Bilson, Quabynah Dennis",
    position: "CEO &amp; Lead Developer Advocate",
    email: "codelbas.quabynah@gmail.com",
    phone: "+233554022344",
    desc:
      "I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    experience: [
      {
        title: "Founder &amp; Lead developer advocate",
        company: "Quabynah Codelabs",
        duration: "2019-present"
      },
      {
        title: "Mobile Apps developer",
        company: "Zeniteck IT Solutions",
        duration: "2018-present"
      },
      {
        title: "Mobile Applications tutor",
        company: "Department of Computer Science, UG, Legon",
        duration: "2018-present"
      },
      {
        title: "Mobile Banker",
        company: "Waxson Financial Services",
        duration: "2013-2014"
      }
    ],
    education: [
      {
        institution: "University of Ghana",
        course: "Computer Science",
        type: "Bachelor of Arts",
        duration: "2014-2018",
        gpa: "2.89"
      },
      {
        institution: "Odorgonno Senior High School",
        course: "Business",
        type: "WASSCE",
        duration: "2009-2013",
        gpa: "8.0"
      },
      {
        institution: "Ewit Preparatory School",
        course: "Basic Education",
        type: "BECE",
        duration: "1997-2009",
        gpa: "8.0"
      }
    ],
    skills: [],
    interests:
      "Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking. When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.",
    awards: []
  }
];

$(document).ready(function() {
  // Get current user
  var currentUser = users[0];
  // Setup profile
  $("#info_username").text(currentUser.name);
  $("#info_about").text(currentUser.desc);
  $("#info_interests").text(currentUser.interests);

  // Experience
  currentUser.experience.forEach(item => {
    $("#experience_grid").append(
      `<div class="row featurette mb-5">
            <div class="col-md-7 order-md-1  my-auto">
            <h2 class="featurette-heading">
                ${item.company}
            </h2>
            <p class="">
                ${item.title}
            </p>
            <h6 class="text-muted">
                ${item.duration}
            </h6>
            </div>
        </div>`
    );
  });

  // Education
  currentUser.education.forEach(item => {
    $("#education_grid").append(
      `<div class="row featurette mb-5">
            <div class="col-md-12 order-md-1  my-auto">
            <h2 class="featurette-heading">
                ${
                  item.institution
                } <span class="text-muted app-category-small">${
        item.type
      }</span>
            </h2>
            <p class="">
                ${item.course}
            </p>
            <h6 class="text-muted">
                ${item.duration}
            </h6>
            </div>
        </div>`
    );
  });

  // Skills
  currentUser.skills.forEach(item => {
    $("#skills_grid").append(
      `<div class="row featurette mb-5">
            <div class="col-md-7 order-md-1  my-auto">
            <h2 class="featurette-heading">
                ${item.institution}
            </h2>
            <p class="">
                ${item.course}
            </p>
            <h6 class="text-muted">
                ${item.duration}
            </h6>
            </div>
        </div>`
    );
  });

  // Awards
  currentUser.awards.forEach(item => {
    $("#awards_grid").append(
      `<div class="row featurette mb-5">
            <div class="col-md-7 order-md-1  my-auto">
            <h2 class="featurette-heading">
                ${item.institution}
            </h2>
            <p class="">
                ${item.course}
            </p>
            <h6 class="text-muted">
                ${item.duration}
            </h6>
            </div>
        </div>`
    );
  });
});
