const emojiStyle = {
    fontFamily: "Noto Color Emoji",
};

function Emoji(prop) {
    const { txt } = prop;
    return <span style={emojiStyle}>{txt}</span>;
}

export default Emoji;
