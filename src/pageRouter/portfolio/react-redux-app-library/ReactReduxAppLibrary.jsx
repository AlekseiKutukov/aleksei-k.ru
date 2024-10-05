import BookForm from './frontend/components/bookForm/BookForm';
import BookList from './frontend/components/bookList/BookList';
import Filter from './frontend/components/filter/Filter';
import './frontend/style/style.css';

const ReactReduxAppLibrary = () => {
  return (
    <>
      <h1>Библиотека</h1>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
    </>
  );
};

export default ReactReduxAppLibrary;
