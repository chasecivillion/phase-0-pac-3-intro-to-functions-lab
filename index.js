function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
const whispering = "I can't hear you!";
const shouting = "YES INDEED!"
const correctResponse = "I would love to!"
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return whispering
    } else if (string.toUpperCase() === string) {
       return shouting
    } else (string === "Let's have dinner together!");
       return correctResponse
    }
    console.log(string);