SalesforceApp.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		'' : 'showIndexPage'
	},
	
	showIndexPage: function(){
		var newIndexPage = SalesforceApp.Views.NewIndexPage({});
		
	}
})