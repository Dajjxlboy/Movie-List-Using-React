import React from 'react'
import './Daftarfilm.css'
import Grid from'@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

function Daftarfilm() {
    return (
        <div class="listfilm">
        <Grid container>
         <Grid item xs={12} sm={6} md={3}>
             <Paper>
            <img class="poster"src={"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg"} alt="John Wick"/>
            <h4>JOHN WICK</h4>
            <p class="genre">Action</p>
            <button>Add to Watchlist</button>
             </Paper>
             </Grid>
             <Grid item xs={12} sm={6} md={3}>
             <Paper>
            <img class="poster" src={"https://i.pinimg.com/originals/6f/17/4a/6f174a70984dc45ddef4a42e8745709b.jpg"} alt="The Raid"/>   
             <h4>THE RAID</h4>
             <p class="genre">Action</p>
             <button>Add to Watchlist</button>
             </Paper>
             </Grid>    
             <Grid item xs={12} sm={6} md={3}>
             <Paper>
            <img class="poster" src={"https://resizing.flixster.com/3gQkHobbvHbE93LA7I4l0u1LkvE=/206x305/v2/https://flxt.tmsimg.com/assets/p21702_p_v10_ab.jpg"} alt="Rush Hour"/>
            <h4>RUSH HOUR</h4>
            <p class="genre">Action, Comedy</p>
            <button>Add to Watchlist</button>
             </Paper>
             </Grid> 
             <Grid item xs={12} sm={6} md={3}>
             <Paper>
            <img class="poster" src={"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Rush_Hour_3_poster.png/220px-Rush_Hour_3_poster.png"} alt="RUSH HOUR 3"/>
            <h4>RUSH HOUR 3</h4>
            <p class="genre">Action, Comedy</p>
            <button>Add to Watchlist</button>
             </Paper>
             </Grid>           
        </Grid>
        </div>
    )
}

export default Daftarfilm;