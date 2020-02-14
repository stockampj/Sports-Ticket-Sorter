singleGameTickets.forEach((game)=>{
  const {team, date, location, time, home } = game;
  const logoURLpath =  logoURLpaths[team];
  locationFlagURL = (home) ? './img/home.svg' : './img/away.svg';
  locationText = (home) ? 'H' : 'A';
  
  //this code transforms the team name if it exceeds a certain number of characters and breaks it in the middle of the word count
  const teamNameTransformer = (string)=>{
    let teamString = '';
    if (team.length > 20){
      let string1='';
      let string2=''
      let nameArray = team.split(' ');
      let splitLocation = (nameArray.length/2);
      nameArray.slice(0,splitLocation).forEach((word)=>{
        string1+=word+' ';
      });
      nameArray.slice(splitLocation,nameArray.length).forEach((word)=>{
        string2+=word+' ';
      })
      teamString = string1.trim()+'<br>'+string2.trim();
    }else{
      teamString= team;
    }

    return teamString.toUpperCase();
  }

  $('#upcoming-games-schedule').append(`
    <div class="ticket-card">
      <div class="ticket-card-body">
        <div class="logo-holder">
          <img class="logo-image" src=${logoURLpath} aria-label="logo for ${team}">
        </div>
        <div class="location-flag-wrapper">
          <img src=${locationFlagURL} class="location-flag">
          <div class="location-flag-text">${locationText}</div>
        </div>
        <div class="header-wrapper">
          <h4 class="header-title header"><span class='date'>${date.toUpperCase()}</span><br></h4>
        </div>
        
        <div class="content-holder">
          <div class="team-wrapper">
            <h2 class="team header">${teamNameTransformer()}</h2>
          </div>
          <div class="info-wrapper">
            <h4 class="location header">${location} </h4>
            <h4 class="time header">@ ${time}</h4>
          </div>
          <div class="buttons-panel">
            <button class="card-button">${('Specials').toUpperCase()}</button>
            <button class="card-button">${('Tickets').toUpperCase()}</button>
          </div>
        </div>
      </div>
    </div>
  `);
});