import { TopSeriesData } from '../config/apiCall';
import { Cards } from './card/Cards';


interface TSProps {
    series: TopSeriesData[];
}
export const TopRated:React.FC<TSProps> = ({series}:TSProps) => {
    return (< div className='cards'>
        {series.map(ser => (
            <Cards props={ser} key={ser.id}/>
        ))}
        </div>
    )
}
