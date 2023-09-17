import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GET_CATS } from "../../../store/constants/constants";
import { Get_Cats } from "../../../api/api";

export function UseList() {
  const dispatch = useDispatch();
  const { cats, categoryId } = useSelector(state => state);

  const handelAddCats = useCallback(async () => {
    const newCats = await Get_Cats(categoryId);
    dispatch({ type: GET_CATS, payload: newCats });
  }, [categoryId, dispatch]);

  return useMemo(() => ({
    cats,
    handelAddCats
  }),
    [cats, handelAddCats]
  );
}

