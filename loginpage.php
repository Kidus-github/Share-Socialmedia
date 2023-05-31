

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
        <!-- <dialog open class="form_section" id="modal">  
            <!-- <form  class="form SignUpform" method="dialog" autocomplete="off" novalidate>
                <div class="form-header">
                    <h1>Sign Up</h1>
                    <h4>It's quick and easy.</h4>
                </div>
                <div class="hr"></div>
                <span><i class="far fa-x close"></i></span>
                <p class="error signup-error">This is an error message</p>
                <div class="name">
                    <input type="text" name="firstname" placeholder="First name" class="fname" required>
                    <input type="text" name="lastname" placeholder="Last name" class="lname" required> 
                </div>
                <div class="email_password">
                    <input type="text" name="email" placeholder="Mobile number or Email" class="email" required/>
                    <input type="password" name="password" placeholder="New password" class="password" required/>
                    <span><i id="passwordTogglerSignUp" class="far fa-eye eyetoggle eye-signUp"></i></span>
                </div>
                <label for="Birthdate">Birthday:</label>
                <div class="birth">
                    <select name="month" id="month" required>
                        <option value="month">Month</option>
                        <option value="january">Jan</option>
                        <option value="february">Feb</option>
                        <option value="march">Mar</option>
                        <option value="april">Apr</option>
                        <option value="may">May</option>
                        <option value="june">jun</option>
                        <option value="july">jul</option>
                        <option value="august">Aug</option>
                        <option value="september">Sep</option>
                        <option value="october">Oct</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                    </select>
                    <select name="days" id="days" required>
                        <option value="days">Days</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                    </select>
                    <select name="years" id="years"required>
                        <option value="years">Years</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>
                    <label for="gender">Gender:</label>
                    <div class="gender">
                        <div class="male">
                            <input type="radio" name="gender" value="M" id="male">
                            <label for="male">Male</label>
                        </div>
                        <div class="female">
                            <input type="radio" name="gender" value="F" id="female">
                            <label for="female">Female</label>
                        </div>
                    </div>
                <div class="about">
                    <p>People who use our service may have uploaded your contact information to Share. <a href="learnmore.html">Learn more.</a></p>
                    
                </div>
                <div class="signUp">
                    <input class="signupBtn" type="submit" value="Sign Up">
                </div>
        
            </form>
            </dialog> -->
    </div>
    <script type="module" src="js/login.js"></script>
</body>
</html>