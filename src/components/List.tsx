import { ListGroup, ListGroupItem } from 'reactstrap';
import { ITestTaskItem } from 'features/test-task/slice';

interface IListProps {
  items: ITestTaskItem[];
}

export function List({ items }: IListProps) {
  return (
    <ListGroup>
      {
        items.map((item) => {
          return <ListGroupItem key={item.id}>{item.text}</ListGroupItem>;
        })
      }
    </ListGroup>
  );
}
