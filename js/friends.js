let Friends = {
    friendRequest_id,
    user_id,
    friend_id,
    status,
    created_at,
    updated_at: null,
    action_user_id,
    is_deleted,
    blocked_at,

    function Friends(friendRequest_id, user_id,friend_id,status,action_user_id){
        this.friendRequest_id = friendRequest_id;
        this.user_id = user_id;
        this.friend_id = friend_id;
        this.status = status;
        this.action_user_id = action_user_id;
    }
}