function createstoryslide(data){
    //check if the data has a story which is not expired and can be displayed
    // for each story available create a imgage element and append it to slide items
    
    let slideItems = document.querySelector('.slide-items');

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
        this.items = this.slide.querySelectorAll('.slide-items > *');
        this.thumb = this.slide.querySelector('.slide-thumbs')
        this.addThumbItems()
        this.activeSlide(0)
        this.addNavigation()
    }
}

new SlideStories('slide');



window.onload = () => {
    if (window.location.pathname === 'story.php'){
        createstoryslide(34);
    }
}

let close = document.querySelector('.close');
close.addEventListener('click', () =>{
    history.back();
});