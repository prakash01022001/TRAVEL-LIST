import styles from "../styles/Filter.module.css";
function Filter(props) {
    const { filterItems, clearList} = props;

    function handleChange(e) {
    filterItems(e.target.value);
    }
    return (
        <div className={styles.filter}>
            <select onChange = {handleChange}>
                <option value="input-order">Sort by Input Order</option>
                <option value="description">Sort by Description</option>
                <option value="status">Sort by Status</option>
            </select>

            <button onClick = {clearList}>Clear List</button>
        </div>
    );
}

export default Filter;
