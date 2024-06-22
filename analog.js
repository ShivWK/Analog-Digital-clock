setInterval(()=>{
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    //review the order of algebra calculation

    const hRotation = 30*h + m/2 + s/120;
    const mRotation = 6*m + s/10;
    const sRotation = 6*s;

    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    hourHand.style.transform=`rotate(${hRotation}deg)`;
    minuteHand.style.transform=`rotate(${mRotation}deg)`;
    secondHand.style.transform=`rotate(${sRotation}deg)`;

},1000);