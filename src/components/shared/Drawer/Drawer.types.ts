export interface IDrawerProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen?: boolean;
  titleHeader?: string | React.ReactNode;
}
