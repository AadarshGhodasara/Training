
export let todos = [
    {
        id:1,
        name:'Fix changes which given by mentor',
    },
    {
        id:2,
        name:'Create To Do App',
    },
    {
        id:3,
        name:'work on react life cycle method ',
    },
    {
        id:4,
        name:'push all work in git',
    },
]
let reducer = (state = todos,action) => {
    let newTodos;

    switch (action.type) {
        case 'ADD_TODO':
            newTodos = [...state];
            newTodos.push(action.payload)
            todos.push(action.payload)
            return newTodos;
        case 'DELETE_TODO':
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload)
            todos = newTodos;
            return newTodos;
        case 'UPDATE_TODO':
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if(newTodos[i].id === action.payload.id){
                    break;
                }
            }
            if(index !== -1){
                newTodos[index] = action.payload
                todos[index] = action.payload
                return newTodos
            }
            break;
        default:
            break;      
    }
    return state;
}

export default reducer;