$(function() {

  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
  Parse.initialize( "jbSC7AqKbDKgR5zHfabelrA3sfFg0DKK7lDcidRE",
      "AxwZCtok73KItrQdo7eCXUI4lNzU6Alr0AVDmEvY");



  var Reference = Parse.Object.extend("reference");

  var ReferenceCollection = Parse.Collection.extend({
    model: Reference
  });

  var ReferencesView = Parse.View.extend({

    template: _.template($('#references-template').html()),

    render:function(){

      $('#view-goes-here').html(this.template({
        references: this.collection.toJSON()
      }));
      return this;
    }

  });


  var query = new Parse.Query(Reference);

  query.find({
    success: function(references) {


      var references = new ReferenceCollection(references);

      var view = new ReferencesView({collection: references});
      view.render();

    },
    error: function(blogs, error) {
      console.log(error);
    }
  });

});