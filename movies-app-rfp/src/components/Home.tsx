import {MovieData} from '../config/apiCall';
import { Cards } from './card/Cards';
import './Home.css';


interface UpcomingProps {
    data: MovieData[]
}

export const Home:React.FC<UpcomingProps> = ({data}:UpcomingProps) => {


    return (< div className='cards'>
        {data.map(mov => (
            <Cards props={mov} key={mov.id}/>
        ))}
        </div>
    )
}


