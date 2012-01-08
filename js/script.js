function $(id) {
    return document.getElementById(id);
}

function statusUpdated() {
    $('rating').innerHTML = Player.ratingStars()
}

function trackUpdated(track) {
    $('song').innerHTML   = track.title || "Nothing Playing";
    $('artist').innerHTML = track.artist || "";
    $('album').innerHTML  = track.album || "";
    $('rating').innerHTML = Player.ratingStars()
}