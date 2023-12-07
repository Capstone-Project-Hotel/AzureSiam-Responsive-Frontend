import { Card } from "antd";
import styled from "styled-components";

const { Meta } = Card;

interface OthercardProps {
  src: string;
  title: string;
  description: string;
}

const Othercard: React.FC<OthercardProps> = ({ src, title, description }) => {
  return (
    <StyledCard
      cover={<img width={400} height={300} alt="example" src={src} />}
    >
      <Meta title={title} description={description} />
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  max-width: 400px;
  height: 460px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
