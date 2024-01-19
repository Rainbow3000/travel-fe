import React, { useEffect } from 'react';
import './category.scss';
import { category } from '../../data';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Category = () => {
	const [categorys, setCategorys] = useState([]);
	const getCategorys = async () => {
		try {
			const response = await axios.get('http://localhost:5500/api/category');
			setCategorys(response.data);
		} catch (error) {}
	};

	useEffect(() => {
		getCategorys();
	}, []);

	return (
		<div class='py-3 py-md-5 bg-light cate-container'>
			<div class='container'>
				<div class='col-md-12'>
					<h4 class='mb-4'>DANH MỤC</h4>
				</div>
				<div class='row'>
					{categorys &&
						categorys.map((item) => {
							return (
								<div class='col-6 col-md-3'>
									<Link to={`/productbycategory/${item._id}`}>
										<div class='category-card'>
											<a href=''>
												<div class='category-card-img'>
													<img
														height={220}
														style={{ objectFit: 'contain' }}
														src={item.image}
														class='w-100'
														alt='Laptop'
													/>
												</div>
												<div class='category-card-body'>
													<h5>{item.name}</h5>
												</div>
											</a>
										</div>
									</Link>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Category;
