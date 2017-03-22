// Problem #1
function picture(name, location){
  this.name= name,
  this.location= location
}

function Album(){
  this.pics= []
}

Album.prototype.addPic = function(n, l){
  this.pics.push(new picture(n, l))
}

Album.prototype.listPics = function(){
  for(i=0; i < this.pics.length; i++){
    console.log(this.pics[i].name);
  }
}

Album.prototype.getPic = function(x){
  console.log(this.pics[x].name);
}
var myAlbum= new Album();
myAlbum.addPic("pic1.png", "New York");
myAlbum.addPic("pic2.png", "New York");
myAlbum.listPics();
myAlbum.getPic(1);

//Problem #2
function Person(name, age, gender) {
  this.name= name;
  this.age= age;
  this.gender= gender;
}
Person.prototype.displayInfo = function() {
  console.log(this.name + ":" + this.age + ":" + this.gender);
}
function Teacher(name, age, gender, teach){
  this.teach= teach;
  Person.call(this, name, age, gender);
}
Teacher.prototype= Object.create(Person.prototype);
function Student(name, age, gender, stud){
  this.stud= stud;
  Person.call(this, name, age, gender);
}
Student.prototype= Object.create(Person.prototype);
function School(){
  this.t= [];
  this.s= [];
}
School.prototype.addTeacher= function(n, a, g, t) {
  this.t.push(new Teacher(n, a, g, t))
}
School.prototype.addStudent= function(n, a, g, s){
  this.s.push(new Student(n, a, g, s))
}
var mySchool= new School();
mySchool.addTeacher("Orlando", "29", "Male", true);
mySchool.t[0].displayInfo();
mySchool.addStudent("Kunj", "19", "Male", true);
mySchool.s[0].displayInfo();
