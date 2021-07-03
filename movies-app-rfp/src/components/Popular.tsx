import {MovieData} from '../config/apiCall';
import { Cards } from './card/Cards';
import './Home.css';


interface UpcomingProps {
    popular: MovieData[]
}

export const Popular:React.FC<UpcomingProps> = ({popular}:UpcomingProps) => {


    return (< div className='cards'>
        {popular.map(mov => (
            <Cards props={mov} key={mov.id}/>
        ))}
        </div>
    )
}
