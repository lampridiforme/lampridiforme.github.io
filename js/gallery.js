/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    // modal image when thumbnail is clicked on
    $(".gallerycontent").children().click(function() {
        var newsrc = this.src;
        // generate source string without the 'prev' prefix
        newsrc = newsrc.substring(0, newsrc.length - 8) + newsrc.substring(newsrc.length - 4, newsrc.length);
        $(".modal").css("display", "block");
        $(".modalimg").attr("src", newsrc); 
    });
    
    $(".modalclose").click(function() {
        $(".modal").fadeOut(200);
        //$(".modal").css("display", "none");
    });
});

