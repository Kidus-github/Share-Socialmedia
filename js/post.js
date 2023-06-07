let post = [];
function fetchPost() {
    return new Promise((resolve, reject) => {
      fetch('post.php')
        .then(response => response.json())
        .then(data => {
          for(let i = 0; i < data.length; i++) {
          post[i] = Post(data[i].post_id,data[i].user_id, data[i].content, data[i].media, data[i].created_at, data[i].updated_at, data[i].visibility, data[i].is_edited, data[i].is_deleted, data[i].location);
          post[i].fname = data[i].fname;
          post[i].lname = data[i].lname;
          post[i].profile_picture = data[i].profile_picture; 
          post[i].is_liked = data[i].is_liked; 
          }
          
          resolve(post);
      })
      .catch(error => {
        reject(error);
      });
  });
}


fetchPost()
  .then(post => {
    console.log(post);
    // userid= userdata.id // Access the userdata
    // Use the userdata or pass it to other functions
    post.forEach((post)=>{createPostCard(post)});
  })
  .catch(error => {
    console.log('Error:', error);
  });

//   console.log(userid);

// Access the user data  id 
export function Post(post_id, user_id, content, media, created_at, updated_at, visibility, is_edited, is_deleted, location) {
    return{
        post_id,
        user_id,
        content,
        media,
        created_at,
        updated_at: null,
        visibility: 'pub',
        is_edited: false,
        is_deleted: false,
        location,
    };

}
let sharePhoto = document.getElementsByClassName('photo-video');

sharePhoto[0].addEventListener('click', ()=>{
    document.getElementById('file_input').click();
});

function createPostCard(Post){
    // creates a new card div
    let card = document.createElement('div');
    card.classList.add('card');
    let header = document.createElement('div');
    header.classList.add('header-section');


    let postidentity= document.createElement('div');
    postidentity.classList.add('post_identity');

    let identityimg = document.createElement('img');
    identityimg.classList.add('pro-pic');
    identityimg.src = Post.profile_picture;

    let identitydisc = document.createElement('div');
    identitydisc.classList.add('pro-name_and_discripton');
    let username = document.createElement('h4');
    username.innerHTML = Post.fname + ' ' + Post.lname;
    let location = document.createElement('p');
    location.innerHTML = Post.location;
    


    identitydisc.appendChild(username);
    identitydisc.appendChild(location);

    postidentity.appendChild(identityimg);
    postidentity.appendChild(identitydisc);
    
    let buttonmenu = document.createElement('button');
    buttonmenu.classList.add('card-btn');
    buttonmenu.innerHTML = '...';

    header.appendChild(postidentity);
    header.appendChild(buttonmenu);

    let main_body = document.createElement('div');
    main_body.classList.add('main_body');

    //work on this later medea type check mareg alebet then if it is video it uses diffrent class and the document to be created should be video
    //checkMedia(Post.media);

    let postedimg = document.createElement('img');
    postedimg.src = Post.media;
    postedimg.classList.add('posted_pic');

    main_body.appendChild(postedimg);


    let interactions = document.createElement('div');
    interactions.classList.add('interactions');
    let reactions = document.createElement('div');

    let heart = document.createElement('img');
    let dislike = "img/icons-to-be-used/heart-64.png", 
    liked = "img/icons-to-be-used/heart-48.png";
    
    if(Post.is_liked === '1'){
        console.log(Post.is_liked);
        heart.src = liked;
    }else{
        // console.log(Post.is_liked);
        heart.src = dislike;
    }
    
    
    heart.classList.add('heart', 'icon-reactions');
    heart.setAttribute('data-postId',  (Post.post_id).toString());

    heart.onclick = (e) =>{
        console.log('hello');
        let id = e.target.dataset.postid;
        console.log(heart.src);
        if(heart.src === "http://localhost/share/img/icons-to-be-used/heart-64.png"){
            heart.src = liked;
            Like(id);
            let increment = parseInt(numberoflikes.innerHTML);
            increment++;

            numberoflikes.innerHTML = increment.toString();
            // console.log(increment.toString());

            usercontent.innerHTML = numberoflikes.innerHTML + ' Likes';
        }
        else{
            heart.src = dislike
            UnlikeLike(id);
            let decrement = parseInt(numberoflikes.innerHTML);
            decrement--;

            numberoflikes.innerHTML = decrement.toString();
            // console.log(increment.toString());

            usercontent.innerHTML = numberoflikes.innerHTML + ' Likes';
        }

    };

    let comment= document.createElement('img');
    comment.src = "img/icons-to-be-used/comments-48.png";
    comment.classList.add('comment', 'icon-reactions');

    let share= document.createElement('img');
    share.src = "img/icons-to-be-used/share.png";
    share.classList.add('share', 'icon-reactions');

    reactions.appendChild(heart);
    reactions.appendChild(comment); 
    reactions.appendChild(share);

    let bookmark= document.createElement('img');
    bookmark.src = "img/icons-to-be-used/bookmark-64.png";
    bookmark.classList.add('bookmark', 'icon-reactions');

    
    reactions.classList.add('reactions');
    interactions.appendChild(reactions);
    interactions.appendChild(bookmark);


    let about_posts = document.createElement('div');
    about_posts.classList.add('about_post');

    let usercontent = document.createElement('h3');
    let numberoflikes = document.createElement('span');
    numberoflikes.classList.add('numOfLikes');

    getLikesCount(Post.post_id, function(data) {
        console.log("Likes count: " + data);
        numberoflikes.innerHTML = data.toString();
        usercontent.innerHTML = numberoflikes.innerHTML + ' Likes';
      });
   

    let content = document.createElement('p');
    let contentspan = document.createElement('span');
    contentspan.innerHTML = Post.fname + ' ' + Post.lname;

    content.innerHTML = contentspan.innerHTML + " " + Post.content;


    //dont for get to add viewcomment section for the comment
    let viewcomment = document.createElement('p');
    viewcomment.classList.add('viewcomment');
    viewcomment.innerHTML= `view all ${getcommentnum(Post.post_id)} comments`;


    about_posts.appendChild(usercontent);
    about_posts.appendChild(content);
    about_posts.appendChild(viewcomment);


    let comment_section = document.createElement('div');
    comment_section.classList.add('comment_section');

    let input_comment = document.createElement('input');
    input_comment.type = 'text';
    input_comment.setAttribute('id', 'comment');
    input_comment.classList.add('input_comment');
    input_comment.placeholder = 'Add comments';

    let emoji = document.createElement('img');
    emoji.src= "img/icons-to-be-used/feeling.png";
    emoji.classList.add('emoji');


    comment_section.appendChild(input_comment);
    comment_section.appendChild(emoji);



    card.appendChild(header);
    card.appendChild(main_body);  
    card.appendChild(interactions); 
    card.appendChild(about_posts); 
    card.appendChild(comment_section);

    let main = document.getElementsByClassName('main')[0];

    main.appendChild(card);

}


function getcommentnum(post_id){
    return 28;
}
function getLikesCount(id, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "countlike.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let data = xhr.responseText;
          callback(data); // Call the callback function with the data
        }
      }
    }
  
    xhr.send("post_id=" + id);
  }
  
  // Example usage

  

function Like(id) {
    console.log('liked');

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "like.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.responseText; // Use responseText instead of response
                if (data === "success") {
                    console.log(data);
                }
                console.log(data);
            }
        }
    }

    xhr.send("post_id=" + id);
}

function UnlikeLike(id){
    console.log('dislike');
    
        let xhr = new XMLHttpRequest(); //creating xml object
        xhr.open("post", "unlike.php", true);
        xhr.onload = () => {
            if(xhr.readyState == XMLHttpRequest.DONE){
                if(xhr.status == 200){
                    let data = xhr.response; 
                    if(data == "success"){
                        console.log(data);
                    }
                    console.log(data); 
                }
            }
        }
    
        xhr.send('post_id=' + id);
}




// let kidusPost = Post(123,345,'abebe  beso belto hodun amemew', "img/photos-to-be-used/horses.jpg", '2023-01-23');
// kidusPost.location = "salitemihret, addis ababa"


// create an ajax function to create the array of posts which have holds nesesary values





// let postarr= [
//     Post(123,345,'abebe  beso belto hodun amemew', "img/photos-to-be-used/horses.jpg", '2023-01-23'),
//     Post(123,345,'chala chube chebete', "img/photos-to-be-used/feed-image-2.png", '2023-01-23'),
//     Post(123,345,'abebe  beso belto hodun amemew', "img/photos-to-be-used/horses.jpg", '2023-01-23'),
//     Post(123,345,'abebe  beso belto hodun amemew', "img/photos-to-be-used/horses.jpg", '2023-01-23')
// ];
// postarr.forEach((item) =>{createPostCard(item)});

let createForm = document.querySelector('.create-window');
let sharebtn = document.querySelector('.share_btn');
console.log(sharebtn.onclick);

createForm.onsubmit = (e)=> {
    e.preventDefault();
}
// sharebtn.addEventListener('click', ()=>{
//     console.log('Create share button clicked');
// });

sharebtn.onclick = ()=>{
    console.log('Create share button clicked 2');
    
        let xhr = new XMLHttpRequest(); //creating xml object
        xhr.open("post", "createpost.php", true);
        xhr.onload = () => {
            if(xhr.readyState == XMLHttpRequest.DONE){
                if(xhr.status == 200){
                    let data = xhr.response; 
                    if(data == "success"){
                        console.log(data);
                    }
                    console.log(data); 
                }
            }
        }
        let formData = new FormData(createForm);
    
        xhr.send(formData);
}
