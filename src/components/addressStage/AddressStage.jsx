import React from 'react'
import './addressStage.scss'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const AddressStage = ({checkoutStep,addressStep}) => {
  return (
      <div className="address-stage">
          <div>
              <span>{
                  addressStep === "address" ? <CheckCircleOutlineIcon style={{ color: 'green', fontSize: 30 }} /> : <HighlightOffIcon style={{ color: 'red', fontSize: 30 }} />
                }</span>
              <span>Giỏ Hàng</span>
          </div>
          <div className="address-line"></div>
          <div>
              <span>{
                  checkoutStep === "payment" ? <CheckCircleOutlineIcon style={{ color: 'green', fontSize: 30 }} /> : <HighlightOffIcon style={{ color: 'red', fontSize: 30 }} />
        }</span>
              <span>Địa Chỉ</span>
          </div>
          <div className="address-line"></div>
          <div>
              <span><HighlightOffIcon style={{ color: 'red', fontSize: 30 }} /></span>
              <span>Thanh Toán</span>
          </div>
      </div>
  )
}

export default AddressStage