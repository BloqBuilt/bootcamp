// YOUR CODE HERE
// URL to GET: http://horizons-json-cors.s3.amazonaws.com/poem.txt
$.get("http://horizons-json-cors.s3.amazonaws.com/poem.txt", function(hello) {
    console.log(hello)
    $("#count").html(hello.split(" ").length);
})