import style from './style.module.scss';
import logo from './white_logo.png';
import { NavLink } from 'react-router-dom';

import "antd/dist/antd.css"
import { InstagramOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

function HeaderCont() {
    return (
      <>
        <Header className={style.headerConteiner}>

          <div className={style.centerBlock}>
            <NavLink to="/"><img src={logo} className={style.logo} alt="" /></NavLink>

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]}>
              <Menu.Item className={style.linkText} key="1"><NavLink to="/catalog" > Каталог</NavLink></Menu.Item>
              <Menu.Item className={style.linkText} key="2"><NavLink to="/benefits"> Преимущества</NavLink></Menu.Item>
              <Menu.Item className={style.linkText} key="3"><NavLink to="/reviews" > Отзывы</NavLink></Menu.Item> 
              <Menu.Item className={style.linkText} key="4"><NavLink to="/feedback"> Обратная связь</NavLink></Menu.Item>
            </Menu>

            <InstagramOutlined className={style.instaIcon}/>
            <span className={style.phoneContact}>+38 (067) 464 85 36</span>
          </div>
        </Header>
      </>
    );
  }
  
  export default HeaderCont;
  