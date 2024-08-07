export function generateOTP() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    function getRandomElement(str) {
        return str.charAt(Math.floor(Math.random() * str.length));
    }

    const otpArray = [];

    for (let i = 0; i < 3; i++) {
        otpArray.push(getRandomElement(letters));
        otpArray.push(getRandomElement(numbers));
    }

    for (let i = otpArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [otpArray[i], otpArray[j]] = [otpArray[j], otpArray[i]];
    }

    return otpArray.join("");
}
