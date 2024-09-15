import RootRoutes from './components/routes';
import Loading from './components/loading';
import { useGetData } from './hooks/useGetData';
import MainLayout from './layout/MainLayout';

const App = () => {
  const { loading } = useGetData();

  if (loading) return <Loading />;

  return (
    <MainLayout>
      <RootRoutes />
    </MainLayout>
  );
};

export default App;
