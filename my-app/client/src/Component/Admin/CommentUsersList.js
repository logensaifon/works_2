import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Space, message } from "antd";
import { IconRiProductHuntLine } from "./ikon";
import { Link } from "react-router-dom";


const { Column, ColumnGroup } = Table;

const receiveComment = (method, url, body) => {
  return new Promise((resolve, reject)=>{
  const xhr = new XMLHttpRequest()

    const xhrOnload = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(xhr.response)
      } else {
        reject(xhr.statusText)
      }
    }

    xhr.open(method, url, true)
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
    xhr.onload = xhrOnload
    xhr.send(body)
  })
}

const onClickAddition = (params, setCommentCountstate, setCommentCountCountstate) => {
  let jsonstringify = JSON.stringify(params)
  receiveComment("put", `/updateproductcomments/${params.productId}`, jsonstringify).then((result)=>{
    message.success(result)

    if (result === "такой отзыв уже существует" || result === "отзыв добавлен к продукту") {
      receiveComment("delete", `/deletcomment/${params._id}`)

      receiveComment("get", "/receivecomment").then((result)=>{
        let jsonparse = JSON.parse(result)
        let arr = []
        
        jsonparse.forEach(element => {
          arr.push(Object.assign(
            element,
            {key: element._id}
          ))
        });
    
        setCommentCountstate(arr)
      })
    }
  })

  receiveComment("get", "/receivecommentcount").then((result)=>{

    setCommentCountCountstate(result)
  })

}

const onClickDelete = (params, setCommentCountstate, setCommentCountCountstate) => {
  receiveComment("delete", `/deletcomment/${params._id}`).then((result)=>{
    message.success("удален")

    receiveComment("get", "/receivecomment").then((result)=>{
      let jsonparse = JSON.parse(result)
      let arr = []
      
      jsonparse.forEach(element => {
        arr.push(Object.assign(
          element,
          {key: element._id}
        ))
      });
  
      setCommentCountstate(arr)
    })
  })

  receiveComment("get", "/receivecommentcount").then((result)=>{

    setCommentCountCountstate(result)
  })
}

function CommentUsersList(props) {
  const [commentCountstate, setCommentCountstate] = useState([])
  const [loadingState, setLoadingState] = useState(true)
  const setCommentCountCountstate = props.setCommentCountCountstate
  const buttonStyle = {
      all: "unset",
      overflow: "none",
      cursor: 'pointer',
  }
  let cleanupFunction = true


  useEffect(() => {
    setLoadingState(true)

    receiveComment("get", "/receivecomment").then((result)=>{
      
      if (cleanupFunction) {
        let jsonparse = JSON.parse(result)
        let arr = []
  
        jsonparse.forEach(element => {
          arr.push(Object.assign(
            element,
            {key: element._id}
            ))
          });

        setCommentCountstate(arr)
        setLoadingState(false)
      }
    })

    return ()=>{
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cleanupFunction = false
    }
  }, [])

  return (
    <Table dataSource={commentCountstate.reverse()} scroll={{ x: 700 }} loading={loadingState}>
      <ColumnGroup title="оставление комментарий" >
        <Column 
          title="продукт" 
          dataIndex="productId" 
          key="productId"  
          render={(Id, data) => (
            <Link to={`/ShowProduct?product=${data.productLinkProduct}&id=${Id}`}>
              <IconRiProductHuntLine size={40}/>
            </Link>
          )}
        />
        <Column title="Имя Фамилия" dataIndex="name" key="name" />
        <Column title="Эл. адрес" dataIndex="email" key="email" />
        <Column title="комментарий" dataIndex="comment" key="comment" />

        <Column
            title="разрешения"
            render={(data) => (
            <Space size="middle">
                <button style={buttonStyle} onClick={()=>{onClickAddition(data, setCommentCountstate, setCommentCountCountstate)}}>добавить</button>
                <button style={buttonStyle} onClick={()=>{onClickDelete(data, setCommentCountstate, setCommentCountCountstate)}}>удалить</button>
            </Space>
            )}
        />
      </ColumnGroup>
    </Table>
  );
}

export { receiveComment }
export default CommentUsersList;
