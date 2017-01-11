/**
 * Created by bichkhe on 7/2/2016.
 */

//sign_up in page_header.html

jQuery(document).ready(function (result) {
    $('#login-form').on('submit', function(event){
    event.preventDefault();
    console.log("form submitted!-----------------------") ; // sanity check
    $('#dialog').dialog();
    $.ajax({
        url : "/music/login", // the endpoint
        type : "POST", // http method
        data : {'value':'123456'}, // data sent with the post request

        // handle a successful response
        success : function(json) {
            console.log(json); // log the returned json to the console
            console.log("success"); // another sanity check
        },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
});
})
// $('#login-form').on('submit', function(event){
//     event.preventDefault();
//     console.log("form submitted!-----------------------") ; // sanity check
//     $('#dialog').dialog();
//     $.ajax({
//         url : "login", // the endpoint
//         type : "POST", // http method
//         data : {'value':'123456'}, // data sent with the post request
//
//         // handle a successful response
//         success : function(json) {
//             console.log(json); // log the returned json to the console
//             console.log("success"); // another sanity check
//         },
//
//         // handle a non-successful response
//         error : function(xhr,errmsg,err) {
//             console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
//         }
//     });
// });

function onclick1() {
    console.log('Onclick1');
    alert('button is clicked!~');
    jQuery.ajax({
        method: 'post',
        url: 'login',
        success: function (result) {
            alert(result);
        },
        error: function (msg) {
            alert(msg);

        }
    });
}


//Test for click button
function  ClickProductGroup(id) {
    console.log('ClickProductGroup with id=' + id);
    //alert('ClickProductGroup!~');
}

// Show article content
function ShowArticleContent(content) {
     console.log("ShowArticleContent(), Show html content") ; // sanity check
    $("#article_content").html(content);
}



