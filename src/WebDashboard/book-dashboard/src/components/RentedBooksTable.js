import React from 'react';
import { Table, Divider, Tag, Button } from 'antd';

const { Column, ColumnGroup } = Table;

const RentedBooksTable = ( { data } ) => {

    return (
        <Table dataSource={data}>
        <ColumnGroup title="Rented Books">

        <Column title="Author" dataIndex="authors[0].name" key="authors.name" />
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Description" dataIndex="description" key="description" />
        <Column title="ID" dataIndex="id" key="id" />
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