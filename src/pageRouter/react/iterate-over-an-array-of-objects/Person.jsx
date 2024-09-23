const Person = (props) => {
  // console.log(props);
  const { firstName, lastName, email, img } = props;
  return (
    <div className="cards__person">
      <img src={img} alt={`Person ${firstName}`} />
      <h3>
        {firstName} {lastName}
      </h3>
      <h6>{email}</h6>
    </div>
  );
};

export default Person;
