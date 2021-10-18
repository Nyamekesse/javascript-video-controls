const btn = document.querySelectorAll('.video-switch span');
const videoBox = document.querySelector ('.video-container');


btn.forEach((button)=> {
    button.addEventListener('click', (e)=> {
        currentState = e.currentTarget.data.id;
    });
    console.log(currentState);
})