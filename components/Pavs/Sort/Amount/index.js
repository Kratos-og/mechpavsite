import { BiSortAlt2 } from 'react-icons/bi'

const AmountSort = props => {
    return (
        <li className="group"><a className="group-hover:bg-black" onClick={() => props.setSortType('amount')}>
            <BiSortAlt2 className='text-lg' />
            <span>Mint Amount</span>
        </a></li>
    )
}

export default AmountSort;