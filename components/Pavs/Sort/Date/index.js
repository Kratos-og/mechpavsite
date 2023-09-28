import { BiSortAlt2 } from 'react-icons/bi'

const DateSort = props => {
    return (
        <li className="group"><a className="group-hover:bg-black" onClick={() => props.setSortType('date')}>
            <BiSortAlt2 className='text-lg' />
            <span>Mint Date</span>
        </a></li>
    )
}

export default DateSort;