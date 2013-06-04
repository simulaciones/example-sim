// Copyright 2002-2012, University of Colorado

/**
 * Control panel.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  var controlPanelTemplate = require( 'tpl!../../html/control-panel.html' );
  var DOM = require( 'SCENERY/nodes/DOM' );
  var inherit = require( 'PHET_CORE/inherit' );

  /*
   * Takes an HTML fragment that describes a control panel with DOM widgets,
   * internationalizes it, and wires up the DOM widgets.
   *
   * @param strings internationalized strings
   * @param {ExampleSimModel} model
   * @param {ExampleSimView} view
   */
  function ControlPanel( strings, model ) {

    // Translate the HTML template.
    var controlPanelFragment = controlPanelTemplate( { flipPolarity: strings.flipPolarity,
                                                       resetAll: strings.resetAll
                                                     } );

    // Add the HTML template to the DOM.
    var $fragment = $( controlPanelFragment );
    DOM.call( this, $fragment, {right: 1024} );
    // Wire up DOM components.
    {
      // 'Flip Polarity' button rotates magnet by 90 degrees.
      $fragment.find( '#flipPolarityButton' ).bind( 'click', function() {
        model.barMagnet.orientation = model.barMagnet.orientation + Math.PI;
      } );

      // 'Reset All' button returns sim to initial state.
      // No need to reset the view here, it should be driven completely off of the model
      $fragment.find( '#resetAllButton' ).bind( 'click', model.reset.bind( model ) );
    }

  }

  inherit( ControlPanel, DOM );

  return ControlPanel;
} );