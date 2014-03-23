bbmarks.Views.AddBookMark = Backbone.View.extend({
    el: $('.add-bookmark'),
    render: function() {
        var compiled_template = _.template(this.template);
        this.$el.html(compiled_template());
        return this; //recommended as this enables calls to be chained.
    },
    // This is a new comment
    events: {
        'click .reset': 'reset',
        'click .add-bookmark' : 'AddBookMark'
    },
    reset: function(event) {
        //executed when an element with class "go" has been clicked.
    },
    AddBookMark : function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        console.log('added bookmark');
    }
    //etc
});
