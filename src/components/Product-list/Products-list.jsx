import styled from '@emotion/styled';
import Product from './Product.jsx';

const data = [

  {
    title: 'Nike',
    description: 'Off white',
    price: '5000 руб',
    img: 'https://gosneakers.ru/wa-data/public/shop/products/38/18/1838/images/7797/7797.440@2x.JPG',
    size: ['43','42','41','44','45']
  },
  {
    title: 'Nike',
    description: 'Off white',
    price: '5000 руб',
    img: 'https://gosneakers.ru/wa-data/public/shop/products/38/18/1838/images/7797/7797.440@2x.JPG',
    size: ['43','42','41','44','45']
  },
  {
    title: 'Nike',
    description: 'Off white',
    price: '5000 руб',
    img: 'https://gosneakers.ru/wa-data/public/shop/products/38/18/1838/images/7797/7797.440@2x.JPG',
    size: ['43','42','41','44','45']
  },
  // {
  //   title: 'Nike',
  //   description: 'Off white',
  //   price: '5000 руб',
  //   img: 'https://gosneakers.ru/wa-data/public/shop/products/38/18/1838/images/7797/7797.440@2x.JPG',
  // },
  // {
  //   title: 'Nike',
  //   description: 'Off white',
  //   price: '5000 руб',
  //   img: 'https://gosneakers.ru/wa-data/public/shop/products/38/18/1838/images/7797/7797.440@2x.JPG',
  // },
];

const ProductsList = () => {
  return (
    <ProductsListRoot>
      {data.map((item, index) => {
        const { description, img, price, title,size } = item;

        return <Product key={index} description={description} img={img} price={price} title={title} size={size}/>;
      })}
    </ProductsListRoot>
  );
};

const ProductsListRoot = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap:20px;
`;

export default ProductsList;
