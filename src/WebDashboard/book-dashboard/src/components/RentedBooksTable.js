/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react';
import { Table, Divider, Tag, Button } from 'antd';
import imgId from './bookCard';
const { Column, ColumnGroup } = Table;

const RentedBooksTable = ( { data, rentId } ) => {
  

  
  const [ returnUser, setReturnUser ] = useState([]);

  var f=Function;
  useEffect(() => {
    const getBooks = async () => {
        const response = await fetch("https://bookrentalapi20191216080922.azurewebsites.net/UserOperations/GetActualUser");
        const jsonResponse = await response.json();
        //window.alert('aa');
        console.log(jsonResponse.data, 'working api user');
        setReturnUser(jsonResponse.data);
    };

    getBooks();
}, []);



    return (
        <Table className="bg-near-white b" dataSource={data} rowKey={record => record.book.id} pagination={false}>
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
            <a onClick={async ()=>{

              var book = data[0].book;
              window.alert(`1  ${JSON.stringify( book)}`);
              
               var url=`https://bookrentalapi20191216080922.azurewebsites.net/UserOperations/UnRentBookCurrentUser/${book.id}`;
              var res= await fetch(url,
                {
                  method: 'post',
                  headers: {
                    'Content-Type': 'text/plain',
                  },
                });
              var result=(await res.text()).toString();
              var rented=(result === "true");
              if(rented){
                window.alert("You've removed this book.");
              }
              else{
                window.alert("Remove failed!"); // TODO: see if it is not already rented
              }
    
          }}>Return Book</a>
        </span>
      )}
    />
      </ColumnGroup>
      
      
    
    
  </Table>
    )
}
  export default RentedBooksTable;