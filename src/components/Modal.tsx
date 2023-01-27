import React, { useState } from "react";
import { Button, Image, Modal, Space, Typography } from "antd";
import { RootObject } from "../../models/newsModel";

interface Modal {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  author: string;
  publishedAt: Date;
}
const { Text, Link } = Typography;

const Modals: React.FC<Modal> = ({ title, description, url, author, urlToImage, publishedAt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        News Detail
      </Button>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Space direction="vertical">
          <Typography.Text>{author}</Typography.Text>
          <Text>{description}</Text>
          <Image width={470} src={urlToImage} />
          <Text>{publishedAt.toString()}</Text>
          <Link strong href={url} target="_blank">
            More
          </Link>
        </Space>
      </Modal>
    </>
  );
};

export default Modals;
// import React from "react";
// import { Space, Typography } from "antd";

// const { Text, Link } = Typography;

// const App: React.FC = () => (
//   <Space direction="vertical">
//     <Text>Ant Design (default)</Text>
//     <Text type="secondary">Ant Design (secondary)</Text>
//     <Text type="success">Ant Design (success)</Text>
//     <Text type="warning">Ant Design (warning)</Text>
//     <Text type="danger">Ant Design (danger)</Text>
//     <Text disabled>Ant Design (disabled)</Text>
//     <Text mark>Ant Design (mark)</Text>
//     <Text code>Ant Design (code)</Text>
//     <Text keyboard>Ant Design (keyboard)</Text>
//     <Text underline>Ant Design (underline)</Text>
//     <Text delete>Ant Design (delete)</Text>
//     <Text strong>Ant Design (strong)</Text>
//     <Text italic>Ant Design (italic)</Text>
//   </Space>
// );
