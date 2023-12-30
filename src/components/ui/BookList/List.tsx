interface IListItemProps {
  children: React.ReactNode;
}

interface IListProps {
  children: React.ReactNode | React.ReactNode[];
}

const ListItem = ({ children }: IListItemProps) => <li>{children}</li>;

const List = ({ children }: IListProps) => <ul>{children}</ul>;

List.Item = ListItem;

export default List;
