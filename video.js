const btn = document.querySelectorAll('span');
const videoBox = document.querySelector ('.video-container');



btn.forEach((button)=> {
    button.addEventListener('click', (e)=> {;
        const updater = e.currentTarget;
        updater.classList.add('active');
    
        btn.forEach((element)=> {
            element.addEventListener('click', (e)=> {
                let currentBtn = e.currentTarget;
                if (updater !== currentBtn) {
                    updater.classList.remove('active');
                }
            });
    
        });

        const currentState = e.currentTarget.dataset.id;
        if (currentState === "pause") {
            videoBox.pause();
        }
        else if(currentState === "play"){
            videoBox.play();
        }

    });

});

// preloader
const loader = document.querySelector('.preloader-container');

window.addEventListener('load', ()=> {
    loader.classList.add('hidden');
})