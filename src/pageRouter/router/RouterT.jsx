const RouterT = () => {
  return (
    <>
      <div>
        <strong>React Router</strong> внешняя библиотека которая организует
        навигацую между страницами,
        <div>
          связывая url адреса с конкретными компонентами в приложении React.
        </div>
      </div>
      <div>
        Работает по принципу Client-side routing - роутинг (маршрутизация) на
        стороне клиента
      </div>
      <div>
        <strong>React Router Dom</strong> - для веб приложений
      </div>
      <div>
        <strong>React Native</strong> - для мобильных приложений
      </div>
      <div className="body_article">
        <pre>
          <code>
            {`
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="react" element={<ReactT />} />
            <Route path="react/state-via-props" element={<StateViaProps />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
`}
          </code>
        </pre>
      </div>
      <div></div>
    </>
  );
};

export default RouterT;
