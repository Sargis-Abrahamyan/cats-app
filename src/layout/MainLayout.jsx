import Category from '../components/category';

const MainLayout = ({ children }) => {
  return (
    <>
      <nav>
        <Category />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
