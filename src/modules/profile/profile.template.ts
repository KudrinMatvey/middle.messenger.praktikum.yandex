export const profilePageTemplate = `
  <div class="profile-page page-with-back">
    <div class="back">
      {{> button icon="img/back.svg" className="-primary -icon -round"}}
    </div>
    <div class="content">
      <div class="profile-form">
        <div class="edit-avatar">
          <img class="image" src="{{ defaultValue avatarUrl 'img/no-avatar.svg'}}" alt="">
          <input class="input" type="file" name="avatar">
        </div>
        <h2 class="name">{{ firstName }}</h2>
        {{#each inputFields}} 
          {{> input this}}
        {{/each}}
        <div class="profile-actions">
          {{#each actions}} 
            <div class="action">
             {{> link this}}
            </div>
          {{/each}}        
        </div>
      </div>
    </div>
  </div>
`;
