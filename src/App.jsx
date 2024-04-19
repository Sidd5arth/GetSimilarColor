import React, { useEffect, useState } from "react";
import { getColors } from "./apis/getColors";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Display from "./Components/Display";
import { Circles } from "react-loader-spinner";
import { Zenitho } from "uvcanvas";
import useColors from "./hooks/useColors";
import { isValidHex, isValidRGB, rgbStringToHex } from "./utils/checkColor";
import { toast } from "react-hot-toast";
function App() {
    const { getSimilarColor, similarColors, loading } = useColors();
    const [description, setDescription] = useState();
    const [colorArray, setColorArray] = useState();
    const [filterColorArray, setFilterColorArray] = useState();
    const [inputValue, setInputValue] = useState("");
    const [searchLoading, setSearchLoading] = useState(false);
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
        console.log("incomming");
        if (similarColors && similarColors.length > 0) {
            console.log(similarColors);
            setFilterColorArray([...similarColors]);
        }
    }, [similarColors]);

    const handleClick = () => {
        setSearchLoading(true);
        const isHex = isValidHex(inputValue);
        console.log(isHex);
        const isRGB = isValidRGB(inputValue);
        console.log(isRGB);
        if (isHex) {
            if (isHexCodeInArray(inputValue, colorArray)) {
                console.log("go");
                getSimilarColor(inputValue, colorArray);
            }
        } else if (isRGB) {
            const hex = rgbStringToHex(inputValue);
            console.log(hex);
            if (isHexCodeInArray(hex, colorArray)) {
                getSimilarColor(hex, colorArray);
            }
        } else {
            toast.error("no a valid color");
        }
        setSearchLoading(false);
    };
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const isHexCodeInArray = (hexCode, colorArray) => {
        return colorArray.some((color) => color.hex === hexCode);
    };

    console.log(description);
    console.log(loading);
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
                    {description && (
                        <>
                            <h1 style={{ fontSize: "3em" }}>945 most Common RGB Colors</h1>
                            <p>{description.slice(42)}</p>
                            <Input onChange={handleChange} searchQuery={inputValue} />
                            <Button onClick={handleClick} text="Search" loading={searchLoading} />
                        </>
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
