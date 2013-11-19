window.SalesforceApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		
		// Baconbnb.pads = new Baconbnb.Collections.Pads(parsed_pads.pads, { parse: true });
    new SalesforceApp.AppRouter();
		Backbone.history.start();
  }
};

$(document).ready(function(){
  SalesforceApp.initialize();
	$('#contentID').hammer().on("tap", ".nested_el", function(event) {
	        alert(this, event);
	    });
});
