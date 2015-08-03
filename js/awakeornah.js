var adamResponse = get('http://is-adam-awake.herokuapp.com/');
var adam = JSON.parse(adamResponse);

var lastfmMoment = moment(adam.responses.lastfm.time, "DD MMM YYYY, HH:mm").subtract(8, 'hours')
var githubMoment = moment(adam.responses.github, "YYYY MM DD HH:mm").subtract(8, 'hours')

function get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

var lastfmString = "He was listening to " + adam.responses.lastfm.title
                    + " about " + lastfmMoment.fromNow()
var githubString = "He commited something about " + githubMoment.fromNow();

document.getElementById('lastfm').innerHTML = lastfmString;
document.getElementById('github').innerHTML = githubString;
