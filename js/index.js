scrollHeader();
goToTop();
iconUp();
moveUp();

function scrollHeader(){
    const header = document.getElementsByTagName('header')[0];

    let preScroll = 0;
    window.addEventListener('scroll', (e) => {
        // console.log(window.scrollY);
        const nowScroll = window.scrollY;
        const direction = preScroll<nowScroll //스크롤 밑으로 내렸을때
        // console.log(direction)
        if(direction){
            header.classList.add('header-hide');
        }else{
            header.classList.remove('header-hide');
        }
        
        preScroll=nowScroll;
    })

    // }
    // window.addEventListener('mousewheel' , (e) => {
    //     // console.log(e.deltaY);
    //     // 0보다 작을때 위로 올라감 (header 나타나게)
    //     if(e.deltaY<0){
    //         header.classList.remove('header-hide');
    //     }else{
    //         header.classList.add('header-hide');
    //     }
    // })
}


function goToTop(){
    const topBut = document.querySelector('.top');

    topBut.addEventListener('click', (e) =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

}


function iconUp(){
    const summary = document.getElementById('summary')
    const summaryIcon = document.getElementsByClassName('summary-icon')

    // console.log(window.innerHeight)
    // console.log(iconCon.length)
    
    for(let i=0; i<summaryIcon.length; i++){ //summaryIcon.length이부분 맞는지
       
        window.addEventListener('scroll',(e)=>{
            // console.log(summary.getBoundingClientRect().top-window.innerHeight/3)

            if(summary.getBoundingClientRect().top-window.innerHeight/3<0){
                summaryIcon[i].classList.add('show');
            }else{
                summaryIcon[i].classList.remove('show');
            }

        })

    }

}

function moveUp(){
    const sectionMove = document.getElementsByClassName('section-move');
    const mockup = document.getElementsByClassName('wrapper');

    for(let i=0; i<sectionMove.length; i++){
        
        window.addEventListener('scroll', (e)=>{
            console.log(sectionMove[0].getBoundingClientRect().top);

            if(sectionMove[0].getBoundingClientRect().top < 0){
                mockup[i].classList.add('move-up')
            }else{
                mockup[i].classList.remove('move-up')
            }
        })
    }
}