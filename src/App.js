import './App.css';
import List from './components/List';
import BookDetails from './components/BookDetails';
import { useSelector } from 'react-redux';
import FormToEdit from './components/FormToEdit';

function App() {
  let selected = useSelector(state => state.selectedBook)
  let selectedForEdit = useSelector(state => state.selectedBookForEdit)
  return (<>

    <List />
    {selected && <BookDetails />}
    {selectedForEdit && <FormToEdit />}
  </>
  );
}

export default App;
