/*

1. App
    1.1. Header
    1.2. AddItems
    1.3. Items
         1.3.1. Item
    1.4. Filter
    1.5. Footer

#5CB338 ==> Heading
#ECE852 ==> AddItems
#FFC145 ==> ItemList
#FB4141 ==> Footer

*/

import { useState } from "react";

import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Filter from "./components/Filter";

import "./index.css";

const appStyle = {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "7rem 5rem 1fr 4rem auto",
};

// const items = [
//     { name: "shirts", count: 2, packed: false },
//     { name: "shirts", count: 2, packed: false },
//     { name: "charger", count: 2, packed: false },
// ];

// const items = {
//     shirts: { count: 2, packed: false, name: "shirts" },
//     cable: { count: 1, packed: true, name: "cable" },
//     powerBank: { count: 2, packed: false, name: "powerBank" },
// };

// [{ count: 2, packed: false, name: "shirts" }, { count: 1, packed: true, name: "cable" }, { count: 2, packed: false, name: "powerBank" }]

function sortItemsArr(itemsArr, sort) {
    if (sort === "input-order") {
        return itemsArr;
    }

    if (sort === "description") {
        itemsArr.sort(function (item1, item2) {
            return item1.name.localeCompare(item2.name);
        });
        return itemsArr;
    }

    if (sort === "status") {
        itemsArr.sort(function (item1, item2) {
            if (item1.packed === item2.packed) return 0;
            if (item1.packed === true && item2.packed === false) return 1;
            if (item1.packed === false && item2.packed === true) return -1;
        });
        return itemsArr;
    }
}

function App() {
    const [items, setItems] = useState({});
    const [sort, setSort] = useState("input-order");

    // Derived State
    const itemsArr = sortItemsArr(Object.values(items), sort);

    const totalItems = itemsArr.length;
    const packedItems = itemsArr.reduce(function (acc, item) {
        if (item.packed) acc++;
        return acc;
    }, 0);
    const packedPersentage = ((packedItems / totalItems) * 100).toFixed(2);

    function addItem(item) {
        setItems(function (items) {
            
            // Create
            items[item.name] = item;
            return { ...items };
        });
    }

    function updateItem(nameKey, packed) {
        setItems(function (items) {
            // Update
            items[nameKey].packed = packed;
            return { ...items };
        });
    }

    function deleteItem(nameKey) {
        setItems(function (items) {
            // Delete
            delete items[nameKey];
            return { ...items };
        });
    }

    function filterItems(sortValue) {
        setSort(sortValue);
    }

    function clearList() {
        setItems({});
    }

    return (
        <div style={appStyle}>
            <Header />
            <AddItem addItem={addItem} />
            <ItemList  
                deleteItem={deleteItem}
                updateItem={updateItem}
                items={itemsArr}
            />
            <Filter clearList={clearList} filterItems={filterItems} />
            <Footer
                totalItems={totalItems}
                packedItems={packedItems}
                packedPersentage={packedPersentage}
            />
        </div>
    );
}

export default App;