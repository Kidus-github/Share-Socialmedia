// import {Post} from './post.js'
 import {User} from './user.js'
 import {Friends} from './friends.js'
// import {like} from ''

let explore = document.getElementsByClassName('Explore');
let home = document.getElementsByClassName('Home');
let message = document.getElementsByClassName('Message');
let body= document.getElementsByTagName('body')[0];
let search = document.querySelector('.Search');
// let sharePhoto = document.getElementsByClassName('photo-video');




let profile = document.getElementsByClassName('user');

let profilepic = document.getElementsByClassName('profile');
let profilepic2 = document.getElementsByClassName('profile-img');
// let msg= document.querySelector('.msg p');

explore[0].addEventListener('click', ()=>{
        console.log('explore clicked');
        window.location.assign("explore.php");

    });

profile[0].addEventListener('click', ()=>{
    console.log('profile clicked');
    window.location.assign("profile.php");

});
message[0].addEventListener('click', ()=>{
    console.log('message clicked');
    window.location.assign("message.php");
    
});

home[0].addEventListener('click', ()=>{
    console.log('explore clicked');
    window.location.assign("index.php");
    

});
search.addEventListener('click', ()=>{
      console.log('search clicked');
      let search_section= document.querySelector('.search_section');
      search_section.classList.remove('hide');
      search_section.classList.add('animate');
      
      var head = document.head || document.getElementsByTagName('head')[0];
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/search.css';
      head.appendChild(link);
});

// sharePhoto[0].addEventListener('click', ()=>{
//     document.getElementById('file_input').click();
// });

// let userdata, user;

// function fetchUserData(callback) {
//   fetch('getuser.php')
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       user = data;
//       console.log(user);

//       userdata = User(data.id, data.fname, data.lname, data.password_hash, data.email, data.gender, data.date_of_birth);
//       userdata.profile_picture = data.profile_picture;
//       userdata.bio = data.bio;
//       userdata.website = data.website;
//       userdata.Status = data.Status;
//       userdata.created_at = data.created_at;
//       userdata.updated_at = data.updated_at;
//       userdata.location = data.location;
//       userdata.phone_number= data.phone_number;
//       userdata.is_verified= data.is_verified;
//       userdata.is_active = data.is_active;
//       userdata.timezone= data.timezone;
//       userdata.notification_setting = data.notification_setting;
//       userdata.last_login = data.last_login;
//       userdata.login_count = data.login_count;

//       callback(userdata); // Call the callback function with the userdata
//     })
//     .catch(function(error) {
//       console.log('Error:', error);
//     });
// }

// fetchUserData(function(userdata) {
//   console.log(userdata);
//    userdata // Use the userdata here or pass it to other functions
// });
let userdata;
let friend = [];

function fetchUserData() {
  return new Promise((resolve, reject) => {
    fetch('getuser.php')
      .then(response => response.json())
      .then(data => {
        userdata = User(data.id, data.fname, data.lname, data.password_hash, data.email, data.gender, data.date_of_birth);
        userdata.profile_picture = data.profile_picture;
        userdata.bio = data.bio;
        userdata.website = data.website;
        userdata.Status = data.Status;
        userdata.created_at = data.created_at;
        userdata.updated_at = data.updated_at;
        userdata.location = data.location;
        userdata.phone_number = data.phone_number;
        userdata.is_verified = data.is_verified;
        userdata.is_active = data.is_active;
        userdata.timezone = data.timezone;
        userdata.notification_setting = data.notification_setting;
        userdata.last_login = data.last_login;
        userdata.login_count = data.login_count;

        resolve(userdata);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export { fetchUserData, userdata };





function fetchFriends() {
      return new Promise((resolve, reject) => {
        fetch('friends.php')
          .then(response => response.json())
          .then(data => {
            for(let i = 0; i < data.length; i++) {
            friend[i] = Friends(data[i].friendRequest_id, data[i].user_id, data[i].friend_id, data[i].status, data[i].action_user_id);
                friend[i].created_at = data[i].created_at;
                friend[i].updated_at = data[i].updated_at;
                friend[i].is_deleted = data[i].is_deleted;
                friend[i].blocked_at = data[i].blocked_at;
                friend[i].fname = data[i].fname;
                friend[i].lname = data[i].lname;
                friend[i].username = data[i].username;
                friend[i].profile_picture = data[i].profile_picture;
                friend[i].is_active = data[i].is_active;
            }
            
            resolve(friend);
        })
        .catch(error => {
          reject(error);
        });
    });
}
    export { fetchFriends, friend };


let userid;
fetchUserData()
  .then(userdata => {
    profilepic.src = userdata.profile_picture;
    profilepic2.src = userdata.profile_picture;
    console.log(userdata);
    userid= userdata.id // Access the userdata
    // Use the userdata or pass it to other functions
  }).then(() => {
    
  })
  .catch(error => {
    console.log('Error:', error);
  });

    // fetchFriends()
    // .then(friend => {
    //   console.log(friend);
    //   // userid= userdata.id // Access the userdata
    //   // Use the userdata or pass it to other functions
    // }).then(() => {
      
    // })
    // .catch(error => {
    //   console.log('Error:', error);
    // });

//  =

// let user = User('abebe', 'kebede', 'blabla', 'abebe@gmail.com','', '2023-01-23' );
// console.log(user);

