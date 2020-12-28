class Person {
    name
    age
    job
    id
    constructor(name, age , job , id){
        this.name = name;
        this.age = age;
        this.job = job;
        this.id = id;
        // console.log(this)
    }
};
//thong tin ca nhan
const person1 = new Person ('Nguyen Van A', 40 , 'Teacher' , 12345678)
const person2 = new Person ('Pham Thi B', 40 , 'Doctor' , 69696969)
const person3 = new Person ('Nguyen Thi C', 18 , 'Student', 12341234)
const person4 = new Person ('Le Van D', 45 , 'Police', 34343434)
const person5 = new Person ('Bui Thi T', 43 , 'Seller', 88888888)
const person6 = new Person ('Le Van V', 20 , 'Student', 12121212)



class Family {
    address
    familyMembers
    constructor(address , familyMembers){
      this.address = address
        this.familyMembers = []
    }
    addPerson(person){
        this.familyMembers.push(person)
        
    }
    getListPerson(){
      for(let item of this.familyMembers){
      console.log(item)
      }

    }
      }

// dia chi nha so thanh vien
const family1 = new Family('Nha so 1')

family1.addPerson(person1)
family1.addPerson(person2)
family1.addPerson(person3)
// console.log(family1)


const family2 = new Family('Nha so 2')

family2.addPerson(person4)
family2.addPerson(person5)
family2.addPerson(person6)
//console.log(family2)


//khu pho
class Town{
  listFamilies
  constructor(){
      this.listFamilies = [];
  }
  addfamily(family){
      this.listFamilies.push(family);
  }
  getListFamily(){
    for(let items of this.listFamilies){
      console.log(items)
    }
  }
}
let town = new Town()
town.addfamily(family1);
town.addfamily(family2);
console.log(town.getListFamily())
console.log(family1.getListPerson())
console.log(family2.getListPerson())





