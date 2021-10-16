export const registerTemplate = `
<div class="auth-page">
    <div class="authorization-wrapper">
        <h3 class="header">Регистрация</h3>
        {{> input emailInput}} 
        {{> input loginInput}} 
        {{> input firstNameInput}} 
        {{> input secondNameInput}} 
        {{> input phoneInput}}
        {{> input passwordInput}} 
        {{> input repeatPasswordInput}} 
        {{> button registerButton}}
    </div>
</div>
`;
