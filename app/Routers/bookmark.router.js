bbmarks.Routers.BookmarkController = Backbone.Router.extend({
  //  navView : {},
    items : [],
    initialize : function(ims) {
        items = ims;
        console.log('rebel ims: ' + ims);
    },
	/* define the route and function maps for this controller */
    routes:{
		"": "index",
        "/about" : "showAbout",
        /*Sample usage: http://unicorns.com/#/about"*/
        
        "/bookmark/:id" : "getBookmark",
        /*This is an example of using a ":param" variable which allows us to match 
        any of the components between two URL slashes*/
        /*Sample usage: http://unicorns.com/#/photos/5*/
        
        "/search/:query" : "searchBookmarks",
        /*We can also define multiple routes that are bound to the same map function,
        in this case searchPhotos(). Note below how we're optionally passing in a 
        reference to a page number if one is supplied*/
        /*Sample usage: http://unicorns.com/#/search/lolcats*/
         
        "/search/:query/p:page" : "searchBookmarks",
        /*As we can see, URLs may contain as many ":param"s as we wish*/
        /*Sample usage: http://unicorns.com/#/search/lolcats/p1*/
        
        //"/photos/:id/download/*imagePath" : "downloadPhoto",
        /*This is an example of using a *splat. splats are able to match any number of 
        URL components and can be combined with ":param"s*/
        /*Sample usage: http://unicorns.com/#/photos/5/download/files/lolcat-car.jpg*/
        
        /*If you wish to use splats for anything beyond default routing, it's probably a good 
        idea to leave them at the end of a URL otherwise you may need to apply regular
        expression parsing on your fragment*/
        
        
        "/*other"    : "defaultRoute"
        //This is a default route with that also uses a *splat. Consider the
        //default route a wildcard for URLs that are either not matched or where
        //the user has incorrectly typed in a route path manually
        /*Sample usage: http://unicorns.com/#/anything*/
 
    },

    index: function() {
         console.log("index initated");

        this.navView = new bbmarks.Views.NavMenu();
           this.navView.render();


           this.lstView = new bbmarks.Views.List({collection: items});
           this.lstView.render();
            this.addView = new bbmarks.Views.Add();
            this.addView.render();

    },
    showAbout: function(){
		console.log("Welcome to A'braham's version of backbone routing");
    },
    
    getBookmark: function(id){
        /* 
        in this case, the id matched in the above route will be passed through
        to our function getPhoto and we can then use this as we please.
        */
        console.log("You are trying to reach photo " + id);
    },
    
    searchBookmarks: function(query, page){
        console.log("Page number: " + page + " of the results for " + query);
    },
    
    //downloadPhoto: function(id, path){
    //},
    
    defaultRoute: function(other){
        console.log("Invalid. You attempted to reach:" + other);
        
    }
});
 
/* Now that we have a controller setup, remember to instantiate it*/
//
//var myBookmarkController = new bbmarks.Routers.BookmarkController();
//Backbone.history.start();