scrollHeader();
goToTop();
// iconUp();
// moveUp();




makeMove('summary-icon','0.6s');
makeMove('mockup-png', '0.8s');
makeMove('move-right', '0.8s');

function makeMove(className,time) {
    const classContainer = document.getElementsByClassName(className);

    for(let i=0; i<classContainer.length; i++){
        
        window.addEventListener('scroll', (e)=>{
            console.log(classContainer[i].getBoundingClientRect().top);

            if(classContainer[i].getBoundingClientRect().top - window.innerHeight < 0){
                classContainer[i].classList.add('show')
                classContainer[i].style.transitionDuration = time;
                
            }else{
                classContainer[i].classList.remove('show')
                classContainer[i].style.transitionDuration = '0s';
            }
        })
    }
}


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


// function iconUp(){
//     const summary = document.getElementById('summary')
//     const summaryIcon = document.getElementsByClassName('summary-icon')

//     // console.log(window.innerHeight)
//     // console.log(iconCon.length)
    
//     for(let i=0; i<summaryIcon.length; i++){ //summaryIcon.length이부분 맞는지
       
//         window.addEventListener('scroll',(e)=>{
//             // console.log(summary.getBoundingClientRect().top-window.innerHeight/3)

//             // if(summary.getBoundingClientRect().top-window.innerHeight/3<0){
//             if(summaryIcon[i].getBoundingClientRect().top-window.innerHeight<0){
//                 summaryIcon[i].classList.add('show');
//             }else{
//                 summaryIcon[i].classList.remove('show');
//             }

//         })

//     }

// }

// function moveUp(){
//     const mockup = document.getElementsByClassName('mockup-png');
//     const moveRight = document.getElementsByClassName('move-right');

//     for(let i=0; i<mockup.length; i++){
        
//         window.addEventListener('scroll', (e)=>{
//             console.log(mockup[i].getBoundingClientRect().top);

//             if(mockup[i].getBoundingClientRect().top - window.innerHeight < 0){
//                 mockup[i].classList.add('show')

//             }else{
//                 mockup[i].classList.remove('show')
//             }
//         })
//     }
// }


// ==============================================================

// window.innerWidth가 ~미만일때 이벤트넣기
// 리사이즈했을때 이너윗스가 ~미만이면 이벤ㅌ 넣고 이상이면 빼기


// window.addEventListener('resize', () =>{   
//     const mobileBack = document.getElementsByClassName('mobile-back'); 
    
//     if(window.innerWidth < '904px'){
//         mobileBack.addEventListener('resize',bluePink)
//     }else{
//         mobileBack.removeEventListener('resize',bluePink)
//     }
// });

// function bluePink(e){
//     const mobileBack = document.getElementsByClassName('mobile-back');
    
//     for(let i=0; i<mobileBack.length; i++){
//         window.addEventListener('scroll', (e)=>{
//             if(mobileBack[1].getBoundingClientRect().top < 0){
//                 mobileBack[i].classList.add('change')
//             }else{
//                 mobileBack[i].classList.remove('change')
//             }
//         });
//     }
// }    

// ===========================================

const mobileBack = document.getElementsByClassName('mobile-back');
    
for(let i=0; i<mobileBack.length; i++){
    window.addEventListener('scroll', (e)=>{
        if(mobileBack[1].getBoundingClientRect().top < 0){
            mobileBack[i].classList.add('change')
        }else{
            mobileBack[i].classList.remove('change')
        }
    });
}

