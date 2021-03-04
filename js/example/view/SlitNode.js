// Copyright 2013-2020, University of Colorado Boulder

/**
 * View for the slit object, which can be dragged to translate.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import DragListener from '../../../../scenery/js/listeners/DragListener.js';
import Image from '../../../../scenery/js/nodes/Image.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import slitImage from '../../../images/slit_png.js';
import exampleSim from '../../exampleSim.js';
import Slit from '../model/Slit.js';

class SlitNode extends Node {

  /**
   * @param {Slit} slit - the model of the slit
   * @param {ModelViewTransform2} modelViewTransform - the coordinate transform between model coordinates and view coordinates
   */
  constructor( slit, modelViewTransform ) {

    // This is an example of using assertions to check for potential programming errors. In this case, we are verifying
    // that the arguments have the expected type.  Run the simulation with query parameter ?ea to enable assertions.
    assert && assert( slit instanceof Slit, 'invalid slit' );
    assert && assert( modelViewTransform instanceof ModelViewTransform2, 'invalid modelViewTransform' );

    super( {

      // Show a cursor hand over the slit
      cursor: 'pointer'
    } );

    // Add the centered slit image
    this.addChild( new Image( slitImage, {
      centerX: 0,
      centerY: 0
    } ) );

    // Scale it so it matches the model width and height
    const scaleX = modelViewTransform.modelToViewDeltaX( slit.size.width ) / this.width;
    const scaleY = modelViewTransform.modelToViewDeltaY( slit.size.height ) / this.height;
    this.scale( scaleX, scaleY );

/*    // When dragging, move the slit
    this.addInputListener( new DragListener( {

      // When dragging across it on a touch device, pick it up
      allowTouchSnag: true,

      positionProperty: slit.positionProperty,
      transform: modelViewTransform
    } ) );*/

    // Observe changes in model position and update the view.
    // This element always exists and does not need to be unlinked.
    slit.positionProperty.link( position => {
      this.translation = modelViewTransform.modelToViewPosition( position );
    } );

    // Observe changes in model orientation and update the view.
    // This element always exists and does not need to be unlinked.
    slit.orientationProperty.link( orientation => {
      this.rotation = orientation;
    } );
  }
}

exampleSim.register( 'SlitNode', SlitNode );
export default SlitNode;