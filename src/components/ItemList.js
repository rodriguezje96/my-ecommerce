import { Item } from './Item.js'

export const ItemList = ({ items }) => {
    return (
        <div>
            <div className="container col-4">
                <h2>Productos Destacados</h2>
                {
                    items.map((item) => <Item item={item}></Item>)
                }
            </div>
        </div>
    )
}
