const student = "Айдарбеков Адахан Таалайбекович";// Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;



class Person {
    constructor (pers_info) {
        let info = pers_info.split(', ');
        this.name = info[0];
        this.gender = info[1];
        this.birth = info[2];
        this.format_birth();
    }

    format_birth () {
        let birth = this.birth.split('.');
        this.birth = `${birth[2]}/${birth[1]}/${birth[0]}`;
        return this.birth
    }

    calculate_age() {
        let p1 = new Date();
    
        let number = new Date(this.birth);

        let birth_present = new Date(number);
        birth_present.setFullYear(p1.getFullYear());
    
        let difference = new Date(p1 - number);
        let vozr = Math.abs(difference.getFullYear() - 1970);
    
        if ((p1 - birth_present) < 0) {
            vozr = vozr - 1;
        } 
        return vozr
      }
    
    format_name() {
        let full_name = this.name.split(' ');
        full_name = `${full_name[0]} ${full_name[1].substring(0, 1)}. ${full_name[2].substring(0, 1)}.`;
        return full_name;
    }

    get_gender() {
        return this.gender == 'мужчина' ? 'М': 'Ж';
    }
}


const clients_page = `
Пономарев Андрей Алексеевич, мужчина, 11.12.1980
Рыбакова Алина Семёновна, женщина, 16.04.1974
Молчанов Даниил Ильич, мужчина, 21.03.1984
Смирнова София Львовна, женщина, 02.01.1987
Владимиров Артём Григорьевич, мужчина, 07.12.1990
Маслова Елизавета Егоровна, женщина, 10.10.1997
Назарова Вера Романовна, женщина, 01.05.1983
Иванов Иван Фёдорович, мужчина, 05.05.1999
Дмитриев Алексей Григорьевич, мужчина, 12.11.1998
Овчинников Платон Александрович, мужчина, 26.05.1999
Мартынова Софья Тимуровна, женщина, 07.06.1995
Соколов Михаил Адамович, мужчина, 11.03.1979
`

let clients = clients_page.split('\n');
clients = clients.filter(clients_elem => clients_elem != '');

let person_classes = [];

for (let clients_ind in clients) {
    let person = new Person(clients[clients_ind]);
    person_classes.push(person);
}

const clients_amount = person_classes.length;
const men = person_classes.filter(clients => clients.get_gender() == 'М').length;
const women = person_classes.filter(clients => clients.get_gender() == 'Ж').length;

console.log(`Всего гостей: ${clients_amount}`)
console.log(`Мужчин: ${men}`)
console.log(`Женщин: ${women}`)
console.log('Список гостей:')

for (let clients_ind in person_classes) {
    clients = person_classes[clients_ind];
    console.log(`${clients.format_name()}, ${clients.get_gender()}, Возраст: ${clients.calculate_age()}`);
}
