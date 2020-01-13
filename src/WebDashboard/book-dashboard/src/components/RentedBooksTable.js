import React from 'react';
import { Table, Divider, Tag, Button } from 'antd';

const { Column, ColumnGroup } = Table;

const RentedBooksTable = ( { data } ) => {
  
  const [ returnBook, setReturnBook ] = useState([]);
  
  useEffect(() => {
    const getBooks = async () => {
        const response = await fetch("https://bookrentalapi20191216080922.azurewebsites.net/Book/GetBooks");
        const jsonResponse = await response.json();
        // console.log(jsonResponse.books, 'working api bookcontext');
        setReturnBook(jsonResponse.books);
    };

    getBooks();
}, []);
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
          <a onClick={async ()=>{
            window.alert("Removing" + {book.id});
            var url='https://bookrentalapi20191216080922.azurewebsites.net/UserOperations/RentBook/' +book.id;
            var res= await fetch(url,
              {
                method: 'post',
                headers: {
                  'Content-Type': 'text/plain',
                },
              });
              var data=(await res.text()).toString();
              var rented=(data === "true");
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