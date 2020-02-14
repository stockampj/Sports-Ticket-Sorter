singleGameTickets.forEach((game)=>{
  const {team, date, location, time, home } = game;
  const logoURLpath =  logoURLpaths[team];
  const locationFlagURL = (home) ? './img/home.svg' : './img/away.svg';
  const locationText = (home) ? 'H' : 'A';

  // this is a small triangle SVG to show a home or away game status
  const flagColor = (home) ? '#7c2529' : '#666'
  const flagSVG= `
    <svg height="80" width="80">
      <polygon points="-10,-10 90,-10 -10,90" style="fill:white;fill-opacity:1;stroke:${flagColor};stroke-width:1" />
      <polygon points="-10,-10 75,-10 -10,75" style="fill:${flagColor};fill-opacity:.25;stroke:${flagColor};stroke-width:1" />
      <text class="location-flag-text" x="10" y="30" fill=${flagColor}>${locationText}</text>
    </svg>`

  
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
  `<img src=${locationFlagURL} class="location-flag">`



  $('#upcoming-games-schedule').append(`
    <div class="ticket-card-wrapper">
      <div class="ticket-card-body">
        <div class="logo-holder">
          <img class="logo-image" src=${logoURLpath} aria-label="logo for ${team}">
          <div class="location-flag-wrapper">${flagSVG}</div>
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