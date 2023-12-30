import { IListItemProps, IListProps } from './List.types';

const ListItem = ({ children, className, ...rest }: IListItemProps) => (
  <li className={className} {...rest}>
    {children}
  </li>
);

const List = ({ children, className }: IListProps) => <ul className={className}>{children}</ul>;

List.Item = ListItem;

export default List;
