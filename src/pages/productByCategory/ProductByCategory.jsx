
import './productbycategory.scss'
import '../../components/productList/productList.scss'
import {React,useEffect, useState} from 'react'
import { fetchProductsByCategory } from '../../store/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';

const ProductByCategory = () => {
  const dispatch = useDispatch();
  const {listProductsByCategory} = useSelector(state => state.product); 
  const categoryId = useLocation().pathname.split('/')[2]; 
  useEffect(()=>{
    dispatch(fetchProductsByCategory(categoryId)); 
  },[dispatch])
  return (
    <div className='prod-cate-container'>
        <div className='prod-list-cate'>
          {
            listProductsByCategory?.length > 0  ? (
              <div class="py-3 py-md-5 bg-light">
              <div class="container">
                  <div class="row">
                  <div class="col-md-12">
                          <h4 class="mb-4">SẢN PHẨM TRONG DANH MỤC</h4>
                  </div>

                    {
                      listProductsByCategory && listProductsByCategory.map(item=>{
                        return (
                          <div class="col-md-3">
                              <div class="product-card">
                                  <div class="product-card-img">
                                      <label class="stock bg-success">MỚI</label>
                                      <img height={220} src={item.image} alt="Laptop" />
                                  </div>
                                  <div class="product-card-body">
                                      
                                      <h5 class="product-name">
                                          <span className='prod-price'>
                                              {item.name}
                                          </span>                              
                                      </h5>
                                      <div>
                                        <div>
                                          <span style={{color:'red'}} class="selling-price">{item.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                                        </div>
                                        <div>
                                          <span class="original-price">{item.priceOld.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                                        </div>
                                      </div>
                                      <div class="mt-2" style={{display:'flex',justifyContent:'space-between'}}>
                                        
                                          <a href="" class="btn btn1"> <i class="fa fa-heart"></i> </a>
                                          <Link to={`/single/${item._id}`}>
                                            <span href="" class="btn btn1"> Chi tiết </span>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        )
                      })
                    }
                  </div>
              </div>
            </div>

            ):(
              <div style={{margin:'0 auto',fontWeight:'bold'}}>DANH MỤC NÀY CHƯA CÓ SẢN PHẨM</div>
            )
          }
        </div>
    </div>
  )
}

export default ProductByCategory