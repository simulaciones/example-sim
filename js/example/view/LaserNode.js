// Copyright 2013-2020, University of Colorado Boulder

/**
 * View for the laser object, which can be dragged to translate.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import DragListener from '../../../../scenery/js/listeners/DragListener.js';
import Image from '../../../../scenery/js/nodes/Image.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import laserImage from '../../../images/laser_png.js';
import exampleSim from '../../exampleSim.js';
import Laser from '../model/Laser.js';

class LaserNode extends Node {

  /**
   * @param {Laser} laser - the model of the laser
   * @param {ModelViewTransform2} modelViewTransform - the coordinate transform between model coordinates and view coordinates
   */
  constructor( laser, modelViewTransform ) {

    // This is an example of using assertions to check for potential programming errors. In this case, we are verifying
    // that the arguments have the expected type.  Run the simulation with query parameter ?ea to enable assertions.
    assert && assert( laser instanceof Laser, 'invalid laser' );
    assert && assert( modelViewTransform instanceof ModelViewTransform2, 'invalid modelViewTransform' );

    super( {

      // Show a cursor hand over the laser
      cursor: 'pointer'
    } );

    // Add the centered laser image
    this.addChild( new Image( laserImage, {
      centerX: 0,
      centerY: 0
    } ) );

    // Scale it so it matches the model width and height
    const scaleX = modelViewTransform.modelToViewDeltaX( laser.size.width ) / this.width;
    const scaleY = modelViewTransform.modelToViewDeltaY( laser.size.height ) / this.height;
    this.scale( scaleX, scaleY );

/*    // When dragging, move the laser
    this.addInputListener( new DragListener( {

      // When dragging across it on a touch device, pick it up
      allowTouchSnag: true,

      positionProperty: laser.positionProperty,
      transform: modelViewTransform
    } ) );*/

    // Observe changes in model position and update the view.
    // This element always exists and does not need to be unlinked.
    laser.positionProperty.link( position => {
      this.translation = modelViewTransform.modelToViewPosition( position );
    } );

    // Observe changes in model orientation and update the view.
    // This element always exists and does not need to be unlinked.
    laser.orientationProperty.link( orientation => {
      this.rotation = orientation;
    } );
  }
}

exampleSim.register( 'LaserNode', LaserNode );
export default LaserNode;