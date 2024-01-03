export interface ITextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText: string;
  hasError?: boolean;
  visuallyHidden?: boolean;
}
