singleGameTickets.forEach((game)=>{
  // const {team,datelocation, time, broadcast,home,specialsContent,ticketContent,ticketURL} = game;
  const {team, date, location, presaleDescription, broadcast, time, home, specialsContent, ticketURL} = game;
  const {bannerPath, description} = specialsContent;
  const logoURLpath =  logoURLpaths[team];
  const ticketsAvailable = (ticketURL !== '') ? true : false;
  const specialsAvailable = (description !== '') ? true : false;

  // this generates a search for the field's location via google
  const locationURL = () =>{
    let url = 'http://www.google.com/search?q='
    location.split(' ').forEach((word)=>{url += word + "+";})
    return url;
  }

  const ticketButtonShowClass= (ticketsAvailable) ? 'show' : 'hide';
  const presaleContentShowClass= (ticketsAvailable) ? 'hide' : 'show';
  const specialsShowClass = (specialsAvailable) ? 'show' : 'hide';

  console.log(bannerPath + " " + description)

  //this changes the color of the header by injecting a home/away background color
  const headerColorClass = (home) ? 'header-home' : 'header-away';
  //This hides the tickets button depending on the home/away status. It could be placed in other classes to show or hide depending on this status.
  const showClass = (home) ? 'show' : 'hide';

  // If game has special offer, show - if not, hide
  
  
  // this is a small triangle SVG to show a home or away game status
  const locationText = (home) ? 'H' : 'A';
  const flagColor = (home) ? '#7c2529' : '#666'
  const flagSVG= `
    <svg height="80" width="80">
      <polygon points="-10,-10 90,-10 -10,90" style="
        fill:white;
        fill-opacity:1;
        stroke:${flagColor};
        stroke-width:1" />
      <polygon points="-10,-10 75,-10 -10,75" style="
        fill:${flagColor};
        fill-opacity:.25;
        stroke:${flagColor};
        stroke-width:1" />
      <text class="location-flag-text" x="10" y="30" fill=${flagColor}>${locationText}</text>
    </svg>`

  
  //this code transforms the team name if it exceeds a certain number of characters and breaks it in the middle of the word count
  const teamNameTransformer = ()=>{
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
    <div class="ticket-card-wrapper">
      <div class="ticket-card-body ticket-card-front">
          <div class="hero-image-holder logo-image-holder">
            <img class="logo-image" src=${logoURLpath} aria-label="logo for ${team}">
            <div class="location-flag-wrapper">${flagSVG}</div>
          </div>
          <div class="header-wrapper ${headerColorClass}">
            <h4 class="header-title header-override"><span class='date'>${date.toUpperCase()}</span></h4>
          </div>
          <div class="gradient-cover"></div>
          <div class="content-holder">
            <div class="team-wrapper">
              <h2 class="team header-override">${teamNameTransformer()}</h2>
            </div>
            <div class="info-wrapper">
              <a href=${locationURL()} target="blank" class="location header-override"><i class="fas fa-map-marker-alt"></i> ${location}</a>
              <h4 class="time header-override"><i class="far fa-clock"></i> ${time}</h4>
            </div>
            <div class="presale-content-wrapper ${presaleContentShowClass}">            
              <h4 class="presale-description header-override">Presale: ${presaleDescription}</h4>
            </div>
            <div class="buttons-panel">
              <a onClick="toggleSides(this)" class="card-button ${specialsShowClass}">${('Specials').toUpperCase()}</a>
              <a class="card-button ${ticketButtonShowClass}" href=${ticketURL}><i class="fas fa-ticket-alt"></i> ${('Tickets').toUpperCase()}</a>
            </div>
          </div>
      </div>
      <div class="ticket-card-body ticket-card-back hide">
          <div class="hero-image-holder">
            <img class="special-image" src=${bannerPath} aria-label="special banner for this game">
          </div>
          <div class="header-wrapper ${headerColorClass}">
            <h4 class="header-title header-override"><span class='date'>${date.toUpperCase()}</span></h4>
          </div>
          <div class="gradient-cover"></div>
          <div class="content-holder">
            <div class="team-wrapper">
              <h2 class="team header-override">${teamNameTransformer()}</h2>
            </div>
            <div class="info-wrapper">
              <h4 class="header-override">${description}</h4>
            </div>
            <div class="buttons-panel">
              <a onClick="toggleSides(this)" class="card-button ${specialsShowClass}"><i class="fas fa-long-arrow-alt-left"></i> ${('Back').toUpperCase()}</a>
              <a class="card-button ${ticketButtonShowClass}" href=${ticketURL}><i class="fas fa-ticket-alt"></i> ${('Tickets').toUpperCase()}</a>
            </div>
          </div>
      </div>
    </div>
  `);
});

function toggleSides(button) {
  $(button).parent().parent().parent().parent().children().toggleClass('hide');
}