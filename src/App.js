import React, {useState} from 'react';
import Header from './Header';
import './App.css';
import './Daftarfilm.css'
import Grid from'@material-ui/core/Grid'
import { Paper } from '@material-ui/core';

const PAGE_MOVIES = 'movies';
const PAGE_CART = 'cart';

function App() {
const [cart, setCart] = useState([]);
const [page, setPage] = useState(PAGE_MOVIES);
const [movies] = useState ([
{
  image : 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg',
  name: 'John Wick',
  genre: 'Action',

},
{
  image : 'https://i.pinimg.com/originals/6f/17/4a/6f174a70984dc45ddef4a42e8745709b.jpg',
  name: 'The Raid',
  genre: 'Action',

},
{
  image : 'https://resizing.flixster.com/3gQkHobbvHbE93LA7I4l0u1LkvE=/206x305/v2/https://flxt.tmsimg.com/assets/p21702_p_v10_ab.jpg',
  name: 'Rush Hour',
  genre: 'Action, Comedy',

},
{ 
  image : 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Rush_Hour_3_poster.png/220px-Rush_Hour_3_poster.png',
  name: 'Rush Hour 3',
  genre: 'Action, Comedy',

},
{ 
  image : 'https://m.media-amazon.com/images/M/MV5BNWQ5ZjFiNDMtMjNiNy00YjNjLTk5OWUtMjE1ZjAyZGRkOWRlXkEyXkFqcGdeQXVyODkxMTU1Njc@._V1_FMjpg_UX1000_.jpg',
  name: 'Mr.Bones',
  genre: 'Action, Slice of Life',

},
{ 
  image : 'https://m.media-amazon.com/images/M/MV5BMTI2ODYxNzM3N15BMl5BanBnXkFtZTcwNDMwODUyMQ@@._V1_.jpg',
  name: 'The Gods Must Be Crazy',
  genre: 'Comedy',

},
{ 
  image : 'https://m.media-amazon.com/images/M/MV5BNDkxODhlNmItYjhiMC00ZjNmLWE2YmMtOTQ3NmQxM2YzOGFiXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
  name: 'Johnny English',
  genre: 'Action, Comedy',

},
{ 
  image : 'https://m.media-amazon.com/images/M/MV5BMjI4MjQ3MjI5MV5BMl5BanBnXkFtZTgwNjczMDE4NTM@._V1_FMjpg_UX1000_.jpg',
  name: 'Johnny English Strikes Again',
  genre: 'Action, Comedy',

},
]);


const tambahkeranjang = (product) => {
  console.log('nambah bos')
  setCart([...cart,product]);
};

const hapuskeranjang = (productToRemove) => {
setCart(
  cart.filter((product) => product !== productToRemove)
);
};

const navigateTo = (nextPage) => {
setPage (nextPage);
}

const renderMovies = () =>
<>
        <div class="movies">
          {movies.map((product,idx) => (
            <div className="produk" key={idx}>
              <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper>
                    <img src={product.image} alt={product.name}/>
                    <div className='judul'>
                    <h3>{product.name}</h3>
                    <h4>{product.genre}</h4>
                    <div className='tombol'>
                    <button onClick={() => tambahkeranjang(product)}>Add to Watchlist</button>
                    </div>
                    </div>
                  </Paper>  
                </Grid>          
              </Grid>
            </div>
          ))}  
        </div>
      </>

const renderCart = () => 
<>
      <h1>MY WATCHLIST</h1>
        <div class="movies">
          {cart.map((product,idx) => (
            <div className="produk" key={idx}>
              <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper>
                    <img src={product.image} alt={product.name}/>
                    <h3>{product.name}</h3>
                    <h4>{product.genre}</h4>
                   <button onClick={() => hapuskeranjang(product)}>Remove</button>
                  </Paper>
                </Grid>          
              </Grid>
            </div>
          ))}  
        </div>
      </>
  


  return (
  <div className="App">
    <Header/>
    <button onClick={() => navigateTo(PAGE_CART)}>GO TO WATCHLIST({cart.length})</button>
    <button onClick={() => navigateTo(PAGE_MOVIES)}>MOVIE LIST</button>
    {page === PAGE_MOVIES && renderMovies()}
    {page === PAGE_CART && renderCart()}
      
  </div>
  );
}

export default App;
