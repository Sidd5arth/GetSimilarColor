import React from "react";
import PropTypes from "prop-types";

const Input = ({ onChange, searchQuery, onKeyDown }) => {
    const handleColorChange = (e) => {
        onChange({ target: { value: e.target.value } });
    };
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ position: "relative", flex: "1" }}>
                <input
                    onKeyDown={onKeyDown}
                    type="text"
                    placeholder="Search color here . . ."
                    aria-label="Search color"
                    value={searchQuery}
                    onChange={(e) => onChange(e)}
                    style={{
                        background: "rgba(255, 255, 255, 0.28)",
                        backdropFilter: "blur(9px)",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        padding: "1em 1.2em",
                        borderRadius: "1em",
                        fontFamily: "poppins",
                        color: "#fefefe",
                        outline: "none",
                        fontSize: "1em",
                        width: "100%",
                        margin: "1em 0em",
                    }}
                />
                <div style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}>
                    <input
                        type="color"
                        onChange={handleColorChange}
                        onKeyDown={onKeyDown}
                        style={{
                            width: "30px",
                            height: "30px",
                            padding: "0",
                            margin: "0",
                            border: "none",
                            background: "none",
                            appearance: "none",
                            cursor: "pointer",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
};

export default Input;
