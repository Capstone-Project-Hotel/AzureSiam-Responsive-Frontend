import { Button, Card, Modal } from "antd";
import { useState } from "react";
import styled from "styled-components";

const { Meta } = Card;

interface OthercardProps {
  src: string;
  title: string;
  description: string;
}

const Othercard: React.FC<OthercardProps> = ({ src, title, description }) => {
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
      <StyledCard
        hoverable
        onClick={showModal}
        cover={<img width={400} height={300} alt="example" src={src} />}
      >
        <Meta title={title} description={description} />
      </StyledCard>
      <Modal
        title="Standard Room"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Book Now
          </Button>,
        ]}
      >
        <div className="text-body mobile:text-h5-mobile">
          Escape to tranquility in our Standard Rooms at Azuresiam Hotel and
          Spa, where modern comfort meets timeless charm. Revel in plush
          bedding, cityscape views, and sleek bathrooms with premium amenities.
          Stay connected with complimentary Wi-Fi and a dedicated workspace.
          Indulge in the convenience of in-room dining, enjoying delectable
          meals at your leisure. Our attentive staff ensures a seamless stay,
          and as a guest, you have exclusive access to our spa and wellness
          facilities. Book your stay for a perfect blend of elegance and
          relaxation at Azuresiam Hotel and Spa, where every moment is an
          invitation to tranquility.
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </Modal>
    </>
  );
};

const StyledCard = styled(Card)`
  max-width: 400px;
  height: 460px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  img {
    border-radius: 2px !important;
  }
  .ant-card-meta-title {
    font-size: 30px;
  }
  .ant-card-meta-description {
    font-size: 14px;
  }

  @media screen and (max-width: 393px) {
    max-width: 150px;
    height: 230px;

    img {
      width: 150px;
      height: 112.5px;
    }
    .ant-card-meta-title {
      font-size: 12px;
    }
    .ant-card-meta-description {
      font-size: 6px;
    }
  }
`;

export default Othercard;
