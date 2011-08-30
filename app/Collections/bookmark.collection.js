bbmarks.Collection.BookmarkCollection = Backbone.Collection.extend({
	localStorage: new Store("BookMarkItems"),
    model : bbmarks.Models.BookMark
});