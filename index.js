function introduction(name){
    return `Hi, my name is ${name}`;
}
 console.log(introduction("Aki"))

 function introductionWithLanguage(name,language){
    return `Hi my name is ${name} and I'm learning to programme in ${name,language}` 
 }

 console.log(introductionWithLanguage("Aki","Ember.js"))

 function introductionWithLanguageOptional(name,language="Javascript"){
    return `Hi my name is ${name} and I am learning to programme in ${language}`;
 }
 console.log(introductionWithLanguageOptional("Gracie"))