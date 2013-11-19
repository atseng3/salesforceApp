SalesforceApp.Views.NewIndexView = Backbone.View.extend({
	template: JST['index'],
	
	events: {
		'swipe': 'onSwipe',
		"click .button": "asdf"
	},
	
	asdf: function(event) {
		event.preventDefault();
		alert("abcd");
	},

	onSwipe: function(e){
	    alert(e.direction); // left or right
	},
	
	render: function(){
		var renderedContent = this.template({});
		
		this.$el.html(renderedContent);
		return this;
	}
})