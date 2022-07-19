// question no. 1
// returns an object: firstname:"John", lastname: "Smith"
const result = (function(exports, module){
    exports = module.exports;
    exports.firstname = 'John';
    module.exports.lastname = 'Smith';
    exports = {
        getFullName: function(){
            console.log('John Smith')
        }
    }
    return module.exports;
}).apply(null, [null, {exports: {}}]);
console.log(result);

// question no. 2
let db = [
    {id:1, fname: 'John', lname: 'Smith'},
    {id:2, fname: 'Lucy', lname: 'Jark'},
    {id:3, fname: 'Edward', lname: 'Capton'}
];

class Student {
    constructor(id, firstname, lastname){
        this.id = id;
        this.fname = firstname;
        this.lname = lastname;
    }

    save(){
        let result;
     for (let ele of db){
        //console.log(db);
        if (this.id == ele.id){
            result = ele.id     
        }
    }
        if(result)
        console.log("The data is arleady saved");
        else
        //db.push(`{id: ${this.id}, fname: ${this.fname}, lname: ${this.lname}}`);
        //this doesn't work becuase it will push the property as one string
      db.push(new Student(this.id, this.fname, this.lname));
        
     //db.push(this)
    //  console.log(this.id, this.fname, this.lname);
     console.log(db);
    }

    edit(){
     let result = db.findIndex(person=>person.id === this.id)
     console.log(result);
     if(result === -1){
       console.log("Id not found!")
     }else
      db[result] = this;
    }

    static getById(id){
        return db.find(person=> person.id === id)

    }

    static getAll(){
        return db;

    }

    static deleteById(id){
      let result = db.filter(person=> person.id !== id);
      return result;
     
    }
}

new Student(4, 'Tina', 'Xing').save(); //save to db
new Student(1, 'Tina', 'Xing').save();
new Student(4, 'Miss', 'Xing').edit() //edit studentId with id=4
console.log(Student.deleteById(4)); //remove studentId=4 from db
console.log(Student.getAll()); //return db;
console.log(Student.getById(1)); //return {id:1, fname: 'John', lname: 'Smith'}