let newDate = new Date();
let datestring = newDate.toDateString() + ' ' + newDate.toTimeString();
var request = {
        "url": `https://message-mt.herokuapp.com/fbview`,
        "method": "POST",
        "data": {
            'currenttime': datestring
        }
    };
$.ajax(request);
