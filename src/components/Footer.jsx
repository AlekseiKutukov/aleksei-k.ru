import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  //кнопка подъем вверх
  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div className="region-footer">
        <div className="over__to-upper">
          <div className="to-upper" onClick={handlerScrollUp}>
            Вверх
          </div>
        </div>
        <div className="footer-site-name">
          <Link to="/">
            <div className="footer__link" title="Вернуться на главную">
              Алексей К 2024 год
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
