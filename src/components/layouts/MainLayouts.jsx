import { Outlet } from 'react-router';

const MainLayouts = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="region-main">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayouts;
