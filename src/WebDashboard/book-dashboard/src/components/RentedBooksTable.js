import React from 'react';
import { Table, Divider, Tag, Button } from 'antd';

const { Column, ColumnGroup } = Table;

const RentedBooksTable = ( { data } ) => {

    return (
        <Table dataSource={data} rowKey={record => record.book.id}>
        <ColumnGroup title="Rented Books">
        <Column title="Author" dataIndex="book.authors[0].name" key="authors.name" />
        <Column title="Title" dataIndex="book.title" key="title" />
        <Column title="Description" dataIndex="book.description" key="description" />
        <Column title="ID" dataIndex="book.id" key="book.id" />
        <Column
      title="Action"
      key="action"
      render={() => (
        <span>
          <a>Return Book</a>
        </span>
      )}
    />
      </ColumnGroup>
      
      
    
    
  </Table>
    )
}
  export default RentedBooksTable;