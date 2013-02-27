bbmarks.Views.Add = Backbone.View.extend({
    el: $('.add-bookmark'),
    initialize: function() {

    },
    render: function() {
        var compiled_template = _.template(this.template);
        this.$el.html(compiled_template());
        return this; //recommended as this enables calls to be chained.
    },
    events: {
        'submit .add-bookmark form':  'add',
        'click .add-bookmark' : 'AddBookMark'
    },
    add: function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        itms.create({Name: evt.target['bName'].value, Description: evt.target['bDesc'].value});
        this.$('#bName, #bDesc').val('');
        //this.$('.bDesc').val('');
        //alert(evt.target['bName'].value);
    },
    reset: function(evt) {
        //executed when an element with class "go" has been clicked.
    },
    AddBookMark : function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        console.log('added bookmark');
    }
    //etc
});
