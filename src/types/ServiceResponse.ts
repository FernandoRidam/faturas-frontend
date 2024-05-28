export interface ServiceResponse<T> {
  message: string;
  result: T | false;
};

export interface ServicePagedResponse<T> {
  message: string;
  page?: number;
  total?: number;
  results: Array<T> | false;
};
