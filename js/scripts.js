//Business Logic
var toDo;
var iDid;

function Tasks() {
  this.list = [],
  this.currentId = 0
};

Tasks.prototype.addTask = function(singleTask) {
  singleTask.id = this.assignId();
  this.list.push(toDo);
};
Tasks.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Tasks.prototype.deleteTask = function(task) {
  for (i=0;i<this.list.length;i++){
    if (this.list[i]) {
      if (this.list[i] == task) {
        delete this.list[i];
        return true;
      }
    }
  };
  return false;
};
function SingleTask(toDo) {
  this.toDo = toDo;
}
var myTasks = new Tasks();

//----User----Interface----Logic-----------------
$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    toDo = $("input#toDo").val();
    iDid = $("input#iDid").val();
    if (toDo){
      var newSingleTask = new SingleTask(toDo);
      myTasks.addTask(newSingleTask);
    };
    if (iDid){
      myTasks.deleteTask(iDid);
    };
    result = "";
    for (i=1;i<=myTasks.currentId;i++){
      if(myTasks.list[i-1]){
        result+='"'+myTasks.list[i-1]+'" ';
      };
      $("#locationOutput").text(result);
    };
  });
});
