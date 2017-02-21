
function legislatorToHTML(legislatorObj){
    var legislatorStr = ''
    legislatorStr += '<div class="legislator">'
    legislatorStr +=    '<h1 class="name">' + legislatorObj.first_name + " " + legislatorObj.last_name + '</h1>'
    legislatorStr +=    '<h2 class="party">' + legislatorObj.title +"--"+ legislatorObj.party + "-"+legislatorObj.state +'</h2>'
    legislatorStr +=    '<ul class="contactInfo">'
    legislatorStr +=        '<li> email: ' + legislatorObj.oc_email + '</li>'
    legislatorStr +=        '<li> website: ' + legislatorObj.website + '</li>'
    legislatorStr +=        '<li> facebook: ' + legislatorObj.facebook_id + '</li>'
    legislatorStr +=        '<li> twitter: ' + legislatorObj.twitter_id + '</li>'
    legislatorStr +=    '</ul>'
    legislatorStr +=    '<p class = "termEnd"> Term End: ' + legislatorObj.term_end + '</p>'
    legislatorStr += '</div>'

    return legislatorStr
}


function handleResponse(apiResponse) {
    var stringHTML = ''
    var containerNode = document.querySelector('#container')

    for (var i = 0; i<apiResponse.results.length; i++){
        stringHTML += legislatorToHTML(apiResponse.results[i])
    }
    containerNode.innerHTML = stringHTML
}

var promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=123&callback=?')

promise.then(handleResponse)