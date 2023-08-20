import React from 'react';
import { Table } from './table';
import { ITableColumn } from './interface';

export interface IUSerData {
  name: string;
  email: string;
  status: 'active' | 'inactive';
  created_at: string;
  last_login: string;
  group: string;
  listing: number;
  generations: number;
}

const options = [
  {
    label: 'Group A',
    value: 'Group A',
    count: 4,
  },
  {
    label: 'Group B',
    value: 'Group B',
    count: 4,
  },
];

const groupData = [
  'yonathan@gmail.com',
  'warhol@gmail.com',
  ' yor@cz.com',
  'dion@gmail.com',
  'john@gmail.com',
  'ndy@gmail.com',
  'gilbert@gmail.com',
  'yono@gmail.com',
  'mcmohan@gmail.com',
  'ruly@gmail.com',
  'harry@gmail.com',
  'ema@gmail.com',
];

const columns: ITableColumn<IUSerData, keyof IUSerData>[] = [
  {
    id: 'name',
    label: 'Name',
    key: 'name',
  },
  {
    id: 'email',
    label: 'Email',
    key: 'email',
  },
  {
    id: 'created_at',
    label: 'Created',
    key: 'created_at',
    sortDirection: 'asc',
  },

  {
    id: 'last_login',
    label: 'Last Login',
    key: 'last_login',
    sortDirection: 'asc',
  },
  {
    id: 'group',
    label: 'Group',
    key: 'group',
  },
  {
    id: 'listing',
    label: 'Listing',
    key: 'listing',
    sortDirection: 'asc',
  },
  {
    id: 'generations',
    label: 'Generations',
    key: 'generations',
    sortDirection: 'asc',
  },
];

const rows: IUSerData[] = [
  {
    name: 'Jhon',
    email: 'jhon@gmail.com',
    listing: 10000000,
    created_at: '30 Jun 2023',
    status: 'active',
    last_login: '13 Jul 2023',
    group: 'Group A',
    generations: 1000000,
  },
  {
    name: 'Jhon',
    email: 'jhon@gmail.com',
    listing: 10000000,
    created_at: '30 Jun 2023',
    status: 'active',
    last_login: '13 Jul 2023',
    group: 'Group A',
    generations: 1000000,
  },
  {
    name: 'Jhon',
    email: 'jhon@gmail.com',
    listing: 10000000,
    created_at: '30 Jun 2023',
    status: 'active',
    last_login: '13 Jul 2023',
    group: 'Group A',
    generations: 1000000,
  },
  {
    name: 'Jhon',
    email: 'jhon@gmail.com',
    listing: 10000000,
    created_at: '30 Jun 2023',
    status: 'active',
    last_login: '13 Jul 2023',
    group: 'Group A',
    generations: 1000000,
  },
  {
    name: 'Jhon',
    email: 'jhon@gmail.com',
    listing: 10000000,
    created_at: '30 Jun 2023',
    status: 'active',
    last_login: '13 Jul 2023',
    group: 'Group A',
    generations: 1000000,
  },
  {
    name: 'Jhon',
    email: 'jhon@gmail.com',
    listing: 10000000,
    created_at: '30 Jun 2023',
    status: 'active',
    last_login: '13 Jul 2023',
    group: 'Group A',
    generations: 1000000,
  },
  {
    name: 'Jhon',
    email: 'jhon@gmail.com',
    listing: 10000000,
    created_at: '30 Jun 2023',
    status: 'active',
    last_login: '13 Jul 2023',
    group: 'Group A',
    generations: 1000000,
  },
  {
    name: 'Jhon',
    email: 'jhon@gmail.com',
    listing: 10000000,
    created_at: '30 Jun 2023',
    status: 'active',
    last_login: '13 Jul 2023',
    group: 'Group A',
    generations: 1000000,
  },
  {
    name: 'Jhon',
    email: 'jhon@gmail.com',
    listing: 10000000,
    created_at: '30 Jun 2023',
    status: 'active',
    last_login: '13 Jul 2023',
    group: 'Group A',
    generations: 1000000,
  },
  {
    name: 'Jhon',
    email: 'jhon@gmail.com',
    listing: 10000000,
    created_at: '30 Jun 2023',
    status: 'active',
    last_login: '13 Jul 2023',
    group: 'Group A',
    generations: 1000000,
  },
];

export const BasicTable = () => {
  return <Table tableTitle="Users" columns={columns} rows={rows} />;
};

export const TablePaging = () => {
  return <Table tableTitle="Users" columns={columns} rows={rows} pagination />;
};
