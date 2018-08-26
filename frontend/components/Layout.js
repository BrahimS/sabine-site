import Header from './Header';
import Footer from './Footer';
import PostIndex from './PostIndex';

const layoutStyle = {
  margin: 20,
  padding: 20
};

const mainLayout = {
  display: 'grid',
  gridTemplateColumns: '70% 30%'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header mainNav={props.mainNav} />
    <main style={mainLayout}>
    <section className="content">{props.children}</section>
      {/* <aside>{props.index && <PostIndex />}</aside> */}
    </main>
    <Footer />
  </div>
);

Layout.defaultProps = {
  index: true
};

export default Layout;
