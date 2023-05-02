const shapeTriangle = (responses) => {
    return `<polygon points = "150, 18 244, 182 56, 182" fill="${responses.color}" />`
}

const shapeCircle = (responses) => {
    return `<circle cx="225" cy="275" r="220" fill="${responses.color}" />`
}

const shapeSquare = (responses) => {
    return `<rect width="100" height="100" fill="${responses.color}" />`
}

module.exports = {
    shapeTriangle,
    shapeCircle,
    shapeSquare
}