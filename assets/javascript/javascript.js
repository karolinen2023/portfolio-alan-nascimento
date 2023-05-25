


document.addEventListener('DOMContentLoaded', function () {
    var iconMenu = document.querySelector('.icon-menu');
    var menuResponsiveItems = document.querySelectorAll('.menu-reponsive');

    menuResponsiveItems.forEach(function (item) {

    });

    window.addEventListener('resize', function () {

        var larguraJanela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (larguraJanela < 700) {
            menuResponsiveItems.forEach(function (item) {
                item.style.display = 'none';
            });
        }
    });




    iconMenu.addEventListener('click', function () {
        menuResponsiveItems.forEach(function (item) {
            if (item.style.display === 'none') {
                item.style.display = 'block';
                item.classList.add('fade-in');
                item.classList.remove('fade-out');
            } else {
                item.classList.add('fade-out');
                item.classList.remove('fade-in');

                setTimeout(function () {
                    item.style.display = 'none';
                }, 500);
            }
        });
    });
});


var menuLinks = document.querySelectorAll('.menu-reponsive.hidden a');

menuLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        var targetSectionId = this.getAttribute('href');
        var targetSection = document.querySelector(targetSectionId);
        if (targetSection) {
            var offset = targetSection.offsetTop;
            var duration = 4800; 
            var start = window.pageYOffset;
            var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

            var scroll = function () {
                var now = 'now' in window.performance ? performance.now() : new Date().getTime();
                var time = Math.min(1, ((now - startTime) / duration));
                var distance = offset * time;
                window.scrollTo(0, start + distance);

                if (distance < offset) {
                    requestAnimationFrame(scroll);
                }
            };

            scroll();
        }
    });
});

function openCompany(evt, companyName) {
 
    var tabcontent = document.getElementsByClassName("tabcontent-company");
    var tablinks = document.getElementsByClassName("tablink-company");

    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(companyName).style.display = "block";

    evt.currentTarget.classList.add("active");
}

document.getElementById("defaultOpen").click();




