const Wrapper = (props) => {
  const style = {
    backgroundColor: props.color,
    with: '250px',
    padding: '20px',
    textAlign: 'center',
    margin: '10px',
  };
  //console.log(props);
  return <div style={style}>{props.children}</div>;
};

export default Wrapper;
