import styled from '@emotion/styled';

const Product = ({ price, title, img, description, size }) => {
  return (
    <>
      <ProductRoot>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ImageWrapper>
          <img src={img} alt={title} />
        </ImageWrapper>
        <Price>{price}</Price>
        <SizeContainer>
          {size.map((item, index) => {
            return <Size disabled={true} key={index}>{item}</Size>;
          })}
        </SizeContainer>
      </ProductRoot>
    </>
  );
};

const Size =
  styled('button') <
  { disabled: boolean } >
  `
${({ disabled }) => (disabled ? `cursor:not-allowed` : `cursor:pointer`)}
  width: 100%;
`;

const SizeContainer = styled('div')`
  display: flex;
  align-items: center;
`;

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
  background-color: white;
  font-family: 'Montserrat';
  font-size: 20px;
  color: violet;
  background-color: gray;
`;

const Description = styled('p')`
  font-family: 'Montserrat';
  font-size: 24px;
`;

const Title = styled('span')`
  font-family: 'Montserrat';
  display: block;
`;

export default Product;
