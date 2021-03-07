// Copyright 2013-2020, University of Colorado Boulder

/**
 * View for the ruler object, which can be dragged to translate.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import DragListener from '../../../../scenery/js/listeners/DragListener.js';
import Image from '../../../../scenery/js/nodes/Image.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import rulerImage from '../../../images/ruler_png.js';
import exampleSim from '../../exampleSim.js';
import Ruler from '../model/Ruler.js';

class RulerNode extends Node {

  /**
   * @param {Ruler} ruler - the model of the ruler
   * @param {ModelViewTransform2} modelViewTransform - the coordinate transform between model coordinates and view coordinates
   */
  constructor( ruler, modelViewTransform ) {

    // This is an example of using assertions to check for potential programming errors. In this case, we are verifying
    // that the arguments have the expected type.  Run the simulation with query parameter ?ea to enable assertions.
    assert && assert( ruler instanceof Ruler, 'invalid ruler' );
    assert && assert( modelViewTransform instanceof ModelViewTransform2, 'invalid modelViewTransform' );

    super( {

      // Show a cursor hand over the ruler
      cursor: 'pointer'
    } );

    // Add the centered ruler image
    this.addChild( new Image( rulerImage, {
      centerX: 0,
      centerY: 0
    } ) );

    // Scale it so it matches the model width and height
    const scaleX = modelViewTransform.modelToViewDeltaX( ruler.size.width ) / this.width;
    const scaleY = modelViewTransform.modelToViewDeltaY( ruler.size.height ) / this.height;
    this.scale( scaleX, scaleY );

    // When dragging, move the ruler
    this.addInputListener( new DragListener( {

      // When dragging across it on a touch device, pick it up
      allowTouchSnag: true,

      positionProperty: ruler.positionProperty,
      transform: modelViewTransform
    } ) );

    // Observe changes in model position and update the view.
    // This element always exists and does not need to be unlinked.
    ruler.positionProperty.link( position => {
      this.translation = modelViewTransform.modelToViewPosition( position );
    } );

    // Observe changes in model orientation and update the view.
    // This element always exists and does not need to be unlinked.
    ruler.orientationProperty.link( orientation => {
      this.rotation = orientation;
    } );
  }
}

exampleSim.register( 'RulerNode', RulerNode );
export default RulerNode;