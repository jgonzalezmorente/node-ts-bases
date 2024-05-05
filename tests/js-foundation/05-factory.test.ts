import { buildMakeperson } from '../../src/js-foundation/05-factory';

describe( 'js-foundation/05-factory.ts', () => {

    const getUUID = () => '1234';
    const getAge = () => 35;

    test( 'buildMakeperson should return a function', () => {
        const makePerson = buildMakeperson({ getUUID, getAge });
        expect( typeof makePerson ).toBe( 'function' );
    });

    test( 'makePerson should return a person', () => {
        const makePerson = buildMakeperson({ getUUID, getAge });
        const johnDoe = makePerson({ name: 'John Doe', birthdate: '1985-10-21' });
        expect( johnDoe ).toEqual({ 
            id: '1234', 
            name: 'John Doe', 
            birthdate: '1985-10-21', 
            age: 35
        });        
    })

});