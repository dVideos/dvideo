// function that checks if a video has received a valid DMCA complaint
Meteor.isDMCA = function(author, permlink, cb) {
    $.get('https://dmca.dvideo.io/v/'+author+'/'+permlink, function(json, result) {
        if (result == 'success')
            cb(json.dmca)
    })
}
