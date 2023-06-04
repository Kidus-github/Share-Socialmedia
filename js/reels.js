let video = document.querySelector('video');

video.forEach(element => {
    let playpromise = element.play();
    if (playpromise !== undefined){
        playpromise.then(() =>{
            let observer = new IntersectionObserver(entity =>{
                entity.forEach(entry => {
                    element.muted = false;
                    if (entry.intersectionRatio !== 1 && !video.paused){
                        element.pause();
                    }else if(entry.intersectionRatio > 0.5 && element.paused){
                        element.play();
                    }
                })
            }, {threshold: 0.5});

            observer.observe(element);
        })
    }
});