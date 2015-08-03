var adamResponse = get('http://is-adam-awake.herokuapp.com/');
var adam = JSON.parse(adamResponse);

function get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

var lastfmString = "He was listening to <i>" + adam.responses.lastfm.title
                    + "</i> at <i>" + adam.responses.lastfm.time + "</i>";
var githubString = "He last committed at " + adam.responses.github;

document.getElementById('lastfm').innerHTML = lastfmString;
document.getElementById('github').innerHTML = githubString;
