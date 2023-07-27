const iconOpen = document.getElementById('mobile-open')
const iconClose = document.getElementById('mobile-close')
const modal = document.getElementById('mobile-nav')
const header = document.getElementById('header')
const headerLogoMobile = document.getElementById('header-logo-mobile')

function toggleButtons(buttonId) {
    console.log(modal)
    if (buttonId === 'mobile-open') {
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
        modal.classList.remove('hidden')
        return
    }   
    
    iconClose.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    modal.classList.add('hidden')
}

iconOpen.addEventListener('click', function() {
    toggleButtons('mobile-open');
});

iconClose.addEventListener('click', function() {
    toggleButtons('mobile-close');
});

header.addEventListener('click', function(event) {
    if ([header, headerLogoMobile].includes(event.target)) {
        toggleButtons('mobile-close');
    }
});

modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        toggleButtons('mobile-close');
    }
});
