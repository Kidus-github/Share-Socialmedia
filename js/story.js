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

storycontainer.forEach((element, index, array) => {element.addEventListener('click', ()=>{

    // console.log('story clicked: ' + element + ' ' + index + ' '+ array[index]);
    window.location.href = 'story.php';

})});

let Storyarr = [
    [
        Story(567, 321,'./img/photos-to-be-used/status-4.png', '2:34', '8:54'),
        Story(890, 321,'./img/photos-to-be-used/biya2.png', '2:34', '8:54'),
        Story(123, 321,'./img/photos-to-be-used/status-1.png', '2:34', '8:54')
    ],

    [
        Story(654, 456,'./img/photos-to-be-used/status-2.png', '2:34', '8:54'),
        Story(890, 456,'./img/photos-to-be-used/status-3.png', '2:34', '8:54')
    ],
    
    [
        Story(567, 321,'./img/photos-to-be-used/status-4.png', '2:34', '8:54'),
        Story(123, 321,'./img/photos-to-be-used/status-1.png', '2:34', '8:54')
    ],
    [
        Story(654, 456,'./img/photos-to-be-used/status-2.png', '2:34', '8:54')
    ],

    [
        Story(890, 198,'./img/photos-to-be-used/status-3.png', '2:34', '8:54'),
        Story(567, 198,'./img/photos-to-be-used/status-4.png', '2:34', '8:54'),
        Story(890, 198,'./img/photos-to-be-used/status-3.png', '2:34', '8:54'),
        Story(567, 198,'./img/photos-to-be-used/status-4.png', '2:34', '8:54')
    ]
];
// const uniqueArray = Storyarr.filter((value, index, self) => {
//     console.log(value);
//   return self.indexOf(value.user_id) === index;
// });

// let Uniquearr = Array.from(new Set(Storyarr));
// console.log(uniqueArray);

Storyarr.forEach((element)=>{createstory(pickone(element))});
    

    
    

function pickone(element) {
    return element[Math.floor(Math.random() * element.length)];
}


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

    return './img/photos-to-be-used/biya2.png'
}


