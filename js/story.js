function createstoryslide(data){
    //check if the data has a story which is not expired and can be displayed
    // for each story available create a imgage element and append it to slide items
    
    let slideItems = document.querySelector('slide-items')[0];

    let image1 = document.createElement('img');
    image1.src = "./img/photos-to-be-used/status-1.png"

    let image2 = document.createElement('img');
    image2.src = "./img/photos-to-be-used/status-2.png";

    let image3 = document.createElement('img');
    image3.src= "./img/photos-to-be-used/status-3.png";

    let image4 = document.createElement('img');
    image4.src= "./img/photos-to-be-used/status-4.png" 

    
    slideItems.appendChild(image1);
    slideItems.appendChild(image2);


}
class SlideStories {
    /** @param {string} id */
    constructor(id) {
        this.slide = document.querySelector(`[data-slide=${id}]`)
        this.active = 0
        this.init()
    }

    /** @param {Number} index */
    activeSlide(index) {
        this.active = index
        this.items.forEach((item) => item.classList.remove('active'))
        this.items[index].classList.add('active')
        this.thumbItems.forEach((item) => item.classList.remove('active'))
        this.thumbItems[index].classList.add('active')
        this.autoSlide()
    }

    next() {
        if (this.active < this.items.length - 1) {
            this.activeSlide(this.active + 1)
        } else {
            this.activeSlide(0)
        }
    }

    prev() {
        if (this.active > 0) {
            this.activeSlide(this.active - 1)
        } else {
            this.activeSlide(this.items.length - 1)
        }
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next')
        const prevBtn = this.slide.querySelector('.slide-prev')
        nextBtn.addEventListener('click', this.next)
        prevBtn.addEventListener('click', this.prev)
    }

    addThumbItems() {
        this.items.forEach(() => (this.thumb.innerHTML += `<span class="slide-thumb-item"></span>`))
        this.thumbItems = Array.from(this.thumb.children)
    }

    autoSlide() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(this.next, 5000)
    }

    init() {
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.items = this.slide.querySelectorAll('.slide-items > *')
        this.thumb = this.slide.querySelector('.slide-thumbs')
        this.addThumbItems()
        this.activeSlide(0)
        this.addNavigation()
    }
}









export function Story(story_id, user_id, content, timestamp, expiration_timestamp){
    return{
    story_id,
    user_id,
    content,
    timestamp,
    expiration_timestamp,
    is_deleted: false,
    is_archived: false,
    views: 0,
    likes: 0,
    };
}
function createstory(storys){
    let story= document.createElement('div');
    story.classList.add('story');
    story.setAttribute('data-index', storys.user_id);
    let storyprofile = document.createElement('img');
    storyprofile.src = getprofileurl(storys.user_id);
    storyprofile.classList.add('story-profile');
    let username = document.createElement('h4');
    username.innerHTML = getfullname(storys.user_id);

    story.style.backgroundImage = `url(${getbackgroundImage(storys.user_id)} )`;

    story.appendChild(storyprofile);
    story.appendChild(username);
    let appendstory = document.querySelector('.storys');
    appendstory.appendChild(story);
    console.log('created story highlight')
}

let storycontainer = document.querySelectorAll('.container .storys[class^="story"]');

storycontainer.forEach(element => element.addEventListener('click', ()=>{
    // Uniquearr.forEach((element)=>{})
    createstoryslide(element);
    new SlideStories('slide');
    let close = document.querySelector('.close');
    close.addEventListener('click', () =>{
        history.back();
    });
    // window.location.href= 'story.php?param=' + encodeURIComponent(element.story.user_id);   
}));

let Storyarr = [
    Story(123, 321,'./img/photos-to-be-used/status-1.png', '2:34', '8:54'),
    Story(654, 456,'./img/photos-to-be-used/status-2.png', '2:34', '8:54'),
    Story(890, 198,'./img/photos-to-be-used/status-3.png', '2:34', '8:54'),
    Story(567, 198,'./img/photos-to-be-used/status-4.png', '2:34', '8:54'),
    Story(890, 198,'./img/photos-to-be-used/status-3.png', '2:34', '8:54'),
    Story(567, 198,'./img/photos-to-be-used/status-4.png', '2:34', '8:54'),
    Story(123, 321,'./img/photos-to-be-used/status-1.png', '2:34', '8:54'),
    Story(654, 456,'./img/photos-to-be-used/status-2.png', '2:34', '8:54'),
    Story(890, 198,'./img/photos-to-be-used/status-3.png', '2:34', '8:54'),
    Story(567, 198,'./img/photos-to-be-used/status-4.png', '2:34', '8:54'),
    Story(890, 198,'./img/photos-to-be-used/status-3.png', '2:34', '8:54'),
    Story(567, 198,'./img/photos-to-be-used/status-4.png', '2:34', '8:54')
];
const uniqueArray = Storyarr.filter((value, index, self) => {
    console.log(value);
  return self.indexOf(value.user_id) === index;
});

// let Uniquearr = Array.from(new Set(Storyarr));
console.log(uniqueArray);
Storyarr.forEach((element)=>{createstory(element)});




function getprofileurl(userid){
    // for the user id it gets the profile pic url

    return "img/photos-to-be-used/profile-pic.png"
}

function getfullname(userid){
    // featchs the user name from database and fill it here
    return "kidus girma"
}

function getbackgroundImage(userid){
    // featch the storys by this userid and picks one random story or the one with resent timestamp and put it as a background

    return './img/photos-to-be-used/profile-pic.png'
}


