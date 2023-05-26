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