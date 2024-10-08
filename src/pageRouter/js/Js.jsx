const Js = () => {
  return (
    <>
      <h1>JS</h1>
      <div className="body_article">
        <pre>
          <code>
            <strong>Типы данных 8шт:</strong>
            {`

String, Number, BigInt, Boolean, Symbol, Undefined (не установлено), 
Null (отсутствие значения), Object (массив - упорядоченная коллекция,
объект - именованная коллекция, map - это коллекция ключ/значение, как и Object. 
Но основное отличие в том, что Map позволяет использовать ключи любого типа. 
Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение 
может появляться только один раз.)
`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>методы HTTP:</strong>
            {`

GET - получить ресурсы с веб сервера(картинки, html, js и т.д)

POST - отправляет ресурсы на веб сервер (логин и пароль, формы)

PUT - обновляет весь или создает ресурс

PATCH - обновляет только ча́сть определенного ресурса

DELETE - удаляет ресурсы на сервере 

OPTION - получает информацию от сервера, какие методы взаимодействия поддерживает сервер

HEAD - с эмулировать GET запрос, но сервер вернет только заголовок.

`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>REST API:</strong>
            {`

    fetch ('API_URL')

fetch возвращает promise у которого 3 состояния:

1) Pending  нерешен/ожидает

2) Resolved  решен/выполнен

3) Rejected  отклонен/ошибка


async/await это настройка над промисами
`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>Область видимости:</strong>
            {`

 -Глобальная
 -Функциональная
 -Блочная
`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>Отличие var от let и const:</strong>
            {`

1) Let const нельзя повторно объявлять 
2) Let const видны только после объявления 
3) Let const ограничиваются блочной и функциональной областью видимости 
4) let и const — не поддерживает hoisting.

var можно объявить до инициилизации переменной.
var поддерживает hoisting 

Var ограничиваются только функциональной областью видимости, также можно повторно 
обьявить(из-за чего часто возникали ошибки)

hoisting это процесс поднятия переменных, при котором их можно использовать до объявления.

`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>Выбор элементов на странице:</strong>
            {`

querySelector 
querySelectorAll

getElementById;
getElementsByClassName;
getElementsByTagName;
getElementsByName только те которые имеют атрибут name`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>События:</strong>
            {`

СОБЫТИЯ МЫШИ:

1) click
2) contextmenu – кликнули правой кнопкой мыши
3) mouseover / mouseout – когда мышь наводится на / покидает элемент.
4) mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
5) mousemove – при движении мыши.

СОБЫТИЯ НА ЭЛЕМЕНТАХ УПРАВЛЕНИЯ:

1) submit – пользователь отправил форму <form>.
2) focus – пользователь фокусируется на элементе, например нажимает на <input>.


КЛАВИАТУРНЫЕ СОБЫТИЯ:

1) keydown и keyup – когда пользователь нажимает / отпускает клавишу.`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>Event Loop цикл событий</strong>
            {`

Микрозадачи — это задачи, которые должны быть выполнены немедленно после текущего 
выполненного скрипта и перед тем, как Event Loop продолжит обрабатывать макрозадачи.

Основной момент здесь — приоритет микрозадач. После завершения каждой макрозадачи, 
перед тем, как переходить к следующей макрозадаче (о них ниже), JS сначала обработает 
все микрозадачи, находящиеся в очереди.


Макрозадачи — это задачи, которые планируются на будущее выполнение. 
Они будут добавлены в конец очереди событий и будут обработаны только после того, 
как все микрозадачи будут выполнены.

`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>callback</strong>
            {`

коллбэк — это функция, которая должна быть выполнена после того, как другая 
функция завершила выполнение.

Функция, переданная в другую функцию в качестве аргумента, которая затем вызывается 
по завершению какого-либо действия. Это позволяет гарантировать то, что некий 
фрагмент кода будет вызван только после того, как какой-то другой код завершит 
выполнение. Такое постоянно происходит при взаимодействие с веб-сервисами.
`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>Замыкание</strong>
            {`

Механизм работы с областями видимости в JavaScript, который позволяет сохранять доступ к 
переменным даже после завершения работы функции, в которой эти переменные были объявлены.

`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>Рекурсия</strong>
            {`

способность функции вызвать саму себя в своём теле, обязательно должна иметь условие 
завершения.(применение создание анимации, обход dom дерева)
`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>Функции высшего порядка</strong>
            {`

функции, которые могут принимать другие функции в качестве аргументов или возвращать их
в качестве результата
`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>Чистая функция</strong>
            {`

это функция, которая соответствует двум следующим требованиям:
  - При вызове с одними и теми же аргументами всегда возвращает один и тот же результат.
  - При выполнении функции не происходит никаких побочных эффектов.
`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            {`Иммутабельность это когда исходный массив или объект остается неизменным, а для изменения копируется в новый.
  
Babel - это компилятор, который преобразует код (с новой функциональностью) в понятный для большинства браузеров. Позволяет сделать код js, выполняемым на большинстве браузеров.

spread - ... позволяет расширять выражения.

синхронный код ждет завершения задачи и только потом выполняет следующую задачу.

асинхронный код не ждёт завершения выполнения задачи, а сразу переходит к следующей.

раньше были колбеки, потом промисы, сейчас асинк/авайт(это теже промисы)
`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>Сайд-эффекты</strong>
            {`

Побочные эффекты, которые могут возникать при модификации чего-либо за пределами области видимости функции.
к ним относиться:
 - изменение переменной,
 - пользовательский ввод,
 - запрос к API,
 - запись данных на диск,
 - вывод лога в консоль и т.д.
`}
          </code>
        </pre>
      </div>

      <div className="body_article">
        <pre>
          <code>
            <strong>ООП:</strong>
            {`
 - Абстракция в JavaScript — это упрощение сложной реальности путём моделирования классов или объектов, соответствующих задаче.

 - Полиморфизм заключается в способности вызывать один и тот же метод для разных объектов, при этом каждый объект реагирует по-своему. Для реализации полиморфизма используется наследование.

 - Наследование принцип позволяющий создавать новые классы на основе существующих и расширять их функционал.
 
 - Инкапсуляция это когда все важные данные, необходимые для работы класса или объекта, должны храниться в нём же. И к ним нет доступа из вне.


Прототип – элемент JS, который позволяет другим составляющим кода наследовать свойства и методы. Изначально каждый объект обладает собственным прототипом. Если у искомого элемента не хватает параметров и свойств, они будут искаться в prototype. Когда у ближайшего прототипа соответствующие характеристики отсутствуют, поиск переходит далее по иерархии – ниже.


Конструктор - позволяет создавать множество однотипных объектов 
  - Имя функции-конструктора должно начинаться с большой буквы.
  - Функция-конструктор должна выполняться только с помощью оператора "new".

`}
          </code>
        </pre>
      </div>
      <div className="body_article">
        <pre>
          <code>
            <strong>React:</strong>
            {`

ХУКИ:
-useRef в React позволяет сохранить некоторый объект, который можно изменять и который хранится в течение всей жизни компонента.
useMemo
useCollback
Отличия useEffect и useLayoutEffect
useLayoutEffect - синхронный и будет вызван до того, как браузер сможет отрисовать компоненты. Срабатывает когда компоненты уже находятся на virtual dom (в памяти и можно прочитать/установить различные свойств), но еще не были отрисованы браузером. useEffect - асинхронный и будет вызван после того, как браузер отрисует компоненты.

`}
          </code>
        </pre>
      </div>
    </>
  );
};

export default Js;
