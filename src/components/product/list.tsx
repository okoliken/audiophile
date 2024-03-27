import styled from "styled-components";
import { FlexItem } from "../../styles/reuseables.styled";
import { useShortner } from "../../hooks/shorten-words";


type ListProps = {
  children: React.ReactNode;
  product_image: string;
  price: number;
  product_name: string;
};

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
      object-fit: contain;
      border-radius: 8px;
    }

    span {
      font-weight: 700;
      font-size: 15px;
    }
  }
`;

export const List = ({
  children,
  product_image,
  product_name,
  price,
}: ListProps) => {

  const { shortenProductName } = useShortner()

  function formatNumberWithCommas(number: number) {
    return <>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</>;
  }
  
  return (
    <>
      <ListItem>
        <FlexItem>
          <div className="img-bg">
            <img loading="lazy" src={product_image}
              alt={shortenProductName(product_name)} />
          </div>
          <div>
            <h5>{shortenProductName(product_name)}</h5>
            <span>$ {formatNumberWithCommas(price)}</span>
          </div>
        </FlexItem>

        <div>{children}</div>
      </ListItem>
    </>
  );
};
