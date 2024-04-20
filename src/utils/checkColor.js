export function isValidRGB(value) {
    const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;

    const match = value.match(rgbRegex);
    if (!match) {
        return false;
    }

    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);

    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
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
