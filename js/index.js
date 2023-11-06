const hourHand = document.getElementById('hour-hand')
const minuteHand = document.getElementById('minute-hand')


function setClock() {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');

    const currentDate = new Date();
    const hours = currentDate.getHours() % 12; 
    const minutes = currentDate.getMinutes();

    const hourDegree = (hours * 30) + (0.5 * minutes);
    const minuteDegree = minutes * 6;

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
}

setClock


setInterval(setClock, 1000);


/**
 * 
 * Date.TimeNow() -> SetInterval
 * hourHand ->  rotate them somehow to represent the hour
 * minuteHand -> rotate them somehow to represent the hour
 * 
 * 
 * image.style would be rotate by some degreees and then the image tag would be changed with whaterver we have computed
 * 
 * image.style would be rotate by some degreees and then the image tag would be changed with whaterver we have computed
 * Any subsequent rotation that we do are based on css animation frame
 * 
 * **** More Efficient ***
 * 
 * Have a thought frame ---->
 * 
 */

