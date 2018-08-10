Template.activity.helpers({
    getTitle: function (author, permlink) {
        var video = Videos.findOne({ 'info.author': author, 'info.permlink': permlink })
        if (video) return video.info.title;
    },
    getSnap: function (author, permlink) {
        var video = Videos.findOne({ 'info.author': author, 'info.permlink': permlink })
        if (video)
            return "https://ipfs.io/ipfs/" + video.info.snaphash;
    },
    user: function () {
        return {
            name: FlowRouter.getParam("author")
        }
    }
})


Template.activity.events({
    'click a': function () {
        $('.ui.menu').find('.item').tab('change tab', 'first')
    }
  })

  
Template.activity.rendered = function(){
    Template.settingsdropdown.nightMode();
  }