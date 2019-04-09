function TodoList() {
    const controller = this;
}

angular.module('TodoApp').component('todoListContainer', 
    {
        <to-do-list>
        template: `
            <main>
                <h1>TODO List</h1>
                <h2>A place to store the things you have to do</h2>
                
                <todo-filter></todo-filter>
                <todo-task></todo-task>
                <todo-add></todo-add>
            </main>
                `,  // or use templateUrl
        controller: TodoList
    }
);