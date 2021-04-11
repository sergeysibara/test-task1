import { generateString } from 'utils/stringUtils';
import { AppThunk } from 'store/store';
import { storeActions, selectListSize } from './slice';

let idCounter = 0;
let canCreate = true;

export function create(): AppThunk {
  return (dispatch) => {
    if (canCreate) {
      canCreate = false;
      setTimeout(() => {
        canCreate = true;
      }, 5000);

      const str = generateString(10);
      idCounter++;
      dispatch(storeActions.addItem({ id: idCounter, text: str }));
    }
  };
}

export function remove(): AppThunk {
  return (dispatch, getState) => {
    const listSize = selectListSize(getState());
    const index = Math.floor(Math.random() * listSize);
    dispatch(storeActions.removeByIndex(index));
  };
}
