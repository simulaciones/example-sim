// Copyright 2013-2020, University of Colorado Boulder

/**
 * Model of a simple slit.
 * The slit has fixed size, and mutable position and orientation.
 *
 * @author 
 */

import Property from '../../../../axon/js/Property.js';
import exampleSim from '../../exampleSim.js';

class Slit {

  /**
   * Create a new slit model. The slit has fixed size, and mutable position and orientation.
   *
   * @param {Dimension2} size - the size of the slit in model coordinates
   * @param {Vector2} position - the position of the slit in model coordinates
   * @param {number} orientation - in radians
   */
  constructor( size, position, orientation ) {

    // @public (read-only) {Dimension2} the size of the slit in model coordinates
    this.size = size;

    // @public {Vector2} the position of the slit in model coordinates
    this.positionProperty = new Property( position );

    // @public {number} in radians
    this.orientationProperty = new Property( orientation );
  }

  /**
   * Restores the initial state of the Slit. This method is called when the simulation "Reset All" button is
   * pressed. Note that Slit.size is constant and does not need to be reset.
   * @public
   */
  reset() {
    this.positionProperty.reset();
    this.orientationProperty.reset();
  }
}

exampleSim.register( 'Slit', Slit );
export default Slit;