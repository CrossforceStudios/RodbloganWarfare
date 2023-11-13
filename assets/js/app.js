

let navBtns = document.querySelector(".rw-nav-menu-btn");

navBtns.forEach(function(ele) {
    ele.addEventListener("click", function() {
        let navMenu = document.getElementById(ele.dataset.navid);

        ele.classList.toggle("active");

        navMenu.classList.toggle("active");
    });
});