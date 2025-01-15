export interface ResponseDto<T> {
  message: string;
  data: T;
  statusCode: number;
}
