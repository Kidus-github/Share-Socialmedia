// import {Post} from './post.js'
 import {User} from './user.js'
 import {Friends} from './friends.js'
// import {like} from ''

let explore = document.getElementsByClassName('Explore');
let home = document.getElementsByClassName('Home');
let message = document.getElementsByClassName('Message');
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
message[0].addEventListener('click', ()=>{
    console.log('message clicked');
    window.location.assign("message.php");
});

home[0].addEventListener('click', ()=>{
    console.log('explore clicked');
    window.location.assign("index.php")
});

sharePhoto[0].addEventListener('click', ()=>{
    document.getElementById('file_input').click();
});

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
let userdata, friend;

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
            friend = Friends(data.friendRequest_id, data.user_id, data.friend_id, data.status, data.action_user_id);
                friend.created_at = data.created_at;
                friend.updated_at = data.updated_at;
                friend.is_deleted = data.is_deleted;
                friend.blocked_at = data.blocked_at;
            resolve(friend);
        })
        .catch(error => {
          reject(error);
        });
    });
}
    export { fetchFriends, friend };

    fetchFriends()
    .then(friend => {
      console.log(friend);
      // userid= userdata.id // Access the userdata
      // Use the userdata or pass it to other functions
    }).then(() => {
      
    })
    .catch(error => {
      console.log('Error:', error);
    });

//  =

// let user = User('abebe', 'kebede', 'blabla', 'abebe@gmail.com','', '2023-01-23' );
// console.log(user);

