import { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Cards } from './card/Cards';
import './Home.css';





export const Profile:React.FC = () => {
    const { watched } = useContext(GlobalContext);
    const { watchlist } = useContext(GlobalContext);

    
    return (
        <div>
            {watched.map((movie:any) => <Cards props={movie} key={movie}></Cards>)}
        </div>
    )
}


