const Fragment = () => {
  return (
    <>
      <h1>React Fragment</h1>
      <div className="body_article">
        <pre>
          <code>
            {`
<React.Fragment>
</React.Fragment>

или тоже самое

<>
</>

- Позволяет избежать добавления излишних блоков (<div>, <span> и т.д.) там где это не нужно
- Уменьшает размер реального Dom и оптимизирует обновление реального Dom,
в процессе жизненго цикла

`}
          </code>
        </pre>
      </div>
    </>
  );
};

export default Fragment;
