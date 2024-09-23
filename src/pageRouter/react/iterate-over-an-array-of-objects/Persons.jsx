import persons from '../../../data/IterateOverAnArrayOfObjects';
import Person from './Person';

const Persons = () => {
  return (
    <>
      {persons.slice(0, 8).map((person) => {
        // const { id, firstName, lastName, email, img } = person; деструктуризация
        return (
          <Person
            key={person.id}
            {...person}
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

export default Persons;
