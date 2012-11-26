
require(["app/lib/underscore.js","app/lib/zepto.js"],  function() {
	require(["app/infrastructure/bookmark.namespace.js","app/lib/backbone.js"], function() {
        require(["app/lib/backbone.localStorage.js"], function() {
            require(["app/routers/bookmark.router.js",
                    "app/views/bookmark.navmenu.View.js",
                    "text!../templates/nav.template.html",
                    "text!../templates/bookmarkItem.template.html",
                    "app/views/bookmark.List.View.js",
                    "app/views/bookmark.Item.View.js",
                    "app/collections/bookmark.Collection.js",
                    "app/models/bookmark.Model.js",
                    "text!../templates/addBookmark.template.html",
                    "text!../templates/editBookmark.template.html",
                    "app/views/bookmark.Edit.View.js",
                    "app/views/bookmark.Add.View.js"],
                function(rtr,vw,navTmpl,itmTmpl,lVw,iVw,bCol,bMod,addTmpl,editTmpl) {
                    //This function is called when scripts/helper/util.js is loaded.
                        bbmarks.Views.NavMenu.prototype.template = navTmpl;
                        bbmarks.Views.Item.prototype.template = itmTmpl;
                        bbmarks.Views.Add.prototype.template = addTmpl;
                        bbmarks.Views.Edit.prototype.template = editTmpl;
                        //This function is called when the page is loaded
                        //(the DOMContentLoaded event) and when all required
                        //scripts are loaded.

                        //Do nested require() calls in here if you want to load code
                        //after page load.

                        require.ready(function() {
                            itms = new bbmarks.Collection.BookmarkCollection();
                            myBookmarkController =  new bbmarks.Routers.BookmarkController;
                            Backbone.history.start();
                            //parent.document.getElementsByTagName('iframe')[0].style.height = document.height + 'px';



		                });
	            });
            });
        });
    });
