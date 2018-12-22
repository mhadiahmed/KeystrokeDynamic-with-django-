/*
*********
    this is the signup page code to implement
*********
*/

$(document).ready(function() {
    var time = [],
        time2 = [],
        keys = [],
        field = $('#id_finger_printe'),
        count = [],
        timebetween = [];
    $('#id_password1').on('keyup keypress', function(e) {
        // if the event quale to keyup 
        if (e.type == 'keyup') {
            //the execute this
            clearInterval(count);
            time.push(timebetween);
            localStorage.setItem('time', JSON.stringify(time));
            field.val(time);
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
    $('#id_password2').on('keyup keypress', function(e) {
        // if the event quale to keyup 
        if (e.type == 'keyup') {
            //the execute this
            clearInterval(count);
            var output = $('#output');
            output.text(timebetween + ' ms');
            time.push(timebetween);
            localStorage.setItem('time', JSON.stringify(time));
            field.val(time);
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
    console.log(time)
});


/*
*********
    this is the login page code to implement
*********
*/
var time = [],
    count = [],
    ob,
    timebetween = [];
var dilog = confirm('do you want to use keystroke authentication');
if (dilog) {
    $(':button[type="submit"]').prop('disabled', true);
    $("#id_username").change(function() {
        var username = $(this).val();
        var form = $(this).closest("form");
        $.ajax({
            url: form.attr("data-validate-username-url"),
            data: form.serialize(),
            dataType: 'json',
            success: function(data) {
                const obj = data.genres[0]
                ob = obj.finger_printe
                console.log(ob)
            }

        })

    });


    $('#id_password').on('keyup keypress', function(e) {
        // if the event quale to keyup 
        if (e.type == 'keyup') {
            //the execute this
            clearInterval(count);
            time.push(timebetween);
            localStorage.setItem('time', JSON.stringify(time));

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

    function listCompare(list1, list2) {
        let result = 0;
        let final = (list1.length + list2.length) / 2;
        for (let x of list1) {
            for (let y of list2) {
                if (x == y) {
                    result += 1;
                }
            }
        }
        return (result / final * 100);
    }

    $('#id_password').change(function() {
        ls1 = time
        var array = ob.split(",").map(Number);
        ls2 = array
        var result = listCompare(ls1, ls2)
        if (result >= 50.0) {
            $(':button[type="submit"]').prop('disabled', false);
            clear()
        } else if (result <= 30.0) {
            $(':button[type="submit"]').prop('disabled', true);
            clear()
        } else {
            $(':button[type="submit"]').prop('disabled', true);
            clear()
        }

    });

    function clear() {
        time = [];
    }
}


/*
*********
    this is the core code from scratch
*********
*/
// //global variable
// var time = [];
// var time2 = [];
// var keys = [];

// //document ready  jquery code to get things ready
// $(document).ready(function() {
//     // a simple way to execute the code base on prompt value
//     var an = prompt('enroll?');
//     //the enroll part to save the data and compare it 
//     //with the auther list in the verifcation part
//     if (an == 'enroll') {

//         timebetween = 0;
//         var count = null;
//         // execute the keyup and keypress function while writeing in the input field
//         $('#txt').on('keyup keypress', function(e) {
//             // if the event quale to keyup 
//             if (e.type == 'keyup') {
//                 //the execute this
//                 clearInterval(count);
//                 var output = $('#output');
//                 output.text(timebetween + ' ms');
//                 time.push(timebetween);
//                 localStorage.setItem('time', JSON.stringify(time));
//                 time_ = JSON.parse(localStorage.getItem('time'));
//                 console.log(time_);
//             } else {
//                 //else execute this
//                 timebetween = 0;
//                 count = setInterval(function() {
//                     timebetween++;

//                 }, 1);
//             }
//             /*the previuse code is about create a counter every time that the user 
//             press a key and create a timer for the keyup and keydone "keypress" and get 
//             the deffrent between them then save it in a list then save the list in
//             the browser cash
//             */
//         });

//     } else if (an == 'verify') {

//         the verify part doing the same thing up there and save it in temprary list
//         the compare it with the previuse list that we save in the browser cash

//         timebetween = 0;
//         var count = null;
//         $('#txt').on('keyup keypress', function(e) {
//             if (e.type == 'keyup') {
//                 clearInterval(count);
//                 var output = $('#output');
//                 output.text(timebetween + ' ms');
//                 time2.push(timebetween);
//                 console.log(time2);
//             } else {
//                 timebetween = 0;
//                 count = setInterval(function() {
//                     timebetween++;

//                 }, 1);
//             }
//         });
//     }
//     /* the compare funcation to compare the two list and give you the digree 
//     of how close */
//     jQuery.extend({
//         listCompare: function(list1, list2) {
//             let result = 0;
//             let final = (list1.length + list2.length) / 2;
//             for (let x of list1) {
//                 for (let y of list2) {
//                     if (x == y) {
//                         result += 1;
//                     }
//                 }
//             }
//             return result / final * 100;
//         }
//     });
//     /* the trriger of the compare function is by press the esc key 
//     to execute this function*/
//     $('#txt').keydown(function(e) {
//         keys[e.keyCode] = true;
//         if (e.keyCode == 27) {
//             var list1 = JSON.parse(localStorage.getItem('time'));
//             var list2 = time2;
//             var result = [];
//             if (jQuery.listCompare(list1, list2) >= 50.0) {
//                 alert('hello and welcome');
//             } else if (jQuery.listCompare(list1, list2) <= 40.0) {
//                 alert('is this you?');
//             } else if (jQuery.listCompare(list1, list2) >= 0.0) {
//                 alert('thats defnatly not you');
//             }

//         }

//     });
// });