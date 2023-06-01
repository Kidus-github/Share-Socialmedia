

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Share | Log in | Sign Up </title>
    <link rel="stylesheet" href="css/signUp.css">
    <link rel="shortcut icon" href="../img/logo.png" type="image/png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="wrapper">
        <div class="main">
            <div class="leftlogin">
                <div class="two_womens"></div>
                <div class="seating_man"></div>
            </div>
            <div class="right">
                <div class="login_section">
                    <div class="logo"></div>
                    <div class="login-form">
                        <form class="login" method="post" action="validation.php" novalidate>
                            <p class="error login-error">This is an error message</p>
                            <input type="text" name="username" placeholder="Username" class="email">
                            <div class="passdiv">
                            <input type="password" name="password" placeholder="Password" class="password">
                            <span><i id="passwordToggler" class="far fa-eye eyetoggle eye-login"></i></span>
                            </div>
                            <button class="loginbtn btn" name="submit" type="submit">Log In</button>
                        </form>
                        <div class="forgotPassword">
                            <a href="forget_password">Forgot password?</a>
                        </div>
                        <div class="hr"></div>
                        <div class="createNew">
                            <button class="create_new">Create new account</button>
                        </div>
                    </div>
                     
                </div>
                    <div class="right_manlogin"></div>
            </div>
        </div>
    </div>
    <script type="module" src="js/login.js"></script>
</body>
</html>