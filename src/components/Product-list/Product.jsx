import styled from '@emotion/styled';

const Product = ({ price, title, img, description }) => {
  return (
    <>
      <ProductRoot>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ImageWrapper>
          <img src={img} alt={title} />
        </ImageWrapper>
        <Price>{price}</Price>
      </ProductRoot>
      ;
    </>
  );
};

const ImageWrapper = styled('div')`
  height: 200px;
  width: 200px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const ProductRoot = styled('div')`
  display: flex;
  border: 2px solid black;
  flex-direction: column;
  gap: 5px;
`;

const Price = styled('button')`
  color: black;
  background-color: white;
`;

const Description = styled('p')`
  color: black;
`;

const Title = styled('span')`
  display: block;
  color: black;
`;

export default Product;
