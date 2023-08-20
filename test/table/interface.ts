export type TsortDirection = 'asc' | 'desc';
export interface ITableColumn<T, K extends keyof T> {
  id: string;
  label: string;
  width?: number;
  key?: K;
  align?: 'right';
  sortDirection?: TsortDirection;
  render?: (value: T, i: number) => React.ReactNode;
  editableField?: (value: T, i: number) => React.ReactNode;
}
