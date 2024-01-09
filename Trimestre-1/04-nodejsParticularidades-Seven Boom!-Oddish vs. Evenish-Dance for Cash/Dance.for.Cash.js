const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin) {
    return /\d{4}/.test(pin) ? pin.split('').map((digit, i) => MOVES[(parseInt(digit) + i) % MOVES.length]).join(' ') : 'Invalid input.';
}

console.log(danceConvert("3856"));
