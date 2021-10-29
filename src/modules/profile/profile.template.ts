export const profilePageTemplate = `
  <div class="profile-page page-with-back">
    <div class="back">
      <div id="backButton"></div>
    </div>
    <div class="content">
      <form class="profile-form">
        <div class="edit-avatar">
          <img class="image" src="{{ defaultValue avatarUrl 'img/no-avatar.svg'}}" alt="">
          <input class="input" type="file" name="avatar">
        </div>
        <h2 class="name">{{ firstName }}</h2>
        {{#each fieldIds}} 
          <div id="{{this}}"></div>
        {{/each}}
        <div class="profile-actions">
          {{#each actionIds}} 
            <div class="action">
             <div id="{{this}}"></div>
            </div>
          {{/each}}        
        </div>
      </form>
    </div>
  </div>
`;
