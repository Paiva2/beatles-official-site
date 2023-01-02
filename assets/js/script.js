'use scrict';

const images = [

    { 'id': '1', 'url': './assets/img/slideimgs/1.jpg' },
    { 'id': '2', 'url': './assets/img/slideimgs/2.jpg' },
    { 'id': '3', 'url': './assets/img/slideimgs/3.jpg' },
    { 'id': '4', 'url': './assets/img/slideimgs/4.jpg' },
    { 'id': '5', 'url': './assets/img/slideimgs/6.jpg' },
    { 'id': '6', 'url': './assets/img/img2.jpg' },

];

const containerItens = document.querySelector('#container-items')

const loadImages = ( images, container ) => {
    images.forEach( image => {
        container.innerHTML += `
        <div class='items'><img src='${image.url}'</div>`
    })
}

loadImages( images, containerItens );

let items = document.querySelectorAll('.items') 

const next = () => {
    const lastItem = items[items.length -1];
    containerItens.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.items');
}

const previous = () => {
    let items = document.querySelectorAll('.items') 
    containerItens.appendChild(items[0]);
    items = document.querySelectorAll('.items');

}
document.getElementById('leftbtn-slide').addEventListener('click', previous)
document.getElementById('rightbtn-slide').addEventListener('click', next)


function socialContents(){
    const socialMedias = document.getElementById('social-medias');
    const topContent = document.getElementById('container-top');

    socialMedias.addEventListener('click', (e)=>{
    if(e.target.className == 'fa fa-twitter circle'){
        window.location = 'https://twitter.com/thebeatles'
    }else if (e.target.className == 'fa fa-instagram circle'){
        window.location = 'https://www.instagram.com/thebeatles/'
    }else if (e.target.className == 'fa fa-facebook circle'){
        window.location = 'https://www.facebook.com/Beatles'
    }else if (e.target.className == 'fa fa-youtube circle'){
        window.location = 'https://www.youtube.com/thebeatles'
    }});
    topContent.addEventListener('click', (e)=>{
    if(e.target.className == 'logo'){
        window.location = 'https://www.thebeatles.com/'
    }
    });
}

function darkTheme() {
    const changeTheme = document.querySelector('.change-btn');
    const themeCss = document.getElementById('themeCss');
    console.log(themeCss)

    document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('change-btn')){
            changeTheme.className = 'change-btnON'
            document.querySelector("link[href='./assets/css/style.css']").href = "./assets/css/styleDark.css"
        }else if(el.classList.contains('change-btnON')){
            changeTheme.className = 'change-btn'
            document.querySelector("link[href='./assets/css/styleDark.css']").href = "./assets/css/style.css"
        };
    });
};
darkTheme();

socialContents();