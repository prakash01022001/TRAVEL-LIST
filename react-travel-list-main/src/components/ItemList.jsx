import styles from "../styles/ItemList.module.css";
import Item from "./Item";

function ItemList(props) {
    const { items, updateItem,deleteItem } = props;
    return (
        <div className={styles.itemList}>
            {items.map(function (item, index) {
                return (
                    <Item
                        name={item.name}
                        count={item.count}
                        packed={item.packed}
                        updateItem={updateItem}
                        deleteItem={deleteItem}

                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default ItemList;
