// const getPokemonById = require( './js-foundation/06-promises' );
// getPokemonById( 4 )
//     .then( ( pokemon ) => console.log( pokemon ) )
//     .catch( ( err ) => console.log( err ) )
//     .finally( () => console.log( 'Finalmente') );

const { buildLogger } = require( './plugins/' );

const logger = buildLogger( 'app.js' );

logger.log('Hola Mundo');
logger.error('Esto es algo malo');