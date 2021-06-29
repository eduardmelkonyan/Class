class Country {
    constructor(name, logo, capital, language){
        this.name = name,
        this.capital = capital,
        this.language = language;
        this.logo = logo
    }
    nations = [];
    showData(){
        console.log(this.name);
        console.log(this.logo);
        console.log('The capital is->', this.capital);
        console.log('The language is->', this.language);
        console.log('Population ->', this.nations);
    }
    addNation (nation){
        this.nations.push(nation);
    }
}
module.exports = Country;