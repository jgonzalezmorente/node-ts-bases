const buildMakeperson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge( birthdate )
        }    
    }
}

module.exports = {
    buildMakeperson,
}