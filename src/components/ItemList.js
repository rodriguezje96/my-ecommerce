import { Item } from './Item.js'

export const ItemList = ({ items }) => {
    return (
        <div>
                <h2>Productos Destacados</h2>
            <div className="row">
                {
                    items.map((item) => <Item item={item}></Item>)
                }
            </div>
        </div>
    )
}
