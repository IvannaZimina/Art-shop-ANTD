import style from './style.module.scss';
import logo from './white_logo.png';
import visa from './visa-master.png';
import react from './react-logo.png';
import { NavLink } from 'react-router-dom';

import "antd/dist/antd.css"
import { Layout, Row, Col } from 'antd';
const { Footer } = Layout;

function FooterCont() {
  return (
    <>
      <Footer className={style.footerContainer}>
        <div className={style.centerContext}>

          <Row className={style.rowFoot}>

            <Col xs={{ span: 8, offset: 1 }} md={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }} className={style.colFoot}>
              <div><img src={logo} alt="" className={style.logoFooter}/></div>
              <div className={style.licence}>© Все права защищены</div>
            </Col>

            <Col xs={{ span: 8, offset: 1 }} md={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }} className={style.colFoot}>
              <div className={style.footerText}><p>Мы украинский производитель картин на холсте с эксклюзивными принтами. Абсолютно каждая картина делается вручную, от распила дерева до натяжки холста на подрамник.</p></div>
            </Col>

            <Col xs={{ span: 8, offset: 1 }} md={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }} className={style.colFoot}>
              <NavLink to="/oferta"    className={style.footerLink}> Политика конфиденциальности</NavLink>
              <NavLink to="/exchange"  className={style.footerLink}> Условия обмена и возврата</NavLink>
              <NavLink to="/agreement" className={style.footerLink}> Пользовательское соглашение</NavLink>
              <NavLink to="/delivery"  className={style.footerLink}> Доставка и оплата</NavLink>
            </Col>

            <Col xs={{ span: 8, offset: 1 }} md={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }} className={style.colFoot}>
              <div className={style.contactFoot}>
                <div className={style.footerText}>г.Одесса, ул.Успенская 60</div>
                <div className={style.footerText}>+38 (067) 464 85 36</div>
                <div className={style.footerText}>chilliart.com.ua@gmail.com</div>
              </div>
            </Col>

          </Row>

          <div className={style.masterCard}>
            <img src={visa} alt="" />
          </div>

          <div className={style.technology}>
            Made on <img src={react} className={style.logoReact} alt=""/>
          </div>
          
        </div>
      </Footer>
    </>
  );
}

export default FooterCont;
