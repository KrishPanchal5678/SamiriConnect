class Start{

    constructor(){}
FP()
{
    if(state === 0)
    {textFont("Castellar")
    textSize(100)
    text("S", 250, 100)
    
    textSize(50)
    text("AMIRI", 300, 100)
    
    textFont("Times New Roman")
    textSize(30)
    text("Connect", 375, 125)

    textFont("Lucida Handwriting")
    textSize(100)
    text("Login", 200, 300)
    
    strokeWeight(5)
    stroke("grey")
    line(400, 320, 400, 750)

    Username = createInput("Username");
    Username.position(100, 350)
    Password = createInput("Password");
    Password.position(100, 400)

    fp = createButton("Forgot Password?");
    fp.position(100, 420)

    Rm = createButton();
    strokeWeight(1)
    textFont("Times New Roman")
    textSize(20);
    text("Remember Me", 125, 475);

    text("New to the App?", 100, 510);
    CA = createButton("Create new account");
    CA.position(100, 520)

    //-------------------------------------------------------------------------------------

    GIMG = loadImage("images/Picture3.png");
    FIMG = loadImage("images/Picture2.png");
    GMIMG = loadImage("images/Picture1.png");
    
    var x = document.createElement("GIMG");
    x.setAttribute("src", "images/Picture3.png");
    x.setAttribute("width", "10");
    x.setAttribute("height", "10");
    document.body.appendChild(x);

    Google = createButton("Login with" + GIMG);
    Google.position(500, 350);
    Facebook = createButton("Login with" + FIMG);
    Facebook.position(500, 400);
    Gmail = createButton("Login with" + GMIMG);
    Gmail.position(500, 450)

    Login = createButton("LOGIN");
    Login.position(150, 600);
    
    Emergency = createButton("EMERGENCY?");
    Emergency.position(350, 850);
    text("CLick on this button in case of Emergency and and 'Continue WITHOUT Loging in' !!", 50, 900 );
}

    Emergency.mousePressed(function(){
        state = 1;
        background("pink")

        Username.hide();
        Password.hide();
        fp.hide();
        Rm.hide();
        CA.hide();
        Google.hide();
        Facebook.hide();
        Gmail.hide();
        Login.hide();
        Emergency.hide();
      })
      
      if(state === 1)
      {
        FpHide();
        ES() //Emergency services page
      
      }
      
      Login.mousePressed(function(){
        state = 2;
        background("red");

        Username.hide();
        Password.hide();
        fp.hide();
        Rm.hide();
        CA.hide();
        Google.hide();
        Facebook.hide();
        Gmail.hide();
        Login.hide();
        Emergency.hide();
      })
    
      if(state === 2)
      {
        //PC();   
        // PC = Password Check . in this function, the data will be checked (password and username)
        //If everyting is correct then we will return 'TRUE' or else 'FALSE;
      }

      CA.mousePressed(function(){
        state = 3;

        Username.hide();
        Password.hide();
        fp.hide();
        Rm.hide();
        CA.hide();
        Google.hide();
        Facebook.hide();
        Gmail.hide();
        Login.hide();
        Emergency.hide();
      })

      if(state === 3)
      {
        Create();
      }
}


}
