import React from 'react'
import './filterproduct.scss'
import {filterProduct} from '../../store/slice/productSlice'; 
import {useDispatch} from 'react-redux'



const colors = [
  'Đỏ',
  'Xanh lá',
  'Xanh dương',
  'Xám',
  'Trắng',
  'Cam',
  'Hồng',
  'Đen',
  'Vàng',
  'Tím'
]


const FilterProduct = () => {
  const dispatch = useDispatch();   
  const handleFilterColor = (value)=>{
      dispatch(filterProduct({type:'color',value}))
  }
  const handleFilterPrice = (value) => {
      dispatch(filterProduct({type:'price',value}))
  }

  return (
    <div className='filter-product-container'>
          <div className='filter-product-type'>
            <div>
                <label for="colors">Màu:</label>
                <select onChange={e=>handleFilterColor(e.target.value)} id='colors'>
                      <option value='' >Mặc định</option>
                      {
                        colors.map(item=>{
                          return <option>{item}</option>
                        })
                      }
                </select>
            </div>
            <div>
                <label for="Price">Giá:</label>
                <select onChange={e =>handleFilterPrice(e.target.value)}>
                      <option value='' >Mặc định</option>
                      <option>Cao nhất</option>
                      <option>Thấp nhất</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default FilterProduct