import React from "react";
import useColors from "../hooks/useColors";

const ColorCards = ({ valueInHex, colorName }) => {
    const { hexToRGB } = useColors();
    const colorRGB = hexToRGB(valueInHex);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
                borderRadius: "1em",
                padding: "1em",
                height: "100%",
                width: "100%",
                background: "rgba(255, 255, 255, 0.28)",
                backdropFilter: "blur(9px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                gap: "0.8em",
            }}
        >
            <div
                style={{
                    height: "3em",
                    width: "3em",
                    borderRadius: "50%",
                    boxShadow: `inset -10px -10px 47px -14px rgba(0,0,0,0.49), 10px 40px 20px 0.5px rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.2)`,
                    backgroundColor: valueInHex,
                }}
            ></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 style={{ wordWrap: "break-word" }}>{colorName}</h4>
                <p style={{ fontSize: "0.86em" }}>{valueInHex}</p>
            </div>
        </div>
    );
};

export default ColorCards;
