bbmarks.Views.NavMenu = Backbone.View.extend({
	el: $('.nav'),
	initialize: function(){
			//this.tmplStr = stringTmpl;
		},
    
    render: function( event ){
        var compiled_template = _.template( this.template);
        this.$el.html( compiled_template() );
        return this; //recommended as this enables calls to be chained.
    },
    events: {
        /*"submit #searchForm':  "search",
        "click .reset': "reset",
        "click .advanced": 'switchContext"*/
    },
    search: function( event ){
        //executed when a form '#searchForm' has been submitted
    },
    reset: function( event ){
        //executed when an element with class "go" has been clicked.
    }
    //etc
});
