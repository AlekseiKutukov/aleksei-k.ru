import { Link } from 'react-router-dom';
import hooks from '../../data/hooks';
import '../../style/react.css';

const AllHooks = () => {
  return (
    <>
      <h1>Hooks</h1>
      <div className="page-allhooks">
        {hooks.map((hook) => (
          <Link to={hook.slug} key={hook.id} className="hookLink">
            {hook.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllHooks;
