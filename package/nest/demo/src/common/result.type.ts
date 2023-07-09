import { Page } from './page.type';
interface IResult<T> {
  code: number;
  message: string;
  data?: T;
}
interface IResults<T> {
  code: number;
  message: string;
  data?: T[];
  page: Page;
}
