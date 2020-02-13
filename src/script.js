console.log(singleGameTickets)
singleGameTickets.forEach((game)=>{
  const {team, date, location, time, home } = game;
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
      console.log(teamString)
    }else{
      teamString= team;
    }

    return teamString.toUpperCase();
  }

  $('#upcoming-games-schedule').append(`
    <div class="ticket-card">
      <div class="ticket-card-body">
        <div class="logo-holder">
          <img class="logo-image" src='./img/SRFC_TEAMs/Austin_away_large.jpg'>
        </div>
        <div class="content-holder">
          <div class="event-date-wrapper">
            <h4 class="event-date header">${date}<br>@ ${time}</h4>
          </div>
          <div class="location-wrapper">
            <h4 class="location header">${location}</h4>
          </div>
          <div class="header-wrapper">
            <h2 class="header-team header">${teamNameTransformer()}</h2>
          </div>
          
        </div>
      </div>
    </div>
  `);
});