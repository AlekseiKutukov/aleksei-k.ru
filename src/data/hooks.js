const hooks = [
  //Router:
  //React:
  //Redux:

  // {
  //   title: '',
  //   librarys: '',
  //   id: '',
  //   slug: '',
  //   description: '',
  //   memorandum: '',
  //   example: ``,
  // },

  {
    title: 'useContext',
    librarys: 'React',
    id: '6',
    slug: 'usecontext',
    description:
      'Этот хук позволяет сохранять переменную или объект, и использовать ее между несколькими компонентами. Под самим же контекстом, понимают эту сохраненную величину.',
    memorandum: 'Позволяет передать данные минуя пропсы.',
    example: (
      <>
        <pre>
          <code>
            {`Файл context/BoolenContext.jsx
*****

const BoolenContext = createContext({
  boolen: '',
  setBoolen: () => {}, // чтобы избежать ошибок
});


*****
В папке apicontext изменяем контекст 
*****

В файле SingleHooks.jsx
*****
<BoolenContext.Provider value={{ boolen: boolen, setBoolen: setBoolen }} >
  <Boolen />
  <ChangeBoolen />
</BoolenContext.Provider>
________________________________
Provider созданет контейнер (обертку) вокруг компонентов <Boolen /> и 
<ChangeBoolen />, чтобы предоставить им общий контекст. Это позволяет компонентам 
внутри этого контейнера получать доступ к общим данным и функциям. В данном 
случае, через Provider передаются значения boolen и setBoolen, что позволяет всем 
компонентам, находящимся внутри Provider, использовать эти данные.
          `}
          </code>
        </pre>
      </>
    ),
  },
  {
    title: 'useLocation',
    librarys: 'Router',
    id: '5',
    slug: 'uselocation',
    description:
      'Этот хук возвращает объект который содержит информацию полученную из адресной строки',
    memorandum: 'Смотри консоль',
    example: (
      <>
        <pre>
          <code>
            {`const location = useLocation();
console.log(location);
`}
          </code>
        </pre>
      </>
    ),
  },
  {
    title: 'useNavigate',
    librarys: 'Router',
    id: '4',
    slug: 'usenavigate',
    description:
      'Этот хук возвращает другую функцию, с помощью которой можно изменять локацию',
    memorandum: 'Позволяет перенаправлять (редирект)',
    example: (
      <>
        <pre>
          <code>
            {`const navigate = useNavigate();
navigate('..', {relative: 'path'})
выход на один уровень выше от текущего пути
*****
где '..' это путь куда перенаправим
{relative: 'path'} это опция, текущий путь
`}
          </code>
        </pre>
      </>
    ),
  },
  {
    title: 'useParams',
    librarys: 'Router',
    id: '3',
    slug: 'useparams',
    description:
      'Дает нам доступ к параметрам этого конкретного маршрута. params - это параметры, значения которых динамически устанавливаются в URL.',
    memorandum: 'Позволяет получить часть адрессной строки. (Смотри консоль)',
    example: (
      <>
        <pre>
          <code>
            {`Файл App.js
*****
<Route path="react/:hooksSlug" element={<SingleHooks />} />
Где hooksSlug является параметром, который мы перехватим
*****
____________

Файл SingleHooks.jsx
*****
const params = useParams();
console.log(params)
`}
          </code>
        </pre>
      </>
    ),
  },
  {
    title: 'useEffect',
    librarys: 'React',
    id: 2,
    slug: 'useeffect',
    description: (
      <div>
        Предназначен для запуска побочных эффектов (например, выполнение
        сетевого запроса или добавление обработчика событий) после монтирования
        и отрисовки компонента. Данная функция принимает колбек и массив
        зависимостей. <br />
      </div>
    ),
    memorandum: (
      <div>
        Что касается массива зависимостей, то логика следующая:
        <li>массив не указан: эффект запускается при каждом рендеринге</li>
        <li>указан пустой массив: эффект запускается только один раз</li>
        <li>
          указан массив с элементами: эффект запускается при изменении любого
          элемента
        </li>
      </div>
    ),
    example: (
      <pre>
        <code>{`const SingleHooks = () => {

  const [like, setLike] = useState(0); // Создаем состояние счетчика

  useEffect(() => {
    console.log('Счетчик был изменен до', like);
    return () => {
      console.log('Компонент удален');
    };
  }, [like]); // Зависимость от состояния счетчика

return (
<>
  <button onClick={() => setLike(like + 1)}>like</button> {like}
</>
    );
  }),
}`}</code>
      </pre>
    ),
  },
  {
    title: 'useState',
    librarys: 'React',
    id: 1,
    slug: 'usestate',
    description:
      'Предназначен для управления состоянием компонента. Принимает на вход начальное состояние и возвращает массив из двух значений: текущего значения состояния и функции, которая обновляет это состояние.',
    memorandum:
      'const[текщее значение, функция] = useState(начальное состояние)',
    example: (
      <pre>
        <code>
          {`const [like, setLike] = useState(0);

<button onClick={() => setLike(like + 1)}>like</button> {like} `}
        </code>
      </pre>
    ),
  },
];

export default hooks;
