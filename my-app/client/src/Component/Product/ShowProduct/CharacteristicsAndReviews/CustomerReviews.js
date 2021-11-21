import React from "react";
import "antd/dist/antd.css";
import { List, Avatar, Rate, Comment, Empty } from "antd";

let pass = false;

const OpenAdminFunctions = (params) => {
  if (pass) {
    return <a href={`maito: ${params}`}>{params}</a>;
  }
};

const ListData = (params) => {
  let arr = [];

  if (params.length > 0) {
    for (const key in params) {
      let data = params[key];
      arr.push({
        author: data.userName,
        avatar: data.userName[0],
        email: data.userEmail,
        date: data.commentDate,
        comment: data.comment,
        rating: data.rating,
      });
    }
  }
  return arr;
};

function CustomerReviews(props) {
  const comments = props.comments

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{ pageSize: 3 }}
      dataSource={ListData(comments)}
      locale={{emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="нет отзывов"/>}}
      renderItem={(item) => (
        <Comment
          author={
            <h6>
              {item.author} {OpenAdminFunctions(item.email)}
            </h6>
          }
          avatar={<Avatar>{item.avatar}</Avatar>}
          content={<p>{item.comment}</p>}
          datetime={<span>{item.date}</span>}
          actions={[
            <Rate
              disabled
              defaultValue={item.rating}
              style={{ marginRight: "0" }}
            />,
          ]}
        />
      )}
    />
  );
}

export default CustomerReviews;
