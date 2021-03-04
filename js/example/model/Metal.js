// Copyright 2013-2020, University of Colorado Boulder

/**
 * Model of a simple metal.
 * The metal has fixed size, and mutable position and orientation.
 *
 * @author 
 */

import Property from '../../../../axon/js/Property.js';
import exampleSim from '../../exampleSim.js';

class Metal {

  /**
   * Create a new metal model. The metal has fixed size, and mutable position and orientation.
   *
   * @param {Dimension2} size - the size of the metal in model coordinates
   * @param {Vector2} position - the position of the metal in model coordinates
   * @param {number} orientation - in radians
   */
  constructor( size, position, orientation ) {

    // @public (read-only) {Dimension2} the size of the metal in model coordinates
    this.size = size;

    // @public {Vector2} the position of the metal in model coordinates
    this.positionProperty = new Property( position );

    // @public {number} in radians
    this.orientationProperty = new Property( orientation );
  }

  /**
   * Restores the initial state of the Metal. This method is called when the simulation "Reset All" button is
   * pressed. Note that Metal.size is constant and does not need to be reset.
   * @public
   */
  reset() {
    this.positionProperty.reset();
    this.orientationProperty.reset();
  }
}

exampleSim.register( 'Metal', Metal );
export default Metal;