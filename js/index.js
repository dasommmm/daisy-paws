scrollHeader();
goToTop();
iconUp();

function scrollHeader(){
    const header = document.getElementsByTagName('header')[0];

    window.addEventListener('mousewheel' , (e) => {
        // console.log(e.deltaY);
        // 0보다 작을때 위로 올라감 (header 나타나게)
        if(e.deltaY<0){
            header.classList.remove('header-hide');
        }else{
            header.classList.add('header-hide');
        }
    })
}


function goToTop(){
    const topBut = document.querySelector('.top');

    topBut.addEventListener('click', (e) =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

}


function iconUp(){
    const iconCon = document.getElementsByClassName('icon-con')
    const summaryIcon = document.getElementsByClassName('summary-icon')

    console.log(iconCon[0].getBoundingClientRect().top)
}