import { fetchData, postData } from "./modules/TheDataMiner.js";

(() => {

    const imgSelector = document.querySelectorAll('.user-section img'),
        closeButton = document.querySelectorAll('[data-close-button]'),
        imagePop = document.querySelector('.lightbox .imgSection img'),
        blurBG =document.querySelector('.mainCon');



        console.log('loaded');
    
        function popErrorBox(message) {
            alert("Something has gone horribly, horribly wrong");
        }

        function retrieveProjectInfo(event) {
            // test for an ID
            if(!event.target.id){ return }
    
            fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
        }
    
        function renderPortfolioThumbnails(thumbs)
        {
    
            let userSection = document.querySelector('.user-section'),
                userTemplate = document.querySelector('#user-template').content;
    
            for (let user in thumbs) {
                let currentUser = userTemplate.cloneNode(true),
                    currentUserText = currentUser.querySelector('.user').children;
    
                currentUserText[1].src = `images/${thumbs[user].image}`;
                currentUserText[1].id = thumbs[user].id;
    
                // add this new user to the view
                userSection.appendChild(currentUser);
            }
            
            // Event Delegation 
            userSection.addEventListener("click", retrieveProjectInfo);
        }


        fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => { console.log(err); popErrorBox(err); });





    // light Box Work
    // function changeImage(){
    //     imagePop.src = `images/${this.dataset.image}.jpg`;
    //     console.log("change Image");
    // }

    // function lightBox(modal){
    //     if(modal == null) return;
    //     modal.classList.add('activePop');
    //     blurBG.classList.add('blurBG');
    // }

    // function closeBox(modal)
    //   {
    //     if(modal == null) return;
    //     modal.classList.remove('activePop');
    //     blurBG.classList.remove('blurBG');
    //   }

    // imgSelector.forEach(img => img.addEventListener('click', function(){
    //     const modal = document.querySelector(img.dataset.modal);
    //     lightBox(modal);
    //   }));

    //   closeButton.forEach(button => button.addEventListener('click', function(){
    //     const modal = button.closest('.lightbox');
    //     closeBox(modal);
    //   }));

    //   imgSelector.forEach(anim => anim.addEventListener("click", changeImage));

})();