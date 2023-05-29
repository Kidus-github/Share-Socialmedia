// import {Post} from './post.js'
// import {User} from './user.js'
// import {like} from ''

let explore = document.getElementsByClassName('Explore');
let home = document.getElementsByClassName('Home');
let body= document.getElementsByTagName('body')[0];
let sharePhoto = document.getElementsByClassName('photo-video');


let profile = document.getElementsByClassName('user')

explore[0].addEventListener('click', ()=>{
        console.log('explore clicked');
        window.location.assign("explore.php");
    });

profile[0].addEventListener('click', ()=>{
    console.log('profile clicked');
    window.location.assign("profile.php");
});


home[0].addEventListener('click', ()=>{
    console.log('explore clicked');
    window.location.assign("index.php")
});

sharePhoto[0].addEventListener('click', ()=>{
    document.getElementById('file_input').click();
});


//  =

// let user = User('abebe', 'kebede', 'blabla', 'abebe@gmail.com','', '2023-01-23' );
// console.log(user);

