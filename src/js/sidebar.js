

function initSidebar() {
    const $sidebar = $('.menu');

    $('.burger').on('click', () => {
        $sidebar.toggleClass('closed');
        setInterval(()=>{
            window.a.reflow();
        }, 1000/60);
        
    });

}

module.exports.initSidebar = initSidebar;
