// Copyright 2013-2020, University of Colorado Boulder

/**
 * View for the 'Example' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Bounds2 from '../../../../dot/js/Bounds2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import ScreenView from '../../../../joist/js/ScreenView.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import exampleSim from '../../exampleSim.js';
import LaserNode from './LaserNode.js';
import MetalNode from './MetalNode.js';
import WallNode from './WallNode.js';
import SlitNode from './SlitNode.js';
import RulerNode from './RulerNode.js';
import ControlPanel from './ControlPanel.js';

class ExampleScreenView extends ScreenView {

  /**
   * @param {ExampleModel} model - the model for the entire screen
   */
  constructor( model ) {

    super( {
      layoutBounds: new Bounds2( 0, 0, 768, 504 )
    } );

    // laser object
    const center = new Vector2( this.layoutBounds.width / 9, this.layoutBounds.height / 2 );
    const laserModelViewTransform = ModelViewTransform2.createOffsetScaleMapping( center, 1 );
    this.addChild( new LaserNode( model.laser, laserModelViewTransform ) );

    // metal object
    const metalPosition = new Vector2( this.layoutBounds.width / 2, this.layoutBounds.height / 2 );
    const metalModelViewTransform = ModelViewTransform2.createOffsetScaleMapping( metalPosition , 1 );  
    this.addChild( new MetalNode( model.metal, metalModelViewTransform ) );

    // slit object
    const slitPosition1 = new Vector2( this.layoutBounds.width / 2 - 5, this.layoutBounds.height / 2 );
    const slitModelViewTransform1 = ModelViewTransform2.createOffsetScaleMapping( slitPosition1, 1 );
    this.addChild( new SlitNode( model.slit1, slitModelViewTransform1 ) );

    // slit object
    const slitPosition2 = new Vector2( this.layoutBounds.width / 2 + 5, this.layoutBounds.height / 2 );
    const slitModelViewTransform2 = ModelViewTransform2.createOffsetScaleMapping( slitPosition2, 1 );
    this.addChild( new SlitNode( model.slit2, slitModelViewTransform2 ) );
    
    // wall object
    const wallPosition = new Vector2( this.layoutBounds.width / 2 + this.layoutBounds.width / 3, this.layoutBounds.height / 2);
    const wallModelViewTransform = ModelViewTransform2.createOffsetScaleMapping( wallPosition , 1 );  
    this.addChild( new WallNode( model.wall, wallModelViewTransform ) );
    
    // ruler object
    const rulerPosition = new Vector2( this.layoutBounds.width / 2, this.layoutBounds.height / 4);
    const rulerModelViewTransform = ModelViewTransform2.createOffsetScaleMapping( rulerPosition , 1 );  
    this.addChild( new RulerNode( model.ruler, rulerModelViewTransform ) );

    // Control Panel
    this.addChild( new ControlPanel( model, {
      x: 50,
      y: 50
    } ) );
  }
}

exampleSim.register( 'ExampleScreenView', ExampleScreenView );
export default ExampleScreenView;