const sr = ScrollReveal({
    origin: 'left',
    distance: '20px',
    duration: 2000,
    reset: true
})

sr.reveal('.scroll-projects',{});


function toggleModal(modalID){
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}

