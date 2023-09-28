import Sale from "./Sale";

const RecentSales = props => {
    const sales = props.data?.map(sale => <Sale image={props.image} {...sale} />)
    return (
        <div className="py-10">
            <div className="flex flex-col gap-4 mt-5">
                {sales}
            </div>
        </div>
    )
}

export default RecentSales;