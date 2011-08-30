bbmarks.Views.List = Backbone.View.extend({
    el: $('.list'),

    initialize: function() {
        itms.bind('add', this.addOne,this);
        this.collection.fetch();
    },
    addOne: function(model) {

      this.$('.bookmark-list').append(this.renderItemView(model))
    },
    renderItemView: function (item) {
        var bkmrkItm = new bbmarks.Views.Item({model : item});
        return bkmrkItm.render().el;
    },
    render: function() {
       // var compiled_template = _.template(this.template),
         var    renderedItms = [],
                that = this;


        if(this.collection.length < 1) {
            this.$('.bookmark-list').html("<p>No Items....</p>");
            return this;
        }

        this.collection.each(function(itm) {
            renderedItms.push(that.renderItemView(itm));
        });

        this.$('.bookmark-list').html(renderedItms);
        return this; //recommended as this enables calls to be chained.
    },
    events: {
        /*"submit #searchForm':  "search",
         "click .reset': "reset",
         "click .advanced": 'switchContext"*/
        "click .plus" : "addItem"
    },
    addItem: function() {
        //var bitm = new bbmarks.Models.BookMark({Name: "Add", Description: "Test"});
            itms.create({Name: "Add", Description: "Test"});
            //bitm.save();
    },
    search: function() {
        //executed when a form '#searchForm' has been submitted
    },
    reset: function() {
        //executed when an element with class "go" has been clicked.
    }
    //etc
});
