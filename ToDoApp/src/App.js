import ToDoInput from './pages/todo/ToDoInput';
import ToDOList from './pages/todo/ToDOList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App m-5">
            <h1>TO DO LIST</h1>
            <ToDoInput />
            <ToDOList />
    </div>
  );
}

export default App;
