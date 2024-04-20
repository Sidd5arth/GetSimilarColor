import React from "react";
import { Circles } from "react-loader-spinner";

const Button = ({ onClick, text, loading }) => {
    return (
        <div>
            {!loading ? (
                <button
                    onClick={onClick}
                    style={{
                        background: "rgba(255, 255, 255, 0.28)",
                        backdropFilter: "blur(9px)",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        color: "#fefefe",
                        padding: "1em 1.2em",
                        borderRadius: "1em",
                        boxShadow: "var(--shadow)",
                        fontFamily: "poppins",
                        fontSize: "0.8em",
                        cursor: "pointer",
                    }}
                >
                    {text}
                </button>
            ) : (
                <Circles />
            )}
        </div>
    );
};

export default Button;
