const camelCaseToSnakeCase = camelCaseSentence => camelCaseSentence.replace(/([A-Z])/g, letter => `_${letter.toLowerCase()}`)

const cameledCaseObjectToSnakeCase = camelCaseObject => {    
    const objectKeys = Object.keys(camelCaseObject).map(key => ({ camelCaseKey: key, snakeCaseKey: camelCaseToSnakeCase(key) }));
    const snakeCaseObject = {};

    objectKeys.forEach(keys => {
        const { snakeCaseKey, camelCaseKey } = keys;
        snakeCaseObject[snakeCaseKey] = camelCaseObject[camelCaseKey];
    });

    return snakeCaseObject;

}

console.log(camelCaseToSnakeCase("fernandoReisGuimaraes"));
console.log(camelCaseToSnakeCase("select personName, personAge from people"));
console.log(cameledCaseObjectToSnakeCase({ personName: "fernando_reis_guimaraes_", personAge: 34}));
