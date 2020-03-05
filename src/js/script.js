singleGameTickets.forEach((game)=>{
  const {team, date, month, monthShort, location, presaleDescription, time, active, ticketURL, promoContent} = game;
  const {frontTitle, title, description} = promoContent;
  const logoURLpath =  logoURLpaths[team];
  const promoURLpath = logoURLpaths[title]
  const ticketsAvailable = (ticketURL !== '') ? true : false;
  const specialsAvailable = (description !== '') ? true : false;
  const presaleAvailable = (active !== true) ? true : false;

  // this generates a search for the field's location via google
  const locationURL = () =>{
    let url = 'http://www.google.com/search?q='
    location.split(' ').forEach((word)=>{url += word + "+";})
    return url;
  }

  // generates show/hide functionality on whether something is active or not dynamically
  // Example: don't show tickets if they're not actively available
  const ticketButtonShowClass= (ticketsAvailable) ? 'show' : 'hide';
  const presaleContentShowClass= (ticketsAvailable) ? 'hide' : 'show';
  const specialsShowClass = (specialsAvailable) ? 'show' : 'hide';
  const presaleShowClass= (presaleAvailable) ? 'hide' : 'show';

  //this changes the color of the header by injecting a active/away background color
  const headerColorClass = (active) ? 'header-active' : 'header-away';
  
  //This hides the tickets button depending on the active/away status. It could be placed in other classes to show or hide depending on this status.
  const showClass = (active) ? 'show' : 'hide';
  
  
  // Creates a small triangle SVG to show a active or away game status
  // const locationText = (active) ? 'H' : 'A';
  // const flagColor = (active) ? '#7c2529' : '#666'
  
  // Corner SVG for active/inactive
  // const flagSVG= `
  //   <svg height="80" width="80">
  //     <polygon points="-10,-10 90,-10 -10,90" style="
  //       fill:white;
  //       fill-opacity:1;
  //       stroke:${flagColor};
  //       stroke-width:1" />
  //     <polygon points="-10,-10 75,-10 -10,75" style="
  //       fill:${flagColor};
  //       fill-opacity:.25;
  //       stroke:${flagColor};
  //       stroke-width:1" />
  //     <text class="location-flag-text" x="10" y="30" fill=${flagColor}>${locationText}</text>
  //   </svg>`

  
  //this code transforms the team name if it exceeds a certain number of characters and breaks it in the middle of the word count
  // to insert this into the append code, use: <div class="location-flag-wrapper">${flagSVG}</div>
  
  // const teamNameTransformer = ()=>{
  //   let teamString = '';
  //   if (team.length > 20){
  //     let string1='';
  //     let string2=''
  //     let nameArray = team.split(' ');
  //     let splitLocation = (nameArray.length/2);
  //     nameArray.slice(0,splitLocation).forEach((word)=>{
  //       string1+=word+' ';
  //     });
  //     nameArray.slice(splitLocation,nameArray.length).forEach((word)=>{
  //       string2+=word+' ';
  //     })
  //     teamString = string1.trim()+'<br>'+string2.trim();
  //   }else{
  //     teamString= team;
  //   }
  //   return teamString.toUpperCase();
  // }



  $('#upcoming-games-schedule').append(`
    <div class="col-xs-12 splitter${monthShort}">
      <h3>${month}</h3>
      <hr class="golden-rule">
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4 ticket-card ${headerColorClass} ">
      <div class="ticket-card-body front">
          <div class="header-wrapper">
            <h4 class="header-title"><span class='date'>${date.toUpperCase()}</span></h4>
          </div>
          <div class="hero-image-holder logo-image-holder">
            <img class="logo-image" src=${logoURLpath} aria-label="logo for ${team}">
          </div>
          
          <div class="content-holder">
            <div class="team-wrapper">
              <h2 class="team">${team}</h2>
              <p class="promoDescription">${frontTitle}</p>
            </div>
            <div class="info-wrapper">
              <a href=${locationURL()} target="blank" class="location"><i class="fas fa-map-marker-alt"></i> ${location}</a>
              <h4 class="time"><i class="far fa-clock"></i> ${time}</h4>
            </div>
            <div class="presale-content-wrapper ${presaleContentShowClass}">            
              <h4 class="presale-description">Presale: ${presaleDescription}</h4>
            </div>
            <div class="buttons-panel">
              <a onClick="toggleSides(this)" class="card-button ${specialsShowClass}">${('Promo').toUpperCase()}</a>
              <a class="card-button ${ticketButtonShowClass}" href=${ticketURL}><i class="fas fa-ticket-alt"></i> ${('Tickets').toUpperCase()}</a>
              <a class="card-button ${presaleShowClass}" href=${ticketURL}><i class="fas fa-ticket-alt"></i> ${(`Presale: ${presaleDescription}`).toUpperCase()}</a>
            </div>
          </div>
      </div>
      <div class="ticket-card-body back hide">
          <div class="header-wrapper ${headerColorClass}">
            <h4 class="header-title"><span class='date'>${title.toUpperCase()}</span></h4>
          </div>
          <div class="content-holder">
            <div class="eventPromo">
              <img class="promo-image" src=${promoURLpath} aria-label="logo for ${title}">
              <p>${description}</p>
            </div>
            <div class="buttons-panel">
              <a onClick="toggleSides(this)" class="card-button ${specialsShowClass}"><i class="fas fa-long-arrow-alt-left"></i> ${('Back').toUpperCase()}</a>
              <a class="card-button ${ticketButtonShowClass}" href=${ticketURL}><i class="fas fa-ticket-alt"></i> ${('Tickets').toUpperCase()}</a>
              <a class="card-button ${presaleShowClass}" href=${ticketURL}><i class="fas fa-ticket-alt"></i> ${(`Presale: ${presaleDescription}`).toUpperCase()}</a>
            </div>
          </div>
      </div>

    </div>
  `);
});

function toggleSides(button) {
  $(button).parent().parent().parent().parent().children().toggleClass('hide');
}

// Monthly label logic - there's a more clean way of going about this though
$( ".splitterJan:first" ).addClass( "monthHeading" );
$( ".splitterFeb:first" ).addClass( "monthHeading" );
$( ".splitterMar:first" ).addClass( "monthHeading" );
$( ".splitterApr:first" ).addClass( "monthHeading" );
$( ".splitterMay:first" ).addClass( "monthHeading" );
$( ".splitterJun:first" ).addClass( "monthHeading" );
$( ".splitterJul:first" ).addClass( "monthHeading" );
$( ".splitterAug:first" ).addClass( "monthHeading" );
$( ".splitterSept:first" ).addClass( "monthHeading" );
$( ".splitterOct:first" ).addClass( "monthHeading" );
$( ".splitterNov:first" ).addClass( "monthHeading" );
$( ".splitterDec:first" ).addClass( "monthHeading" );
