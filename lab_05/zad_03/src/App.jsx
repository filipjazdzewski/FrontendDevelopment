import ListNumbers from './components/ListNumbers';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header text='RANDOM NUMBERS GENERATOR' />
      <div className='container'>
        <ListNumbers />
      </div>
    </>
  );
}

export default App;
