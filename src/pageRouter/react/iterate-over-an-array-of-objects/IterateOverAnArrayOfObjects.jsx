import Persons from './Persons';

const IterateOverAnArrayOfObjects = () => {
  return (
    <>
      <h1>Итерация по массиву объектов</h1>
      <div className="all__person">
        <Persons />
      </div>

      <div className="body_article">
        <pre>
          <code>
            {`******* Корневой файл *******  

import Persons from './Persons';

const IterateOverAnArrayOfObjects = () => {
  return (
    <>
      <h1>Итерация по массиву объектов</h1>
      <div className="all__person">
        <Persons />
      </div>
    </>
  );
};

export default IterateOverAnArrayOfObjects;`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            {`******* Persons.jsx *******  
            
import persons from '../../../data/IterateOverAnArrayOfObjects';
import Person from './Person';

const Persons = () => {
  return (
    <>
      {persons.slice(0, 8).map((person) => {
        // const { id, firstName, lastName, email, img } = person;  //деструктуризация
        return (
          <Person
            key={person.id}
            {...person}    //spread оператор
            // key={id}
            // firstName={firstName}
            // lastName={lastName}
            // email={email}
            // img={img}
          />
        );
      })}
    </>
  );
};

export default Persons;`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            {`******* Person.jsx *******  

import Persons from './Persons';

const Person = (props) => {
  // console.log(props);
  const { firstName, lastName, email, img } = props;
  return (
    <div className="cards__person">
      <img src={img} alt={\`Person \${firstName}\`} />
      <h3>
        {firstName} {lastName}
      </h3>
      <h6>{email}</h6>
    </div>
  );
};

export default Person;`}
          </code>
        </pre>
      </div>
    </>
  );
};

export default IterateOverAnArrayOfObjects;
