import { Button } from 'reactstrap';
import { List } from 'components/List';
import { useAppDispatch, useAppSelector } from 'store/reduxAppHooks';
import { selectList } from './slice';
import { create, remove } from './actions';

export function Tab1Content() {
  const items = useAppSelector(selectList);
  const dispatch = useAppDispatch();
  return (
    <>
      <List items={items} />
      <br />
      <Button onClick={() => dispatch(create())}>Add</Button>
      {' '}
      <Button onClick={() => dispatch(remove())}>Remove Random</Button>
    </>
  );
}
