const shapeTriangle = (responses) => {
    return `<polygon points = "150, 18 244, 182 56, 182" fill="${responses.color}" />`
}

const shapeCirlce = (responses) => {
    return `<circle cx="25" cy="75" r="20" fill="${responses.color} />`
}

const shapeSquare = (responses) => {
    return `<rect width="100" height="100" fill="${responses.color} />`
}

module.exports = {
    shapeTriangle,
    shapeCirlce,
    shapeSquare
}