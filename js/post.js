export function Post(post_id, user_id, content, media, created_at) {
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
        location: null,
    };

}

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
    identityimg.src = getPropic(Post.user_id);

    let identitydisc = document.createElement('div');
    identitydisc.classList.add('pro-name_and_discripton');
    let username = document.createElement('h4');
    username.innerHTML = getfullname(Post.user_id);
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
    heart.src ="img/icons-to-be-used/heart-64.png";
    heart.classList.add('heart', 'icon-reactions');

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
    numberoflikes.innerHTML = `${getLikesCount(Post.post_id)}`

    usercontent.innerHTML = numberoflikes.innerHTML + ' Likes';

    let content = document.createElement('p');
    let contentspan = document.createElement('span');
    contentspan.innerHTML = getfullname(Post.user_id);

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


//edit this 
function getfullname(user_id){
    return "kidus girma";
}
function getPropic(user_id){
    return "img/photos-to-be-used//member-2.png";
}

function getcommentnum(post_id){
    return 28;
}
function getLikesCount(post_id){
    return 63;
}




let kidusPost = Post(123,345,'abebe  beso belto hodun amemew', "img/photos-to-be-used/horses.jpg", '2023-01-23');
kidusPost.location = "salitemihret, addis ababa"





let postarr= [
    Post(123,345,'abebe  beso belto hodun amemew', "img/photos-to-be-used/horses.jpg", '2023-01-23'),
    Post(123,345,'chala chube chebete', "img/photos-to-be-used/feed-image-2.png", '2023-01-23'),
    Post(123,345,'abebe  beso belto hodun amemew', "img/photos-to-be-used/horses.jpg", '2023-01-23'),
    Post(123,345,'abebe  beso belto hodun amemew', "img/photos-to-be-used/horses.jpg", '2023-01-23')
];
postarr.forEach((item) =>{createPostCard(item)});