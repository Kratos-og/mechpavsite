import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'
import AmountSort from './Amount';
import DateSort from './Date';
import NameSort from './Name';

const Sort = props => {
    return (
        <div className="dropdown dropdown-end  collapse-arrow">
            <label tabIndex={0} className="collapse-title text-white bg-pavs-red text-sm font-bold rounded-md py-3">Sort By</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 bg-[#3e3c3c] text-sm rounded-box shadow-lg text-white w-52 mt-4">
                <NameSort {...props} />
                <AmountSort {...props} />
                <DateSort {...props} />
            </ul>
        </div>
    )
}

export default Sort;