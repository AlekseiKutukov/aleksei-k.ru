const Home = () => {
  return (
    <>
      <div>Home</div>
      <div>-useMemo</div>
      <div>портал</div>
      <div>
        реализуйте там интересные фичи: подписку/отписку на почтовую рассылку;
      </div>
      <div>фотогалерею;</div>
      <div>форму для регистрации и входа на сайт</div>
      <div>
        контактную форму с валидацией, сообщением о неверно введенной информации
        и подтверждением
      </div>

      <div>цитату дня – случайный вывод каких-то элементов из набора.</div>
      <div className="body_article">
        <pre>
          <code>
            {`правильно было бы менять title в state, а уж затем отображать измененное значение
Если у Вас несколько страниц, то рекомендую плагин React Helmet помогает легко и просто 
менять тайтл или вставлять в head секцию нужные теги.`}
          </code>
        </pre>
      </div>
      <div></div>
    </>
  );
};

export default Home;
