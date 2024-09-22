const Npm = () => {
  return (
    <>
      <div>
        npm i query-string (Router) конвертирует строку запроса в объект js
        <br />
        const parsed = queryString.parse(location.search); <br />
        console.log(parsed);
        <br />
        {`//=> {foo: 'bar'}`}
      </div>
    </>
  );
};

export default Npm;
