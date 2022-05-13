let comedy = ["https://upload.wikimedia.org/wikipedia/en/6/66/Family_Guy_Vol7.jpg", "https://static.wikia.nocookie.net/simpsons/images/4/4e/Big_American_Dad_Poster.jpg/revision/latest/top-crop/width/360/height/360?cb=20180726234410"];
let action = ["https://ntvb.tmsimg.com/assets/p20173278_b_h8_aa.jpg?w=960&h=540", "https://netflixjunkie.com/wp-content/uploads/2021/06/snowpiercer-season-3-will-not-be-on-netflix-in-june-2021-1140x600.jpg"];
let drama = ["https://upload.wikimedia.org/wikipedia/en/c/ca/Euphoria_intertitle.png", "https://pbs.twimg.com/profile_images/1330965206047084544/zZ17jPoK_400x400.jpg"];

$(".submit-button").click(function() {
    let genreInput = $(".get-suggestions").val();
    $(".shows").empty();
    if (genreInput === "Comedy" || genreInput === "comedy") {
        for (let comedyy of comedy) {
            $(".shows").append("<img src=" + comedyy + ">");
        }
    }

    if (genreInput === "Action" || genreInput === "action") {
        for (let actionn of action) {
            $(".shows").append("<img src=" + actionn + ">");
        }
    }

    if (genreInput === "Drama" || genreInput === "drama") {
        for (let dramaa of drama) {
            $(".shows").append("<img src=" + dramaa + ">");
        }
    }

});

$(".suggestion-button").click(function() {
    let suggestion = $(".give-suggestions").val();
    comedy.push(suggestion);
    console.log(suggestion);
    $(".shows").text("your suggestion sucks");

});