import React, { useState, useEffect } from 'react';
import { Layout } from '../../../components/Layout';
import { ProductCard } from '../../../components/Product';

const Product = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('../../../api/productsController/getProducts');
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false)
    }
  };

  return (
    <Layout>
      <ProductCard 
        data={data} 
        loading={loading} 
      />
    </Layout>
  )
}

export default Product;
