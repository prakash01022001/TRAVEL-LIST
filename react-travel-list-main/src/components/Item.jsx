import Emoji from "./Emoji";
import styles from "../styles/Item.module.css";

function Item(prop) {

    const { count, name, packed,updateItem,deleteItem } = prop;

    function handleOnChange(){
        updateItem(name, !packed);
        
    }

    function handleDelete() {
        deleteItem(name);
    }
    return (
        <div className={styles.item}>
            <input type="checkbox" id={name} checked={packed} onChange = {handleOnChange}/>
            <label className = {packed ? styles.packed : ""} htmlFor={name}>
                <span>
                    {count} {name}
                </span>
            </label>
            
            <button onClick={handleDelete}>

            </button>

            <button>
                <Emoji txt="❌" />
            </button>
        </div>
    );
}

export default Item;
