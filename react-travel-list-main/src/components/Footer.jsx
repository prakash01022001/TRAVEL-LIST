import styles from "../styles/Footer.module.css";

function Footer(prop) {
    const {totalItems,packedItems,packedPersentage} = prop;
    return (
        <div className={styles.footer}>
            You have {totalItems} 3 items on your list, and you already packed {" "} {packedItems} ({packedPersentage}%)
        </div>
    );
}

export default Footer;
