<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Share | Profile</title>
    <link rel="stylesheet" href="css/profile.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <header>
        <nav>
            
                <a href="#"><div class="logo"></div></a>

                <div class="header_right">
                <div class="search">
                    <i class="fa fa-search"></i>
                    <input type="text" name="search" id="search" placeholder="Search">
                </div>
                <div class="header_message">
                    <img src="img/icons-to-be-used/message1/icons8-speech-bubble-50.png" class="message-img icon">
                </div>      
            </div>
        </nav>
    </header>

    <div class="left_sider">
        
        <div class="navigation">
            <div class="nav-logo">
                <a href="#" class="logo-left"><div id="nav-logo" class="logo-left-nav"></div></a>
            </div>
                <div class="Home flex nav-property">
                    <img src="img/icons-to-be-used/home2/icons8-home-48.png" class="home-img icon">
                    <h3>Home</h3>
                </div>
                <div class="Search nav-property" id="nav-search">
                    <img src="img/icons-to-be-used/search2/icons8-search-50.png" class="search-img icon" >
                    <h3>Search</h3>
                </div>
                
                <div class="Explore nav-property">
                    <img src="img/icons-to-be-used/explore1.1/icons8-compass-48.png" class="explore-img icon">
                    <h3>Explore</h3>
                </div>
                <div class="Reels nav-property">
                    <img src="img/icons-to-be-used/reel1/icons8-instagram-reels-50.png" class="reels-img icon">
                    <h3>Reels</h3>
                </div>
                <div class="Message nav-property" id="nav-msg">
                    <div class="msg">
                        <p>3+</p>
                        <img src="img/icons-to-be-used/message1/icons8-speech-bubble-50.png" class="message-img icon" >   
                    </div>
                    <h3>Message</h3>
                </div>
                <div class="Notification nav-property">
                    <div class="notif">
                        <p>8+</p>
                        <img src="img/icons-to-be-used/notification2.1/icons8-favorite-48.png" class="notification-img icon">
                    </div>
                    <h3>Notification</h3>
                </div>
                <div class="Create nav-property">
                    <img src="img/icons-to-be-used/create1.1/icons8-plus-48.png" class="create-img icon">
                    <h3>Create</h3>
                </div>
                <div class="Settings nav-property" id="nav-setting">
                    <img src="img/icons-to-be-used/setting1/icons8-settings-50.png" class="setting-img icon">
                    <h3>Settings</h3>
                </div>
                <div class="user nav-property">
                    <img src="img/photos-to-be-used/4.jpg" class="profile icon">
                    <h3>Profile</h3>
                 <!-- This div contains navigation links to various sections of the website, such as Home, Search, Explore, etc. -->
                </div>
        </div>
        </div>
        <div class="wrapper container">
        <div class="profile-wrapper">
            <div class="even-columns">
                <div class="profile-pic">

                </div>
                <div class="profile-details">
                    <div class="edit-profile">
                        <h5 class="user_name">kidusg_</h5>
                        <button class="edit-btn btn">Edit profile</button>
                        <button class="settings btn">Setting</button> <!--to be changed-->
                    </div>
                    <div class="profile-counts">
                        <div>
                            <p><span>0 </span>posts</p>
                        </div>
                        <div>
                            <p><span>437 </span>followers</p>
                        </div>
                        <div>
                            <p><span>412 </span>following</p>
                        </div>
                    </div>
                    <div class="profile-user">kidus girma</div>
                </div>
            </div>
            <!-- <div class="hlight">
                <div></div>
                <div>create</div>
            </div> -->

            <div class="hr"></div>
            <div class="options">
                <div class="posts">POSTS</div>
                <div class="saved">SAVED</div>
                <div class="tagged">TAGGED</div>
            </div>
            <div class="hr"></div>
        </div>
    </div>
    
</body>
</html>
<script type="module" src="js/index.js"></script>
<script src="profile.js"></script>