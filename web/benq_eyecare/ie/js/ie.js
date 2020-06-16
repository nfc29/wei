// JavaScript Document
$(document).ready(function() {
  $("#open_now").click(function() {
      $("#facebox").overlay().load();
  });

    // select the overlay element - and "make it an overlay"
  $("#facebox").overlay({

    // custom top position
	position: 'absolute',
    top: 200,

    // some mask tweaks suitable for facebox-looking dialogs
    mask: {

    // you might also consider a "transparent" color for the mask
    color: '#efefef',

    // load mask a little faster
    loadSpeed: 1000,

    // very transparent
    opacity: 1
    },

    // disable this for modal dialog-type of overlays
    closeOnClick: false,

    // load it immediately after the construction
    load: true

    });
    });