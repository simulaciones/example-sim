// Copyright 2013-2020, University of Colorado Boulder

/**
 * Model for the 'Example' screen.
 *
 * @author 
 */

import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import exampleSim from '../../exampleSim.js';
import Laser from './Laser.js';
import Metal from './Metal.js';
import Wall from './Wall.js';
import Slit from './Slit.js';
import Ruler from './Ruler.js';

class ExampleModel {

  constructor() {

    // @public {Laser} initial laser model element
    this.laser = new Laser( new Dimension2( 262.5, 252.5 ), new Vector2( 0, 0 ), 0 );

    // @public {Metal} initial metal model element
    this.metal = new Metal( new Dimension2( 262.5, 252.5 ), new Vector2( 0, 0 ), 0 );

    // @public {Slit} initial slit model element
    this.slit1 = new Slit( new Dimension2( 262.5, 252.5 ), new Vector2( 0, 0 ), 0 );

    // @public {Slit} initial slit model element
    this.slit2 = new Slit( new Dimension2( 262.5, 252.5 ), new Vector2( 0, 0 ), 0 );

    // @public {Wall} initial wall model element
    this.wall = new Wall( new Dimension2( 262.5, 252.5 ), new Vector2( 0, 0 ), 0 );

    // @public {Ruler} initial wall model element
    this.ruler = new Ruler( new Dimension2( 262.5, 252.5 ), new Vector2( 0, 0 ), 0 );
  }

  /**
   * Restores the initial state of all model elements. This method is called when the simulation "Reset All" button is
   * pressed.
   * @public
   */
  reset() {
    this.laser.reset();
  }
}

exampleSim.register( 'ExampleModel', ExampleModel );
export default ExampleModel;