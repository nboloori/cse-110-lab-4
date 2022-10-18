function evaluateObject(object) {
    for (property in object) {
        if (property[0] == 'r' || object[property] % 2 == 1) {
            console.log(object[property]);
        }
    }
}

evaluateObject({
    redCars: 21,
    blueCars: 45,
    greenCars: 12, 
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
});