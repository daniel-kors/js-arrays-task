const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
const getTheNearestLocation = (locations, point) => {
    if (locations.length === 0) return null;

    let nearestLocation = null;
    let minDistance = Infinity;

    for (const location of locations) {
        const [name, coordinates] = location;
        const distance = getDistance(coordinates, point);

        if (distance < minDistance) {
            minDistance = distance;
            nearestLocation = location;
        }
    }

    return nearestLocation;
};
export {getTheNearestLocation};
// END
