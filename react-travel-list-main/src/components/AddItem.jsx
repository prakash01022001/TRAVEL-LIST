import { useState } from "react";
import styles from "../styles/AddItem.module.css";
import Emoji from "./Emoji";

function AddItem(props) {
    const { addItem } = props;

    const [item, setItem] = useState({ packed: false, count: 1, name: "" });

    function hadleCountChange(e) {
        setItem((item) => ({ ...item, count: +e.target.value }));
    }

    function handleNameChange(e) {
        setItem((item) => ({ ...item, name: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (item.name === "") return;

        // Add Item to items
        addItem(item);

        // Reset Item
        setItem({ packed: false, count: 1, name: "" });
    }

    return (
        <div className={styles.addItem}>
            <p>
                What do you need for your <Emoji txt="😍" /> trip ?
            </p>
            <form onSubmit={handleSubmit}>
                <select onChange={hadleCountChange} value={item.count}>
                    {new Array(10).fill(0).map(function (_, index) {
                        return (
                            <option value={`${index + 1}`} key={index}>
                                {index + 1}
                            </option>
                        );
                    })}
                </select>

                <input
                    type="text"
                    value={item.name}
                    onChange={handleNameChange}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddItem;