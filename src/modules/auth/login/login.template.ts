import { authStyles } from '../shared';

export const loginTemplate = `
<div class="${authStyles.authPage}">
    <form class="${authStyles.authorizationWrapper}">
        <h3 class="${authStyles.header}">Вход</h3>
        <div id="loginInput"></div>
        <div id="passwordInput"></div>
        <div id="loginButton"></div>
        <div id="registerButton"></div>
    </form>
</div>
`;
