function distanceFromHqInBlocks(blocks) {
    const hq = 42;
    const distBlocks = Math.abs(blocks - 42);
    return distBlocks;
}

function distanceFromHqInFeet(blocks) {
    const blockLength = 264;
    return distanceFromHqInBlocks(blocks) * blockLength;
}    

function distanceTravelledInFeet(start, destination) {
    const blockLength = 264;
    const distFeet = Math.abs(destination-start);
    return distFeet * blockLength;
  }

function calculatesFarePrice(start, destination) {
    const blockLength = 264;
    const distFeet = Math.abs(destination-start) * blockLength;
    let price = 0
    if (distFeet <=400) {
        price = 0
        return price;
    }
    else if (distFeet > 400 && distFeet <= 2000) {
        let price = (distFeet - 400) * .02;
        return price;
    }
    else if (distFeet > 2000 && distFeet <= 2500) {
        let price = 25;
        return price;
    }
    else if (distFeet > 2500) {
        let price = ("cannot travel that far");
        return price
  }
}