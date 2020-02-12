console.log(singleGameTickets)
singleGameTickets.forEach((game)=>{
  let {team, date, location, time, home } = game;
  $('#upcoming-games-schedule').append(`
    <div class="ticket-card">
      <div class="ticket-card-body">
        <div class="logo-holder">
          <img class="logo-image" src='./img/SRFC_TEAMs/Austin_away_large.jpg'>
        </div>
      </div>
    </div>
  `);
});