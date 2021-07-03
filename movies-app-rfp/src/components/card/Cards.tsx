import {img_300,unavailable } from '../../config/imgConfig';
import { GlobalContext } from '../../context/GlobalState';
import { useContext } from 'react';
import '../Home.css';


export const Cards:React.FC<{props:any}> = ({props}) => {
  const {
    addToWatched,
    addToWatchlist
  } = useContext(GlobalContext)
    return (
        <div key={props.id} >
                <div className="card mb-3" >
                    <h5 className='card-header'>{props.name || props.title}</h5>
                      <h5 className="card-title"><span className={`badge rounded-pill ${props.vote_average>5? 'bg-success': 'bg-danger' }`}>{props.vote_average}</span></h5>
                    <img src={props.poster_path? `${img_300}/${props.poster_path}` : unavailable} alt={props.name || props.title}  />
                    <div className="card-footer text-muted">
                      {props.first_air_date}
                      <div className="card-footer-btn">
                        <button type="button" className="btn btn-primary" onClick= {() => {addToWatched(props.title || props.name)}}><i className="fas fa-check-square"></i> Watched</button>
                        <button type="button" className="btn btn-danger" onClick= {() => {addToWatchlist(props.title || props.name)}}><i className="fas fa-shopping-cart"></i> Wishlist</button>
                      </div>
                    </div>
                </div>
        </div>
    )
}


