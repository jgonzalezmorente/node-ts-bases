// const { getAge, getUUID } = require( './plugins' );
// const { buildMakeperson } = require( './js-foundation/05-factory' );

const getPokemonById = require( './js-foundation/06-promises' );
getPokemonById( 4 )
    .then( ( pokemon ) => console.log( pokemon ) )
    .catch( ( err ) => console.log( err ) )
    .finally( () => console.log( 'Finalmente') );

    

// token de acceso
// Públicas

// ! Referencia a la función factory y uso
// const makePerson = buildMakeperson({ getAge, getUUID });
// const obj = { name: 'John', birthdate: '1985-10-21' };
// const john = makePerson( obj );
// console.log( { john });
