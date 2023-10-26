const steps = [
  {
    content: "Name of the Application.",
    target: "#app-name",
    order: "0",
    group: "home"
  },
  {
    content: "Comment feature to add while note creation",
    title: "Newly Added",
    target: "#comments",
    order: "1",
    group: "home"
  },
  {
    content: "Button to open/close the slide-out.",
    title: "Toggle Button",
    target: "#toggle",
    order: "2",
    group: "home"
  },
  {
    content: "Graph defining some data over the year 2019-2021",
    title: "Bar Chart",
    target: "#bar-chart",
    order: "3",
    group: "home"
  },
  {
    content: "To start the page tour again",
    title: "Tour Button",
    target: "#demo", //using id of elements
    order: "4",
    group: "home"
  },
  {
    content: "slide-out area to show important events in claims.",
    title: "Slide Out",
    target: ".container .slide-out", //using class name
    order: "6",
    group: "slide"
  },
  {
    content: "Button to close the slide-out.",
    title: "Close Button",
    target: "#close",
    order: "7",
    group: "slide"
  }
];

let tg = new tourguide.TourGuideClient({
  exitOnClickOutside: false,
  steps: steps,
  rememberStep: true,
  progressBar: '#6495ed',
  dialogClass: "dioalog-box"
});

//to use tour in feature for specific period of time

const featureReleased = new Date("2023-10-15");
const daysToShowTour = 3;

const canShowTour = () => {
  const today = new Date();
  let targetDay = new Date();
  targetDay = new Date(targetDay.setDate(featureReleased.getDate() + daysToShowTour));
  if (today <= targetDay) { return true;} 
  else {return false;}
};

if(canShowTour()){
  tg.start("home");
}

//other js functionalities

$(document).ready(function () {
  const $toggleButton = $("#toggle");
  const $closeButton = $("#close");
  const $content = $(".content");
  const $slideOut = $(".slide-out");
  const $demo = $("#demo");

  let count=0;
  $toggleButton.on("click", function () {
    if ($slideOut.hasClass("slide-active")) {
      $content.removeClass("active");
      $slideOut.removeClass("slide-active");
    }
    else {
      $content.addClass("active");
      $slideOut.addClass("slide-active");
      if(count==0){setTimeout(function() {tg.activeStep=0;tg.start("slide");}, 1000);}
      if(count==0){count++;};
    }
  });
  $closeButton.on("click", function () {
    $content.removeClass("active");
    $slideOut.removeClass("slide-active");
  });
  $demo.on("click", function () {
    tg.start("home");
  });
});