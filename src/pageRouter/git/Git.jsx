const Git = () => {
  return (
    <>
      <h1>Git</h1>

      <pre>
        <code>{`Добавление в репозитарий
Независимо от того, удаляем мы файл, добавляем или меняем, 
процедура выполнения коммита не меняется. После изменений всегда делается git add, 
который подготавливает изменение к коммиту (а не добавляет файл!), 
и после этого выполняется коммит.

Выполнять из каталога проекта:

$ git add README.md # Для каждого нового или измененного файла
$ git add . # Добавить все изменеия разом

$ git status # проверь статус файла

$ git commit -m 'add README.md' # коммит файла (тут пишем описание изменений)

$ git push -u origin main # отправка изменений на сервер github`}</code>
      </pre>
    </>
  );
};

export default Git;
