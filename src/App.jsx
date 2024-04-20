import React, { useEffect, useState } from "react";
import { getColors } from "./apis/getColors";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Display from "./Components/Display";
import { Circles } from "react-loader-spinner";
import { Zenitho } from "uvcanvas";
import useColors from "./hooks/useColors";
import { isValidHex, isValidRGB, rgbStringToHex } from "./utils/checkColor";
import ToasterProvider from "./Providers/ToasterProvider";
import toast from "react-hot-toast";
function App() {
    const { getSimilarColor, similarColors, loading } = useColors();
    const [description, setDescription] = useState();
    const [colorArray, setColorArray] = useState();
    const [filterColorArray, setFilterColorArray] = useState();
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
        const getColorData = async () => {
            const color = await getColors();
            if (color) {
                setDescription(color.description);
                setColorArray(color.colors);
                setFilterColorArray(color.colors);
            }
        };
        getColorData();
    }, []);

    useEffect(() => {
        if (similarColors && similarColors.length > 0) {
            setFilterColorArray([...similarColors]);
            toast.success("100 similar colors below");
        }
    }, [similarColors]);

    const handleClick = () => {
        const isHex = isValidHex(inputValue);
        const isRGB = isValidRGB(inputValue);
        if (isHex) {
            getSimilarColor(inputValue, colorArray);
        } else if (isRGB) {
            const hex = rgbStringToHex(inputValue);
            getSimilarColor(hex, colorArray);
        } else {
            toast.error("not a valid color");
        }
    };
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleClick();
        }
    };

    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >
            <ToasterProvider />
            <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "100%", height: "100%" }}>
                    <Zenitho />
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "80%",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    {description ? (
                        <>
                            <h1 style={{ fontSize: "3em" }}>945 most Common RGB Colors</h1>
                            <p>{description.slice(42)}</p>
                            <Input onChange={handleChange} onKeyDown={handleKeyPress} searchQuery={inputValue} />
                            <Button onClick={handleClick} text="Search" loading={loading} />
                        </>
                    ) : (
                        <Button text="Retry" onClick={() => window.location.reload()} />
                    )}
                </div>
            </div>
            {filterColorArray ? (
                <Display colorArray={filterColorArray} />
            ) : (
                <div style={{ width: "100%", height: "100", marginTop: "1em", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {" "}
                    <Circles />{" "}
                </div>
            )}
        </div>
    );
}

export default App;
