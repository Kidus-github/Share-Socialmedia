import { fetchFriends, friend } from './index.js';


fetchFriends()
    .then(friend => {
      console.log(friend);
      friend.forEach((element, index)=>{
        if(index < 4){
            createFriendRequest(element);
        }
      });
      var seemore = document.querySelector('.seemore');
      seemore.addEventListener('click', () => {
    
        if(friend.length > 5){
            for(let i = 4; i < friend.length; i++){
                createFriendRequest(friend[i]);
            }
        }
        console.log('seemore')
    
    });
      // userid= userdata.id // Access the userdata
      // Use the userdata or pass it to other functions
    })
    // .then(() => {
      
    // })
    .catch(error => {
      console.log('Error:', error);
    });



    



export function Friends(friendRequest_id, user_id,friend_id,status,action_user_id) {
    return{
    friendRequest_id,
    user_id,
    friend_id,
    status,
    created_at: null,
    updated_at: null,
    action_user_id,
    is_deleted: false,
    blocked_at: false,
    };
}





// fetchUserData()
//   .then(userdata => {
//     console.log(userdata);
//     userid= userdata.id // Access the userdata
//     // Use the userdata or pass it to other functions
//   }).then(() => {
    
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });



function createFriendRequest(friendRequest){

    let requests = document.querySelector('.requests');

    let request= document.createElement('div');
    request.classList.add('request1');

    let profile_and_mutualFriends= document.createElement('div');
    profile_and_mutualFriends.classList.add('profile-and-mutualFriends');

    let profilepic = document.createElement('img');
    profilepic.src = friendRequest.profile_picture;

    let user_and_mutualFriends = document.createElement('div');
    user_and_mutualFriends.classList.add('user-and-mutualFriends');

    let username = document.createElement('h3');
    username.innerHTML = friendRequest.fname+ ' '+ friendRequest.lname;

    let pharagraph = document.createElement('P');
    pharagraph.innerHTML = countMutualFriends(friendRequest.user_id, friendRequest.friend_id) + ' mutual friends';


    user_and_mutualFriends.appendChild(username);
    user_and_mutualFriends.appendChild(pharagraph);

    profile_and_mutualFriends.appendChild(profilepic);
    profile_and_mutualFriends.appendChild(user_and_mutualFriends);

    let friend_status = document.createElement('div');
    friend_status.classList.add('friend-status');

    let acceptbtn = document.createElement('button');
    acceptbtn.classList.add('accept');
    acceptbtn.setAttribute('data-userId',  (friendRequest.friend_id).toString());

    acceptbtn.innerHTML = 'Accept';
    
    acceptbtn.addEventListener('click', (e) =>{
        console.log('accept btn clicked');
        let id =e.target.dataset.userid;
            request.classList.add('hide');
        accept(id)
    });

    
    let declinebtn = document.createElement('button');
    declinebtn.classList.add('decline');
    declinebtn.setAttribute('data-userId',  (friendRequest.friend_id).toString());

    declinebtn.innerHTML = 'Decline';

    declinebtn.addEventListener('click', (e) =>{
        console.log('decline btn clicked');
        let id = e.target.dataset.userid;
        request.classList.add('hide');
        decline(id);
    });

    friend_status.appendChild(acceptbtn);
    friend_status.appendChild(declinebtn);

    request.appendChild(profile_and_mutualFriends);
    request.appendChild(friend_status);

    requests.appendChild(request);
     
}


function countMutualFriends(user_id, friend_id){
    return '3' ;
}

function accept(userid) {
    console.log(userid + ' accepted');
    console.log("accepted");
  
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "accept.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let data = xhr.response;
          console.log(data);
        }
      }
    };
    xhr.send("userid=" + userid); // Pass the userid as a parameter
  }
  

function decline(userid){
    console.log(userid + ' declined');

        console.log("declined");
      
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "decline.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = () => {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              let data = xhr.response;
              console.log(data);
            }
          }
        };
        xhr.send("userid=" + userid); // Pass the userid as a parameter

}
// let  friendsarray = [
//     Friends(12,32,2,'pending', '2'),
//     Friends(12,32,3,'pending', '2'),
//     Friends(12,32,4,'pending', '2'),
//     Friends(12,32,5,'pending', '2'),
//     Friends(12,32,9,'pending', '2'),
//     Friends(12,32,6,'pending', '2'),
//     Friends(12,32,8,'pending', '2')

//   ];

// friendsarray.forEach((element, index) => { 
//     if(index < 4){
//         createFriendRequest(element);
//     }
// });


  