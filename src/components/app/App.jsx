import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as api from '../../api/api';
import * as actions from '../../store/actions/actions';
import RootRoutes from '../routes';
import Loading from '../loading/Loading';

function App() {
  const dispatch = useDispatch();
  const { categoryId, loading } = useSelector((state) => state);

  useEffect(() => {
    const Get_Data = async () => {
      const category = await api.Get_Category();
      const cats = await api.Get_Cats(categoryId);

      dispatch(actions.actions_category(category));
      dispatch(actions.actions_cats(cats));
      dispatch(actions.actionLoading(false));
    };

    Get_Data();
  }, [categoryId, dispatch]);

  if (loading) return <Loading />;

  return <RootRoutes />;
}

export default App;
