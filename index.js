// BoardMember constructor function
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  
    // Methods
    this.veto = function() {
      return "No, I must disagree";
    };
  
    this.approve = function() {
      return "You can do that!";
    };
  
    this.doCharity = function() {
      return "I like to help people.";
    };
  
    this.releasePressStatement = function() {
      return "You will see great things from Scuber.";
    };
  
    this.sayHi = function() {
      return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
    };
  }
  
  // Example usage:
  const boardMember = new BoardMember("John Doe", "California", "Business");
  console.log(boardMember.sayHi()); // Output: Hi, my name is John Doe. I am from California, and I was trained in Business.
  