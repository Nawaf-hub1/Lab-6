const likeBtn = document.getElementById("likeBtn");
const disLikeBtn = document.getElementById("disLikeBtn");

const initLikes = 34; // this and initdislike should be retrieved from the server since it represents the
const initDisLikes = 6;

let likesCount = initLikes;
let disLikeCount = initDisLikes;

likeBtn.innerText = "👍 " + likesCount;
disLikeBtn.innerText = "👎 " + disLikeCount; 

function handleLike(){
    likesCount ++;
    likeBtn.innerText = "👍 " + likesCount;
    disableLikeButton();
    disLikeBtn.innerText = "👎 " + disLikeCount; 
    setCookies("liked");
}
function handleDisLike(){
    disLikeCount ++;
    disLikeBtn.innerText = "👎 " + disLikeCount;  
    disableDisLikeButton();
    likeBtn.innerText = "👍 " + likesCount;
    setCookies("disliked");
}
function disableLikeButton(){
    if(disLikeCount != initDisLikes){
        disLikeCount --;
    }
    likeBtn.disabled = true;
    disLikeBtn.disabled = false;
}
function disableDisLikeButton(){
    if(likesCount != initLikes){
        likesCount --;
    }
    disLikeBtn.disabled = true;
    likeBtn.disabled = false;
}
function setCookies(state){ 
    var expirationTime = new Date();
    expirationTime.setSeconds(expirationTime.getSeconds() + 10); // set the expiration date of the cookie to 10 seconds
    document.cookie = 'voted=' + state + ';expires=' + expirationTime.toUTCString() + '; path:/;'; // set the state of the cookie if it is liked or disliked
}
//if document.cookie exists and document.cookie.indexOf("voted") is bigger than -1 (>-1 means it exists)
//window.onload = when the page load, do this function :)
window.onload = function(){
    // check if the state is = "liked" then disable the like button.
    if (document.cookie && document.cookie.indexOf('voted') > -1 && document.cookie.indexOf("liked") > -1) {
        disableLikeButton();
    }
    //but if it is disliked then disable the dislike button.
    if (document.cookie && document.cookie.indexOf('voted') > -1 && document.cookie.indexOf("disliked") > -1) {
        disableDisLikeButton();
    }
}

// here is the graveyard of all the failed codes.

// TODO: find out why the dislike can delete the like cookie but not vice versa... maybe something to do with the if statements?
// TODO: give the 2 unique cookies Ids so we can delete the setLikecookie when ever when hit dislike to remove it from the clients browsers. so it only saves the last this the clients did if they press both the like and dislike button.
// TODO: make 2 cookies. 1 for like buttons which will save the liked state and disable the like button and another cookie which will save the dislike state and enable the like button

// if(document.cookie && document.cookie.indexOf("voted")> -1){
    //     disableButtons();
    // }
    // note: read the lecture notes on cookies.
    // if we don't specify max age then it will be deleted the moments we refresh
    // chrome requirez the same site = strict thingy
    // function disableButtons(){
        //     likeBtn.disabled = true;
        //     disLikeBtn.disabled = true;
        // }
           
// if(document.cookie && document.cookie.indexOf("DisLiked") > -1){
    //     document.cookie = "Liked=; SameSite=; expires= Wed, 31 Oct 2012 08:50:17 GMT; path:/"
    //     if(disLikeBtn.disabled != true){
        //         disableDisLikeButton();
        //     }
        // }
// if(document.cookie && document.cookie.indexOf("Liked") > -1){
    //     document.cookie = "Disliked=; SameSite=; expires= Wed, 31 Oct 2012 08:50:17 GMT; path:/"
    //     if (likeBtn.disabled != true) {
        //         disableLikeButton();
        //     }
        // }

// function setLikeCookie(){
//     document.cookie = "Liked=true; SameSite=Strict; Max-Age=10; path:/"
// }
// function setDisLikeCookie(){
//     document.cookie = "DisLiked=true; SameSite=Strict; Max-Age=10; path:/"
// }