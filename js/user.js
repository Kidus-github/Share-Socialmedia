let User = {
    id,
    fname,
    lname,
    password_hash,
    email,
    username,
    gender,
    date_of_birth,
    profile_picture,
    bio,
    website,
    status: null,
    created_at,
    updated_at,
    location,
    phone_number,
    is_verified: false,
    is_active: true,
    timezone,
    privacy_setting: null,
    notification_setting,
    last_login,
    login_count: 0,


    function User (fname,lname,password_hash,email,gender, date_of_birth) {
        this.fname = fname;
        this.lname = lname;
        this.password_hash = password_hash;
        this.email = email;
        this.gender = gender;
        this.date_of_birth = date_of_birth;
    }
}