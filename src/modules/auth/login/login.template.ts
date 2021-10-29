import * as styles from './login.module.scss'
export const loginTemplate = `
<div class="${styles.authPage}">
    <form class="${styles.authorizationWrapper}">
        <h3 class="${styles.header}">Вход</h3>
        <div id="loginInput"></div>
        <div id="passwordInput"></div>
        <div id="loginButton"></div>
        <div id="registerButton"></div>
    </form>
</div>
`;
