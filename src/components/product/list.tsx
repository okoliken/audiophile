import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FlexItem } from '../../styles/reuseables.styled'
type ListProps = {
  children: React.ReactNode;
};

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 20px 0;
  h5 {
    font-size: 15px;
    line-height: 25px;
  }

  span {
    font-size: 14px;
    opacity: 0.5;
    font-weight: 700;
  }
  .img-bg {
    background-color: #f1f1f1;
    width: 68px;
    height: 68px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 36.19px;
      height: 40px;
      border-radius: 8px;
    }

    span {
      font-weight: 700;
      font-size: 15px;
    }
  }
`;


export const List = ({ children }: ListProps) => {
  return (
    <>
      <ListItem>
        <FlexItem>
          <div className="img-bg">
            <LazyLoadImage
              effect="blur"
              src="http://via.placeholder.com/640x360"
              alt="product image"
            />
          </div>
          <div>
            <h5>XX99 MK II</h5>
            <span>$ 2,999</span>
          </div>
        </FlexItem>

        <div>{children}</div>
      </ListItem>
    </>
  );
};
