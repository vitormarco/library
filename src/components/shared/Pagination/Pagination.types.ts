export interface IPaginationProps {
  totalCountRegisters: number;
  onChange: (page: number) => void;
  registersPerPage?: number;
  currentPage?: number;
}

export interface IGetPagesDTO {
  currentPage: number;
  lastPage: number;
  sibling: number;
}
