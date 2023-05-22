let Post = {
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


    function Post(post_id, user_id, content, media){
        this.post_id = post_id;
        this.user_id = user_id;
        this.content = content;
        this.media = media;
    }

}