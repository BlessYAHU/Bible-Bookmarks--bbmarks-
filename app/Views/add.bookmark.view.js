bbmarks.Views.AddBookMark = Backbone.View.extend({
    el: $('.add-bookmark'),
    render: function() {
        var compiled_template = _.template(this.template);
        this.el.html(compiled_template());
        return this; //recommended as this enables calls to be chained.
    },
    events: {
        'click .reset': 'reset'
    },
    reset: function(event) {
        //executed when an element with class "go" has been clicked.
    }
    //etc
});
