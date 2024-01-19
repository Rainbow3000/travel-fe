import { React, useEffect, useState } from 'react';
import './productList.scss';
import Product from '../product/Product';
import { fetchProducts } from '../../store/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { filterProduct } from '../../store/slice/productSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';
const ProductList = () => {
	const dispatch = useDispatch();
	const [categorys, setCategorys] = useState([]);
	const { listProducts } = useSelector((state) => state.product);
	const [indexSort, setIndexSort] = useState(0);
	const getCategorys = async () => {
		try {
			const response = await axios.get('http://localhost:5500/api/category');
			setCategorys(response.data);
		} catch (error) {}
	};

	useEffect(() => {
		dispatch(fetchProducts());
		getCategorys();
	}, [dispatch]);
	return (
		<div class='py-3 py-md-5 bg-light'>
			<div class='container'>
				<div class='row'>
					<div class='col-md-12'>
						<h4 class='mb-4'>SẢN PHẨM</h4>
					</div>

					{listProducts &&
						listProducts.map((item) => {
							return (
								<div class='col-md-3'>
									<div class='product-card'>
										<div class='product-card-img'>
											<label class='stock bg-success'>MỚI</label>
											<img height={220} src={item.image} alt='Laptop' />
										</div>
										<div class='product-card-body'>
											<h5 class='product-name'>
												<span className='prod-price'>{item.name}</span>
											</h5>
											<div>
												<div>
													<span style={{ color: 'red' }} class='selling-price'>
														{item.price.toLocaleString('it-IT', {
															style: 'currency',
															currency: 'VND'
														})}
													</span>
												</div>
												<div>
													<span class='original-price'>
														{item.priceOld.toLocaleString('it-IT', {
															style: 'currency',
															currency: 'VND'
														})}
													</span>
												</div>
											</div>
											<div
												class='mt-2'
												style={{ display: 'flex', justifyContent: 'space-between' }}
											>
												<a href='' class='btn btn1'>
													{' '}
													<i class='fa fa-heart'></i>{' '}
												</a>
												<Link to={`/single/${item._id}`}>
													<span href='' class='btn btn1'>
														{' '}
														Chi tiết{' '}
													</span>
												</Link>
											</div>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default ProductList;
