const navbar = document.getElementById('aexar-navbar');
const navbarBaseColor = 'is-dark';




function toTwitch() {
  //window.location.hash = '#twitch';
  document.querySelector('#twitch').scrollIntoView({
    behavior: 'smooth'
  });
}
function toContact() {
  //window.location.hash = '#contact';
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
  });
}
function toFaq() {
  //window.location.hash = '#faq';
  document.querySelector('#faq').scrollIntoView({
    behavior: 'smooth'
  });
}

if (navbar) {
	window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('is-freestanding');
            navbar.classList.add(navbarBaseColor);
        } else {
            navbar.classList.remove('is-freestanding');
            navbar.classList.remove(navbarBaseColor);
        }
    });
}

/*document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});*/
