import React from "react";
import ColorCards from "./ColorCards";
const Display = ({ colorArray }) => {
    return (
        <div style={{ width: "100%", padding: "1em", margin: "1em" }}>
            <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 2fr))", gridAutoRows: "180px", gap: "1em" }}>
                {colorArray.map((color) => (
                    <li key={color.hex} style={{ marginBottom: "1em", listStyle: "none" }}>
                        <ColorCards valueInHex={color.hex} colorName={color.color} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Display;
