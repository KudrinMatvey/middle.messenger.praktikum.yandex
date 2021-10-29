import { authStyles } from '../shared';

export const registerTemplate = `
    <form class="${authStyles.authorizationWrapper}">
        <h3 class="${authStyles.header}">Регистрация</h3>
        <div id="emailInput"></div> 
        <div id="loginInput"></div> 
        <div id="firstNameInput"></div> 
        <div id="secondNameInput"></div> 
        <div id="phoneInput"></div>
        <div id="passwordInput"></div> 
        <div id="repeatPasswordInput"></div> 
        <div id="registerButton"></div>
    </form>
`;
