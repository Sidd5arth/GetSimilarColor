import { useState } from "react";

const useColors = () => {
    const [similarColors, setSimilarColors] = useState(null);
    const [loading, setLoading] = useState(false);
    function hexToRGB(hex) {
        hex = hex.toString();
        return {
            r: parseInt(hex.substring(1, 3), 16),
            g: parseInt(hex.substring(3, 5), 16),
            b: parseInt(hex.substring(5, 7), 16),
        };
    }

    function cosineSimilarity(hex1, hex2) {
        const rgb1 = hexToRGB(hex1);
        const rgb2 = hexToRGB(hex2);
        console.log(rgb1, rgb2);
        const dotProduct = rgb1.r * rgb2.r + rgb1.g * rgb2.g + rgb1.b * rgb2.b;
        const magnitude1 = Math.sqrt(rgb1.r ** 2 + rgb1.g ** 2 + rgb1.b ** 2);
        const magnitude2 = Math.sqrt(rgb2.r ** 2 + rgb2.g ** 2 + rgb2.b ** 2);

        const similarity = dotProduct / (magnitude1 * magnitude2);
        return similarity;
    }

    const getSimilarColor = async (searchedColor, colorArray) => {
        setLoading(true);
        console.log("searchedColor", searchedColor);
        console.log("colorArray", colorArray);
        let tobeSortedArray = [];
        for (let i = 0; i < colorArray.length; i++) {
            const similarityValue = cosineSimilarity(searchedColor, colorArray[i].hex);
            console.log(similarityValue);
            tobeSortedArray.push({ color: colorArray[i].color, cosine: similarityValue, hex: colorArray[i].hex });
        }
        const arrayOf100 = tobeSortedArray.sort((a, b) => b.cosine - a.cosine).slice(0, 100);
        setLoading(false);
        console.log("done");
        console.log("tobeSortedArray", arrayOf100);
        setSimilarColors(arrayOf100);
    };

    return { getSimilarColor, similarColors, loading, hexToRGB };
};

export default useColors;
