import * as styles from '../shared/auth.module.scss'
export const loginTemplate = `
<div class="${styles.}">
    <form class="${styles.authorizationWrapper}">
        <h3 class="header">Вход</h3>
        <div id="loginInput"></div>
        <div id="passwordInput"></div>
        <div id="loginButton"></div>
        <div id="registerButton"></div>
    </form>
</div>
`;
