export const loginTemplate = `
<div class="auth-page">
    <div class="authorization-wrapper">
        <h3 class="header">Вход</h3>
        {{> input loginInput}}
        {{> input passwordInput}}
        {{> button loginButton}}
        {{> button registerButton}}
    </div>
</div>
`;
