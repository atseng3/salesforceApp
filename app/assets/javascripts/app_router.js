SalesforceApp.AppRouter = Backbone.Router.extend({
	routes: {
		'' : 'showIndexPage'
	},
	
	showIndexPage: function(){
		var newIndexPage = new SalesforceApp.Views.NewIndexView({});
		
		$('.content').html(newIndexPage.render().$el);
	}
})