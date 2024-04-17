// Task Factory Function
const createTask = (title, completed = false) => ({
    title,
    completed,
    toggleCompleted: function() {
      this.completed = !this.completed;
    }
  });
  
  // To-Do Management System
  const ToDoSystem = () => {
    let tasks = [];
  
    return {
      addTask: (title) => {
        tasks.push(createTask(title));
      },
      getTasks: () => tasks,
      getCompletedTasks: () => tasks.filter(task => task.completed),
      getPendingTasks: () => tasks.filter(task => !task.completed),
      toggleTaskCompletion: (index) => {
        if (tasks[index]) {
          tasks[index].toggleCompleted();
        }
      }
    };
  };
  
  // Usage
  const myToDo = ToDoSystem();
  myToDo.addTask('Learn functional programming');
  myToDo.addTask('Complete the project');
  myToDo.toggleTaskCompletion(0); // Toggle the completion of the first task
  
  console.log('All Tasks:', myToDo.getTasks());
  console.log('Completed Tasks:', myToDo.getCompletedTasks());
  console.log('Pending Tasks:', myToDo.getPendingTasks());
        