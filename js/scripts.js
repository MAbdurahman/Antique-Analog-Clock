/**
 * The Antique Analog Clock Script Sheet
 * @author:  Mahdi Abdurrahman
 * @date:  6 April 2017
 * @version:  1.0.0.1
 */

$(function(){
    //Global Variables
    var container = document.getElementById('container');
    var clockImage = document.getElementById('clock');
    var hourImage = document.getElementById('hourImage');
    var minuteImage = document.getElementById('minuteImage');
    var secondImage = document.getElementById('secondImage');
    var properties = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
        property,
        element = document.createElement('div');

    for(var i = 0, l = properties.length; i < l; i++) {
        if(typeof element.style[properties[i]] !== "undefined") {
            property = properties[i];
            break;
        }
    }

    if(window.location.hash === "#clock") {
        startClock();
        $('p.start a').remove();


    } else {
        $('#start').click(function() {
            startClock();
            $('p.start a').remove();

        });
    }

    /**
     * startClock Function - declares and initializes the date, hour, minute, and second; and
     * then performs and calculates the degrees for the hour, minute, and second. Further, the
     * changing of the colors of the background, clock face, and clock hands at 0600 and 1800
     * hours is executed in this function.
     * @param Void
     */
    function startClock() {
        var angle = 360/60,
            date = new Date(),
            hours = date.getHours(),
            hour = date.getHours() % 12,
            minute = date.getMinutes(),
            second = date.getSeconds(),
            hourAngle = (360/12) * hour + (360/(12*60)) * minute;

        if ((hours >= 18) && (minute >= 0) || (hours < 6) && (minute >= 0)) {
            container.style.background = "#363634";
            clockImage.style.background = "url(img/clockFace-2.jpg)";
           // clockImage.className = "changed";
            hourImage.src = "img/hourHand-2.png";
            minuteImage.src = "img/minuteHand-2.png";
            secondImage.src = "img/secondHand.png";

        } else {
            container.style.background = "#ffffd4";
            clockImage.style.background = "url(img/clockFace-1.jpg)";
           // clockImage.removeAttribute("changed");
            hourImage.src = "img/hourHand-1.png";
            minuteImage.src = "img/minuteHand-1.png";
            secondImage.src = "img/secondHand.png";

        }

        if(property) {
            $('#minute')[0].style[property] = 'rotate('+angle * minute+'deg)';
            $('#second')[0].style[property] = 'rotate('+angle * second+'deg)';
            $('#hour')[0].style[property] = 'rotate('+hourAngle+'deg)';

        }
    }//end of the startClock Function
});
