function outputDate() {
    let d = new Date();
    let time = d.toLocaleDateString();
    
    console.log(time);
}

setInterval(outputDate, 1000);