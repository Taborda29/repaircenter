const $btnSignIn= document.querySelector ('.sign-in-btn'),
    $btnSignUp= document.querySelector ('.sign-up-btn'),
    $signUp= document.querySelector ('.sign-up'),
    $SignIn= document.querySelector ('.sign-in');

    document.addEventListener('click', e=> {
        if (e.target === $btnSignIn || e.target === $btnSignUp){
            $SignIn.classList.toggle('active');
            $signUp.classList.toggle('active')
        }
    });