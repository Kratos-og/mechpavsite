import { BiSortAlt2 } from 'react-icons/bi'

const NameSort = props => {
    return (
        <li className="group">
            <a className="group-hover:bg-black text-white" onClick={() => props.setSortType('name')}>
                <BiSortAlt2 className='text-lg' />
                <span>Name</span>
            </a>
        </li>
    )
}

export default NameSort;