// Swap pictures by pressing the button


//SOLUTION:


document.addEventListener('DOMContentLoaded', function () {
    const firstPic = document.getElementById('firstPic');
    const secondPic = document.getElementById('secondPic');
    const btnSwap = document.getElementById('btnSwap');
    let isFirstPicVisible = true;

    btnSwap.addEventListener('click', function () {
        if (isFirstPicVisible) {
            firstPic.style.display = 'none';
            secondPic.style.display = 'block';
        } else {
            firstPic.style.display = 'block';
            secondPic.style.display = 'none';
        }
        isFirstPicVisible = !isFirstPicVisible;
    });
});


