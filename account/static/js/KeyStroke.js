//global variable
var time = [];
var time2 = [];
var keys = [];

//document ready  jquery code to get things ready
$(document).ready(function() {
    // a simple way to execute the code base on prompt value
    var an = prompt('enroll?');
    //the enroll part to save the data and compare it 
    //with the auther list in the verifcation part
    if (an == 'enroll') {

        timebetween = 0;
        var count = null;
        // execute the keyup and keypress function while writeing in the input field
        $('#txt').on('keyup keypress', function(e) {
            // if the event quale to keyup 
            if (e.type == 'keyup') {
                //the execute this
                clearInterval(count);
                var output = $('#output');
                output.text(timebetween + ' ms');
                time.push(timebetween);
                localStorage.setItem('time', JSON.stringify(time));
                time_ = JSON.parse(localStorage.getItem('time'));
                console.log(time_);
            } else {
                //else execute this
                timebetween = 0;
                count = setInterval(function() {
                    timebetween++;

                }, 1);
            }
            /*the previuse code is about create a counter every time that the user 
            press a key and create a timer for the keyup and keydone "keypress" and get 
            the deffrent between them then save it in a list then save the list in
            the browser cash
            */
        });

    } else if (an == 'verify') {
        /*
        the verify part doing the same thing up there and save it in temprary list
        the compare it with the previuse list that we save in the browser cash
        */
        timebetween = 0;
        var count = null;
        $('#txt').on('keyup keypress', function(e) {
            if (e.type == 'keyup') {
                clearInterval(count);
                var output = $('#output');
                output.text(timebetween + ' ms');
                time2.push(timebetween);
                console.log(time2);
            } else {
                timebetween = 0;
                count = setInterval(function() {
                    timebetween++;

                }, 1);
            }
        });
    }
    /* the compare funcation to compare the two list and give you the digree 
    of how close */
    jQuery.extend({
        listCompare: function(list1, list2) {
            let result = 0;
            let final = (list1.length + list2.length) / 2;
            for (let x of list1) {
                for (let y of list2) {
                    if (x == y) {
                        result += 1;
                    }
                }
            }
            return result / final * 100;
        }
    });
    /* the trriger of the compare function is by press the esc key 
    to execute this function*/
    $('#txt').keydown(function(e) {
        keys[e.keyCode] = true;
        if (e.keyCode == 27) {
            var list1 = JSON.parse(localStorage.getItem('time'));
            var list2 = time2;
            var result = [];
            if (jQuery.listCompare(list1, list2) >= 50.0) {
                alert('hello and welcome');
            } else if (jQuery.listCompare(list1, list2) <= 40.0) {
                alert('is this you?');
            } else if (jQuery.listCompare(list1, list2) >= 0.0) {
                alert('thats defnatly not you');
            }

        }

    });
});