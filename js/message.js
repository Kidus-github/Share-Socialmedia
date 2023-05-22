let message = {
    msg_id,
    sender_id,
    recipient_id,
    content,
    timestamp,
    is_read: false,
    is_deleted,
    attachment,
    is_forwarded: false,
    forwarded_to_id: null,
    reply_to_id: null,

    function Person(msg_id, sender_id, content, timestamp, is_read) {
        this.msg_id = msg_id;
        this.sender_id = sender_id;
        this.content = content;
        this.timestamp = timestamp;
        this.is_read = is_read;

    }
}