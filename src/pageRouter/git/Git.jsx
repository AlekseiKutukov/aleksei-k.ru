const Git = () => {
  return (
    <>
      <div>Git</div>

      <div> Добавление в репозитарий</div>
      <div>
        {' '}
        Независимо от того, удаляем мы файл, добавляем или меняем, процедура
        выполнения коммита не меняется. После изменений всегда делается git add,
        который подготавливает изменение к коммиту (а не добавляет файл!), и
        после этого выполняется коммит.
      </div>
      <div>
        {' '}
        $ git add README.md # Для каждого нового или измененного файла,
        <div> Выполнять из каталога проекта</div>
      </div>
      <div> $ git add . # Добавить все изменеия разом</div>

      <div> $ git status # проверь статус файла</div>
      <div>
        {' '}
        $ git commit -m 'add README.md' # коммит файла (тут пишем то что
        изменили т.е. описание изменений){' '}
      </div>
      <div> $ git push -u origin main -отправка изменений на сервер github</div>
    </>
  );
};

export default Git;