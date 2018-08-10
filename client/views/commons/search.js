Template.search.helpers({
  search: function () {
    return Session.get('search')
  }
})

Template.search.onRendered(function () {
  if (!Session.get('search')) {
    $('#dsearch').val(FlowRouter.getParam("query"))
    $('.searchForm').submit()
    Template.sidebar.resetActiveMenu()
    Template.settingsdropdown.nightMode();
  }
});
