import style from './style.module.scss';
import "antd/dist/antd.css";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import delivery from './delivery.png';
import handmade from './handmade.png';
import origin from './origin.png';
import canvas from './canvas.png';
import item1 from './items/item1.jpg';
import item2 from './items/item2.jpg';
import item4 from './items/item4.jpg';
import item5 from './items/item5.jpg';

import { DownOutlined } from '@ant-design/icons';
import { Layout, Menu, Dropdown, Card, Row, Col, Steps, Popover, Carousel } from 'antd';
const { Content } = Layout;
const { Step } = Steps;

function ContentCont() {

    const [state, setState] = useState({ visible: false });
    const [phone, setPhone] = useState('');
    let navigate = useNavigate();

    const handleMenuClick = (e) => {
        if (e.key === '3') {
            setState({ visible: false });
        }
    };

    const handleVisibleChange = (flag) => {
        setState({ visible: flag });
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">Цена: по возрастанию</Menu.Item>
            <Menu.Item key="2">Цена: по убыванию</Menu.Item>
            <Menu.Item key="3">Название: А-Я</Menu.Item>
            <Menu.Item key="4">Название: Я-А</Menu.Item>
            <Menu.Item key="5">Порядок: сперва новые</Menu.Item>
            <Menu.Item key="6">Порядок: сперва старые</Menu.Item>
        </Menu>
    );

    const customDot = (dot, { status, index }) => (
        <Popover content={<span> step {index} status: {status} </span>} >
            {dot}
        </Popover>
    );

    const arr = [
        { id: '1', name: 'Картина Gold Franklin', price: 399, oldPrice: 1000 },
        { id: '2', name: 'Картина Gold Franklin', price: 399, oldPrice: 1000 },
        { id: '3', name: 'Картина Gold Franklin', price: 399, oldPrice: 1000 },
        { id: '4', name: 'Картина Gold Franklin', price: 399, oldPrice: 1000 },
        { id: '5', name: 'Картина Gold Franklin', price: 399, oldPrice: 1000 },
        { id: '6', name: 'Картина Gold Franklin', price: 399, oldPrice: 1000 },
        { id: '7', name: 'Картина Gold Franklin', price: 399, oldPrice: 1000 },
        { id: '8', name: 'Картина Gold Franklin', price: 399, oldPrice: 1000 },
        { id: '9', name: 'Картина Gold Franklin', price: 399, oldPrice: 1000 },
    ];

    const card = arr.reduce((acc, item) => {
        acc.push(
            <>
            <div className={style.card}>
                <Card hoverable cover={<img alt="" src={item1} className={style.itemImg}/>}>
                    <div className={style.itemTitle}>{item.name}</div>
                    <div className={style.itemPrice}>{item.price} <span>{item.oldPrice}</span></div>
                    <div className={style.itemBtn}>
                        <button type="click" className={style.itemDetails}>Подробнее</button>
                        <button type="click" className={style.itemAddBucket}>Добавить в корзину</button>
                    </div>
                </Card>
            </div>
            </>)
        return acc;
    }, []);

    const arrHot = [
        {id: '1', name: 'Картина Gangster monkey', promoPrice: 299, oldPrice: 399},
        {id: '2', name: 'Картина Gangster monkey', promoPrice: 299, oldPrice: 399},
        {id: '3', name: 'Картина Gangster monkey', promoPrice: 299, oldPrice: 399},
        {id: '4', name: 'Картина Gangster monkey', promoPrice: 299, oldPrice: 399},
        {id: '5', name: 'Картина Gangster monkey', promoPrice: 299, oldPrice: 399},
        {id: '6', name: 'Картина Gangster monkey', promoPrice: 299, oldPrice: 399},
        {id: '7', name: 'Картина Gangster monkey', promoPrice: 299, oldPrice: 399},
        {id: '8', name: 'Картина Gangster monkey', promoPrice: 299, oldPrice: 399},
        {id: '9', name: 'Картина Gangster monkey', promoPrice: 299, oldPrice: 399}
    ];

    const cardHot = arrHot.map( (elem) => (
        <>
            <div className={style.card} key={elem.id}>
                <Card hoverable cover={<img alt="" src={item2} className={style.itemImg} />}>
                    <div className={style.itemMark}>HOT</div>
                    <div className={style.itemTitle}>{elem.name}</div>
                    <div className={style.itemPrice}>{elem.promoPrice} грн. <span>{elem.oldPrice} грн.</span></div>
                    <div className={style.itemBtn}>
                        <button type="click" className={style.itemDetails}>Подробнее</button>
                        <button type="click" className={style.itemAddBucket}>Добавить в корзину</button>
                    </div>
                </Card>
            </div>
        </>
    ));

    return (
        <>
            <Content className={style.centerContainer}>

                <div className={style.titleBlock}>
                    <h1 className={style.titleSite}>КАРТИНЫ НА ХОЛСТЕ МОТИВИРУЮЩИЕ К ДЕЙСТВИЮ</h1>
                    <div className={style.textAfterTitle}><p>Подходят под любой интерьер и способны взорвать продуктивность</p></div>
                    <div className={style.butCatalog}>
                        <button type="button" onClick={() => navigate("/catalog")}>В каталог</button>
                    </div>
                    <DownOutlined className={style.arrowTitle} />
                </div>

                <div className={style.someItems}>

                    <div className={style.itemBlock}>
                        <div className={style.itemImg}><img src={handmade} alt="" /></div>
                        <div className={style.itemTitle}>100% ручная работа</div>
                        <div className={style.itemDesribe}>Каждая картина на нашем производстве делается вручную, от распила дерева до натяжки холста на подрамник</div>
                    </div>

                    <div className={style.itemBlock}>
                        <div className={style.itemImg}><img src={origin} alt="" /></div>
                        <div className={style.itemTitle}>Авторское право</div>
                        <div className={style.itemDesribe}>Все принты разработаны нашими дизайнерами и запатентованы. Авторские права действуют в Украине и мире</div>
                    </div>

                    <div className={style.itemBlock}>
                        <div className={style.itemImg}><img src={delivery} alt="" /></div>
                        <div className={style.itemTitle}>Доставка и оплата</div>
                        <div className={style.itemDesribe}>Доставка осуществляется Новой почтой в собственной упаковке в течении 1-5 дней. Оплата наложенным или на карту</div>
                    </div>

                </div>

                <div className={style.specialCanvas}>
                    <div className={style.canvasBlock}>
                        <div className={style.canvasImg}><img src={canvas} alt="" /></div>
                        <div className={style.canvasText}>
                            <div className={style.canvasTitle}>Специальный холст для печати, краски и подрамник</div>
                            <div className={style.canvasDescribe}>Для производства картин мы используем только самые качественные комплектующие, которые прослужат Вам долгие годы: натуральный и полиэстеровый холст, плотностью 240 грамм/м2 , пигментные краски, которые используются в интерьере и не вредны для окружающих, подрамник из сосны.</div>
                        </div>
                    </div>
                </div>

                <div className={style.itemBuy}>
                    <div className={style.newItems}>Новинки</div>

                    <div className={style.menuDropdown}>
                        <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={state.visible} >
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Порядок: по умолчанию <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>

                    <div className={style.canvasItems}> {card} </div>

                    <div className={style.fullCatalogBtn}>
                        <button type="click" className={style.moreItems}>Загрузить еще</button><br />
                        <button type="click" className={style.fullCat}>Смотреть полный каталог</button>
                    </div>
                </div>

                <div className={style.hitBuy}>
                    <div className={style.newItems}>Хиты продаж</div>

                    <div className={style.menuDropdown}>
                        <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={state.visible} >
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Порядок: по умолчанию <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>

                    <div className={style.canvasItems}> {cardHot} </div>

                    <div className={style.fullCatalogBtn}>
                        <button type="click" className={style.moreItems}>Загрузить еще</button><br />
                        <button type="click" className={style.fullCat}>Смотреть полный каталог</button>
                    </div>
                </div>

                <div className={style.collection}>

                <div className={style.titleItem}>Коллекции</div>

                    <Row className={style.rowCollection}>

                        <Col xs={{ span: 11, offset: 1 }} md={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }} className={style.colCollection}>
                            <div className={style.itemCollect}>
                                <h3>Деньги</h3>
                                <span>Мощная коллекция заряженных на успех</span>
                            </div>
                        </Col>

                        <Col xs={{ span: 11, offset: 1 }} md={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }} className={style.colCollection}>
                            <div className={style.itemCollect}>
                                <h3>Мотивация</h3>
                                <span>Мощная коллекция заряженных на успех</span>
                            </div>
                        </Col>

                        <Col xs={{ span: 11, offset: 1 }} md={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }} className={style.colCollection}>
                            <div className={style.itemCollect}>
                                <h3>Личности</h3>
                                <span>Мощная коллекция заряженных на успех</span>
                            </div>
                        </Col>

                    </Row>

                </div>

                <div className={style.stepsOrder}>
                    <div className={style.titleOrder}>Как оформить заказ</div>

                    <div className={style.stepLine}>
                        <Steps current={4} progressDot={customDot}>
                            <Step title="Выберите картину" description="В нашем каталоге большой выбор картин на любой вкус и интеръер" />
                            <Step title="Оформите заказ" description="Оформите заказ через корзину, указав контактные данные для связи" />
                            <Step title="Подтвердите отправку" description="Наш менеджер свяжется с вами для подтверждения заказа и возможной консультации" />
                            <Step title="Получите заказ на почте" description="Заказ отправляем в течении 1-5 дней Новой Почтой. Оплата заказа при получении или на карту" />
                        </Steps>
                    </div>
                </div>

                <div className={style.feedbackBlock}>
                    <div className={style.titleFeedback}>Отзывы</div>

                    <Carousel effect="fade">
                        <div> <img src={item4} className={style.carouselImg} alt=""/></div>
                        <div> <img src={item5} className={style.carouselImg} alt=""/></div>
                        <div> <img src={item4} className={style.carouselImg} alt=""/></div>
                        <div> <img src={item5} className={style.carouselImg} alt=""/></div>
                    </Carousel>
                </div>

                <div className={style.call}>
                    <div className={style.titleCallBack}>ХОТИТЕ РАЗРАБОТАТЬ КАРТИНУ ПО СВОЕМУ ДИЗАЙНУ?</div>
                    <div className={style.textCallBack}>Оставьте ваш номер телефона и наш менеджер перезвонит вам для консультации</div>
                    <div className={style.callField}>
                        <input type="text" className={style.phoneInp} placeholder="Введите номер телефона"  value={phone} onChange={ev => setPhone(ev.target.value)}/>
                        <button type="submit" className={style.phoneBtn}>Отправить</button>
                    </div>
                </div>

            </Content>
        </>
        );
    }

export default ContentCont;
