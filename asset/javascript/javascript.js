// navbar
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// slider 
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    duration: 500,
    interval: 3000
});

// client

const client = document.querySelectorAll('.parallax');
M.Parallax.init(client);

// portovollio 
const materialboxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialboxed);

// scrollspay
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50
});