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
