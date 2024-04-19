export function isValidRGB(value) {
    const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;

    return rgbRegex.test(value);
}

export function isValidHex(value) {
    const hexRegex = /^#?([0-9a-fA-F]{3}){1,2}$/;

    return hexRegex.test(value);
}

export function rgbStringToHex(rgbString) {
    const [r, g, b] = rgbString.match(/\d+/g).map(Number);
    const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
