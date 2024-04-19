import React from "react";
import PropTypes from "prop-types";

const Input = ({ onChange, searchQuery }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search color here . . ."
                aria-label="Search color"
                value={searchQuery}
                onChange={(e) => onChange(e)}
                style={{
                    background: "rgba(255, 255, 255, 0.28)",
                    backdropFilter: "blur(9px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    margin: "1em 0em",
                    width: "100%",
                    padding: "1em 1.2em",
                    borderRadius: "1em",
                    fontFamily: "poppins",
                    color: "#fefefe",
                    outline: "none",
                }}
            />
        </div>
    );
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
};

export default Input;
