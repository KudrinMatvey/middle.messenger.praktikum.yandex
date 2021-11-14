import * as styles from './profile.module.scss';

export const profilePageTemplate = `
    <div class="${styles.pageBack}">
      <div id="backButton"></div>
    </div>
    <div class="${styles.pageContent}">
      <form class="${styles.profileForm}">
        <div class="${styles.editAvatar}">
          <img class="${styles.image}" src="{{ defaultValue avatarUrl 'img/no-avatar.svg'}}" alt="">
          <input class="${styles.imageInput}" type="file" name="avatar">
        </div>
        <h2 class="${styles.name}">{{ firstName }}</h2>
        {{#each fieldIds}} 
          <div id="{{this}}"></div>
        {{/each}}
        <div class="${styles.profileActions}">
          {{#each actionIds}} 
             <div id="{{this}}"></div>
          {{/each}}        
        </div>
      </form>
    </div>
`;
