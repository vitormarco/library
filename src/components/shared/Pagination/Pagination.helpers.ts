import { IGetPagesDTO } from './Pagination.types';

export const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
};

export const getLastPage = (totalRegisters: number, itemsPerPage: number) => {
  return Math.ceil(totalRegisters / itemsPerPage);
};

export const getSibling = (currentPage: number, lastPage: number) => {
  if (currentPage < 5 || lastPage - 3 <= currentPage) {
    return 3;
  }

  return 1;
};

export const getPreviousPage = ({ currentPage, sibling }: IGetPagesDTO) => {
  if (currentPage > 1) {
    return generatePagesArray(currentPage - 1 - sibling, currentPage - 1);
  }

  return [];
};

export const getNextPages = ({ currentPage, lastPage, sibling }: IGetPagesDTO) => {
  if (currentPage < lastPage) {
    return generatePagesArray(currentPage, Math.min(currentPage + sibling, lastPage));
  }

  return [];
};
