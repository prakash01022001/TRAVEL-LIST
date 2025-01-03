import styles from "../styles/Header.module.css";
import Emoji from "./Emoji";

function Header() {
    return (
        <div className={styles.header}>
            <h1>
                <Emoji txt="🌴" /> Far Away <Emoji txt="🧳" />
            </h1>
        </div>
    );
}

export default Header;
