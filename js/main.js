import { fetchData, postData } from "./modules/TheDataMiner.js";

(() => {

    const modal = document.querySelector("#modal");
    const closeButton = document.querySelectorAll('[data-close-button]'),
            popImage = document.querySelector(".imgSection img"),
            name = document.querySelector(".content .name p"),
            about = document.querySelector(".about p");

        console.log('loaded');
    
        function popErrorBox(message) {
            alert("Something has gone horribly, horribly wrong");
        }

        function retrieveProjectInfo(event) {
            // test for an ID
            if(!event.target.id){ return }
    
            // fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
            fetchData(`./includes/index.php?id=${event.target.id}`).then(data => openLightBox(data)).catch(err => console.log(err));
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



        // const imgSelector = document.querySelectorAll('.user-section img'),
        // closeButton = document.querySelectorAll('[data-close-button]'),
        // imagePop = document.querySelector('.lightbox .imgSection img'),
        // blurBG =document.querySelector('.mainCon');

        // let tempImg = document.querySelector('.user  img');



    // light Box Work
    // function changeImage(){
    //     imagePop.src = `images/${this.dataset.image}.jpg`;
    //     console.log("change Image");
    // }


    function openLightBox(data){
        if(modal == null) return;
        modal.classList.add('activePop');
        
        changeContent(data);
    }

    function changeContent(data){

        for(let user in data){
            popImage.src = `images/${data[user].image}`;
            name.textContent = data[user].name;
            about.textContent = data[user].about;
        }

    }

    function closeBox(data)
      {
        if(modal == null) return;
        modal.classList.remove('activePop');
        // blurBG.classList.remove('blurBG');
      }

    // imgSelector.forEach(img => img.addEventListener('click', function(){
    //     const modal = document.querySelector(img.dataset.modal);
    //     lightBox(modal);
    //   }));

      closeButton.forEach(button => button.addEventListener('click', function(){
        const modal = button.closest('.lightbox');
        closeBox(modal);
      }));

    //   imgSelector.forEach(anim => anim.addEventListener("click", changeImage));

})();