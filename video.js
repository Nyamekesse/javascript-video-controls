const btn = document.querySelectorAll('.video-switch span');
const videoBox = document.querySelector ('.video-container');


btn.forEach((button)=> {
    button.addEventListener('click', (e)=> {;
        const currentState = e.currentTarget.dataset.id;
       
        if (currentState === "pause") {
            videoBox.pause();
        }
        else {
            videoBox.play();
        }

    });
    
    
});