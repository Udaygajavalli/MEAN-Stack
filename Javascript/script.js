var User = function(firstname, courseCount) {
    this.firstname = firstname;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    }    
}

User.prototype.getFirstname = function(){
    console.log(`Your Firstname is: ${this.firstname}`);
}

var uday = new User("Uday",10);
uday.getCourseCount();
uday.getFirstname();