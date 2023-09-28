import { useState } from "react"
import { data } from "../../components/Common/pavsData"
import Filters from "../../components/Pavs/Filters"
import PavItem from "../../components/Pavs/PavItem"
import Sort from "../../components/Pavs/Sort"
import { HiFilter } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
const Pavs = props => {
    const [showMenu, setShowMenu] = useState(false);
    const [filters, setFilters] = useState({
        mechCompatible: null,
        speed: null,
        weight: null,
        bravery: null,
        cunning: null,
        intelligence: null,
        traitCount: null,
        types: []
    });
    const [sortType, setSortType] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);

    const onFiltersChange = (type, val) => {
        const modFilters = { ...filters };
        modFilters[type] = val;
        setFilters(modFilters);
    }

    const eventTypeChange = (eventType) => {
        let modFilters = { ...filters }
        let modEvents = [...modFilters.types];
        if (modEvents.includes(eventType)) {
            modEvents = modEvents.filter(evt => evt != eventType);
        }
        else {
            modEvents.push(eventType)
        }
        modFilters.types = modEvents;
        setFilters(modFilters);
    }

    const onClear = () => {
        setFilters({
            mechCompatible: null,
            speed: null,
            weight: null,
            bravery: null,
            cunning: null,
            intelligence: null,
            traitCount: null,
            types: []
        })
    }

    const onSort = (type) => {
        setSortType(type);
        if (!sortOrder || sortOrder == 'desc') {
            setSortOrder('asc');
        }
        else {
            setSortOrder('desc')
        }
        document.activeElement.blur();
    }

    let filteredData = [...data];
    //filters
    filteredData = filteredData.filter(item => {
        let res = true;
        Object.keys(item.properties).map(prop => {
            if (filters[prop] !== null && item.properties[prop] < filters[prop] && res) {
                res = false;
            }
        });
        if (filters['mechCompatible'] && !item['mechCompatible'])
            res = false;

        //event
        if (filters.types.length && !filters.types.includes(item.eventType)) {
            res = false
        }
        return res;
    })

    //sort
    if (sortType === 'name') {
        if (sortOrder == 'asc') {
            filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
        }
        else {
            filteredData = filteredData.sort((a, b) => b.name.localeCompare(a.name))
        }
    }
    else if (sortType === 'amount') {
        if (sortOrder == 'asc') {
            filteredData = filteredData.sort((a, b) => a.supply > b.supply ? 1 : -1);
        }
        else {
            filteredData = filteredData.sort((a, b) => a.supply < b.supply ? 1 : -1)
        }
    }
    else if (sortType === 'date') {
        if (sortOrder == 'asc') {
            filteredData = filteredData.sort((a, b) => new Date(a.mintDate) < new Date(b.mintDate) ? 1 : -1);
        }
        else {
            filteredData = filteredData.sort((a, b) => new Date(a.mintDate) > new Date(b.mintDate) ? 1 : -1)
        }
    }

    const pavs = filteredData.map(pav => <PavItem key={pav.id} {...pav} />)

    return (
        <div className="min-h-screen w-full h-full bg-gradient py-10 relative pt-20" id="cont">
            <div className="flex flex-col gap-7 w-full h-full mt-5 px-5 md:px-10">
                <div className="flex items-center justify-end">
                    <Sort sortType={sortType} sortOrder={sortOrder} setSortType={onSort} setSortOrder={setSortOrder} />
                </div>
                <div className="flex gap-6">
                    <div className="w-[400px] blurredBg text-white hidden md:block">
                        <Filters onFiltersChange={onFiltersChange} eventTypeChange={eventTypeChange} filters={filters} clear={onClear} />
                    </div>
                    <div className="w-full flex flex-col gap-5">

                        <div className="flex items-end pt-2 justify-end md:hidden">
                            <div className="px-8 py-3 flex items-center font-bold justify-center gap-4 bg-pavs-red text-white rounded-lg" onClick={() => setShowMenu(!showMenu)}>
                                <span>Filters</span>
                                <HiFilter className="text-xl" />
                            </div>
                        </div>
                        <div className={`w-[400px] bg-gradient text-white md:hidden py-5 fixed h-screen z-50 top-20 transition-all duration-100 ${showMenu ? 'left-0' : '-left-full'}`}>
                            <IoCloseSharp className="text-2xl absolute top-5 right-5" onClick={() => setShowMenu(false)} />
                            <Filters onFiltersChange={onFiltersChange} eventTypeChange={eventTypeChange} filters={filters} clear={onClear} />
                        </div>
                        <div className="w-full flex flex-wrap gap-5">
                            {pavs}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pavs