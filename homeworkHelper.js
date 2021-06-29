const Country = require('./homework');

const armenia = new Country('Armenia', 'AM', 'Yerevan', 'Armenian');
armenia.addNation('Armenians');
armenia.addNation('Russians');
armenia.addNation('Yezdi');
armenia.addNation('Persian');
armenia.showData()

const russia = new Country('Russia', 'RU', 'Moscow', 'Russian');
russia.addNation('Russians');
russia.addNation('Armenians');
russia.addNation('Azeri');
russia.addNation('Uzbek');
russia.addNation('Tajik');
russia.addNation('Chechen');
russia.showData();

const usa = new Country('USA', 'US', 'Washington', 'English');
usa.addNation('Americans');
usa.addNation('Armenians');
usa.addNation('Mexics');
usa.addNation('Germans');
usa.showData();