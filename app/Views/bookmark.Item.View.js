bbmarks.Views.Item = Backbone.View.extend({

    tagName: 'li',
    initialize: function() {
        this.model.bind('change', this.render ,this);
        this.model.bind('destroy',this.remove,this);
        this.model.bind('resetView',this.resetView,this);

    },
    render: function() {
        var compiled_template = _.template(this.template);
        this.el.innerHTML= compiled_template(this.model.toJSON());
        return this; //recommended as this enables calls to be chained.
    },
    events: {
        "click .remove":  "clear",
        "dblclick dt" : "edit"
    },
    search: function(event) {
        //executed when a form '#searchForm' has been submitted
    },
    resetView: function(event) {
        $(this.el).find('.details').removeClass('hide');
    },

    createReset: function() {
        var cntx = this;
        return function() {
            $(cntx.el).find('.details').removeClass('hide');
        };
    },
    clear : function() {
        this.model.destroy();
    },
    remove : function() {
        $(this.el).remove();
    },
    edit : function() {
        //$(this.el).addClass('editing');
        var eVw = new bbmarks.Views.Edit({
                                            el:this.$('.edit'),
                                            model: this.model//,
                                            //reset: this.createReset()
                                        });
        this.$('.details').addClass('hide');
         eVw.render();
    }


    //etc
});
