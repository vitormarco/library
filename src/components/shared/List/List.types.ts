export interface IListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export interface IListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode | React.ReactNode[];
}
