bbmarks.Views.BookmarkItem = Backbone.View.extend({
    _collection: {},
    
    initialize : function () {
      //rescope "this" so it's available to the methods requiring it
		//_.bindAll(this,"render","clear");
        this.model.bind('destroy', this.remove, this);
        //this._collection = collection;
    },
    render: function() {
        var compiled_template = _.template(this.template);
        this.el.innerHTML = compiled_template(this.model.toJSON());
        return this; //recommended as this enables calls to be chained.
    },
    events: {
        'click .reset': 'reset',
        'click .remove' : 'clear'
    },
    //normally you don't need to do this
	//save, which is built in, will $.ajax to a remote URL
	save : function(){
		//this._collection.add(this);
	},
    reset: function() {
        //executed when an element with class "go" has been clicked.
    },
    remove: function() {
        $(this.el).remove();
    },
    clear: function() {
        this.model.destroy(); //executed when an element with class "go" has been clicked.
    }
    //etc
});
