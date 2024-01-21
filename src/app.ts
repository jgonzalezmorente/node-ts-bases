import { buildLogger } from './plugins/logger.plugin';
import { getPokemonById } from './js-foundation/06-promises';

const logger = buildLogger( 'app.js' );

getPokemonById( 4 )
    .then( ( pokemon ) => console.log( pokemon ) )
    .catch( ( err ) => console.log( err ) )
    .finally( () => console.log( 'Finalmente') );


// logger.log('Hola Mundo');
// logger.error('Esto es algo malo');