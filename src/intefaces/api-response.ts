export interface ApiResponse<T> {
  status: number;
  data?: T[] | T  | any;
  message?: string;
}
  