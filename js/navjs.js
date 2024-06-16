$(() => {
    const navMenu = $('#headnav');
    const navMenuItems = $('#headnav a');

    navMenuItems.each((_, item) => {
        const $item = $(item);
        const href = $item.attr('href');
        const path = window.location.pathname;

        if (path === href) {
            $item.addClass('active');
        }
    });

    $("#header-menu-toggle").on('click', function () {
        navMenu.toggleClass("active");
    });
});
