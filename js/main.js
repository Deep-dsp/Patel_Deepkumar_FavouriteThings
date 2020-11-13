(() => {

    const imgSelector = document.querySelectorAll('.user-section img'),
        closeButton = document.querySelectorAll('[data-close-button]'),
        overlay = document.querySelector('.overlay'),
        imagePop = document.querySelector('.lightbox .imgSection img'),
        blurBG =document.querySelector('.mainCon');


    function changeImage(){
        imagePop.src = `images/${this.dataset.image}.jpg`;
        console.log("change Image");
    }

    function lightBox(modal){
        if(modal == null) return;
        modal.classList.add('activePop');
        blurBG.classList.add('blurBG');
    }

    function closeBox(modal)
      {
        if(modal == null) return;
        modal.classList.remove('activePop');
        blurBG.classList.remove('blurBG');
      }

    imgSelector.forEach(img => img.addEventListener('click', function(){
        const modal = document.querySelector(img.dataset.modal);
        lightBox(modal);
      }));

      closeButton.forEach(button => button.addEventListener('click', function(){
        const modal = button.closest('.lightbox');
        closeBox(modal);
      }));

      imgSelector.forEach(anim => anim.addEventListener("click", changeImage));

})();