//tippy js

//default tippy settings
tippy.setDefaultProps({
    delay: [1000, 0],
    showOnCreate: true,
});

tippy('#app-name', {
    content: "Name of the Application.",
});
tippy('#comments', {
    content: "Comment feature to add while note creation",
    placement: 'right',
});
tippy('#toggle', {
    content: "Button to open/close the slide-out.",
    placement: 'right',
});
tippy('#bar-chart', {
    content: "Graph defining some data over the year 2019-2021. Bar graph summarises the large set of data in simple visual form. It displays each category of data in the frequency distribution. It clarifies the trend of data better than the table. It helps in estimating the key values at a glance.",
    placement: 'right',
    interactive: true,
    showOnCreate: false,
    trigger: 'click',
    delay: 0,
});
tippy('#le', {
    content: "<div id='inside-div'><h2>Can show HTML elements or images like screenshots too..</h2></div>",
    placement: 'right',
    allowHTML: true,
});
const closeButton = tippy('#close', {
    content: "Button to close the slide-out.",
    placement: 'left',
    showOnCreate: false,
    theme: 'light'
});
const slideArea = tippy('#slide-contents', {
    content: "slide-out area to show important events in claims.",
    placement: 'left',
    showOnCreate: false,
});

//other js functionalities

$(document).ready(function () {
    const $toggleButton = $("#toggle");
    const $closeButton = $("#close");
    const $content = $(".content");
    const $slideOut = $(".slide-out");

    let count = 0;
    $toggleButton.on("click", function () {
        console.log(count);
        if ($slideOut.hasClass("slide-active")) {
            $content.removeClass("active");
            $slideOut.removeClass("slide-active");
        }
        else {
            $content.addClass("active");
            $slideOut.addClass("slide-active");
            if (count == 0) {
                setTimeout(function () {
                    slideArea[0].show();
                    closeButton[0].show();
                }, 1000);
            }
            if (count == 0) { count++; };
        }
    });
    $closeButton.on("click", function () {
        $content.removeClass("active");
        $slideOut.removeClass("slide-active");
    });
});