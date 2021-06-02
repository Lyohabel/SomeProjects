window.addEventListener('load', function() {

    let tabButtons = document.querySelector('.tab-buttons'),
        tabButs = tabButtons.children,
        tabItems = document.querySelector('.tab-items'),
        tabIts = tabItems.children,
        chooseItem = function() {
            for (let i = 0; i < tabButs.length; i++) {
                tabButs[i].addEventListener('click', function() {
                    for (let j = 0; j < tabButs.length; j++) {
                        tabButs[j].classList.remove('activ');
                        tabIts[j].classList.remove('show');
                    }
                    this.classList.add('activ');
                    tabIts[i].classList.add('show');
                });            
            }
        };
        
        chooseItem();
});