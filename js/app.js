function loginDashboard()
{
    let loginDashboard=document.getElementById("loginDashboard");

    loginDashboard.style.display="flex";
}
function loginDashboardClose()
{
    let loginDashboard=document.getElementById("loginDashboard");

    loginDashboard.style.display="none";
}
function passwordHidden()
{
    let passwordHidden=document.getElementById("passwordHidden");
    let passwordEyeicon=document.getElementById("passwordEyeicon");
    
    if(passwordHidden.type=="password")
    {
        passwordHidden.type="text";
        passwordEyeicon.classList.remove("bi-eye");
        passwordEyeicon.classList.add("bi-eye-slash");
    }
    else
    {
        passwordHidden.type="password";
        passwordEyeicon.classList.remove("bi-eye-slash");
        passwordEyeicon.classList.add("bi-eye");
    }
}
function pop1()
{
    let pop=document.getElementById("dotsPop1");
    let divParent=document.getElementById("dotsPop1").parentNode;
    if(pop.style.display=="none")
    {
        pop.style.display="block";
        divParent.style.backgroundColor="#BFBFC0";
    }
    else
    {
        pop.style.display="none";
        divParent.style.backgroundColor="#ffffff";
    }
}
function pop2()
{
    let pop=document.getElementById("dotsPop2");
    let divParent=document.getElementById("dotsPop2").parentNode;
    if(pop.style.display=="none")
    {
        pop.style.display="block";
        divParent.style.backgroundColor="#BFBFC0";
    }
    else
    {
        pop.style.display="none";
        divParent.style.backgroundColor="#ffffff";
    }
}
function pop3()
{
    let pop=document.getElementById("dotsPop3");
    let divParent=document.getElementById("dotsPop3").parentNode;
    if(pop.style.display=="none")
    {
        pop.style.display="block";
        divParent.style.backgroundColor="#BFBFC0";
    }
    else
    {
        pop.style.display="none";
        divParent.style.backgroundColor="#ffffff";
    }
}
function pop4()
{
    let pop=document.getElementById("dotsPop4");
    let divParent=document.getElementById("dotsPop4").parentNode;
    if(pop.style.display=="none")
    {
        pop.style.display="block";
        divParent.style.backgroundColor="#BFBFC0";
    }
    else
    {
        pop.style.display="none";
        divParent.style.backgroundColor="#ffffff";
    }
}


let count=0;

if($(window).width() > 740){
    let blockALoginAgreementText=document.getElementById("blockALoginAgreementText");
    blockALoginAgreementText.style.display="none";
  }

function switchLoginMode()
{
    let loginHeading=document.querySelector(".login-heading");
    let nameDetails=document.getElementById("nameDetails");
    let loginBtn=document.querySelector("#loginBtn");
    let confirmPassword=document.getElementById("confirmPassword");
    let forgotPassword=document.querySelector(".forgot-password");
    let blockALoginChange=document.getElementById("blockALoginChange");
    let blockALoginAgreementText=document.getElementById("blockALoginAgreementText");
    let blockBLoginChangeText=document.getElementById("blockBLoginChangeText");
    let blockBLoginChange=document.getElementById("blockBLoginChange");

    if(count==0)
    {   
        nameDetails.style.display="none";
        console.log(nameDetails.style.marginBottom);
        nameDetails.nextElementSibling.style.marginTop="25px";
        loginBtn.innerText="Sign In";
        confirmPassword.style.display="none";
        forgotPassword.style.display="block";
        blockALoginChange.innerText="or, Create Account";
        blockALoginAgreementText.style.display="none";
        blockBLoginAgreementText.style.display="none";
        if(window.innerWidth>740)
        {
            loginHeading.innerText="Sign In";
            forgotPassword.style.marginBottom="35px";
        }
        else
        {
            loginHeading.innerText="Welcome Back";
            forgotPassword.style.marginBottom="85px";   
        }
        blockBLoginChangeText.innerHTML='Don’t have an account yet? <a onclick="switchLoginMode()" class="block-b-login-change">Create new for free!</a>';

        count=1;
    }
    else
    {
        loginHeading.innerText="Create Account";
        nameDetails.style.display="flex";
        nameDetails.nextElementSibling.style.marginTop="0px";
        loginBtn.innerText="Create Account";
        confirmPassword.style.display="block";
        forgotPassword.style.display="none";
        blockALoginChange.innerText="or, Sign In";
        if(window.innerWidth<=740)
        {
            blockALoginAgreementText.style.display="block";
            blockBLoginAgreementText.style.display="none";
        }
        else
        {
            blockALoginAgreementText.style.display="none";
            blockBLoginAgreementText.style.display="block";   
        }
        blockBLoginChangeText.innerHTML='Already have an account? <a onclick="switchLoginMode()" class="block-b-login-change">Sign In </a>';

        count=0;
    }
}