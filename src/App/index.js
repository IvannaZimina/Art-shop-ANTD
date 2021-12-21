import style from './style.module.scss';
import "antd/dist/antd.css"
import { Routes, Route } from 'react-router-dom';

import HeaderCont from '../components/HeaderCont';
import FooterCont from '../components/FooterCont';
import ContentCont from '../components/ContentCont';

import Catalog from '../containers/CatalogPage';
import Benefits from '../containers/BenefitsPage';
import Reviews from '../containers/ReviewsPage';
import Feedback from '../containers/FeedbackPage';

import { Layout} from 'antd';

function App() {

  return (
    <>
      <Layout>

        <HeaderCont />

        <Routes>
          <Route exac path='/' />
          <Route exac path='/catalog' element={<Catalog />} />
          <Route exac path='/benefits' element={<Benefits />} />
          <Route exac path='/reviews' element={<Reviews />} />
          <Route exac path='/feedback' element={<Feedback />} />
        </Routes>

        <ContentCont />

        <FooterCont />
      </Layout>
    </>
  );
}

export default App;
