const sidenav = document.getElementById('mySidenav');
const menu = document.getElementById('main');

function openNav() {
    // Sidenav will span 300px width
    sidenav.style.width = '300px';
    // Navbar will also span 300px width
    menu.style.marginLeft = '300px';
}

function closeNav() {
    // Sidenav will back to normal width and hide the sidebar
    sidenav.style.width = '0';
    // Navbar will also back to norma width
    menu.style.marginLeft = '0';
}

$(document).ready(function () {
    $('#subnav-gallery').click(function (e) {
        $('#toggle-subnav-gallery').slideDown(400);
        e.preventDefault();
    });
});