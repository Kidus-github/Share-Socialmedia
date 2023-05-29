export function User (id,fname, lname, password_hash, email, gender, date_of_birth) {
    return{
        id,
        fname,
        lname,
        password_hash,
        email,
        username:null,
        gender: gender,
        date_of_birth: date_of_birth,
        profile_picture: null,
        bio: null,
        website: null,
        Status: null,
        created_at: null,
        updated_at: null,
        location: null,
        phone_number: null,
        is_verified: false,
        is_active: true,
        timezone: null,
        privacy_setting: null,
        notification_setting: null,
        last_login: null,
        login_count: 0,
    };
}


