import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h4 className="footer-heading">STORE</h4>
                                <div className="footer-underline"></div>
                                <p>
                                    <b>Victoriatour</b> has now expanded its network with many representative offices throughout Vietnam and the world. We have seasoned, creative and dedicated employees who strive to provide our customers with the
                                    best services.
                                </p>
                                <div className="">
                                    <p>  Hotline: 098 522 25 01</p>
                                    <p>Office: Room 0414,Block Ruby 03, Gold Mark city, Bac Tu Liem, Ha Noi, Viet Nam</p>
                                    <p>Email: info@Travelin.com</p>
                                    <p>Website: victoriatour.com.vn</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h4 className="footer-heading">Categories</h4>
                                <div className="footer-underline"></div>
                                <div className="mb-2"><a href="" className="text-white">About Us</a></div>
                                <div className="mb-2"><a href="" className="text-white">Destinations</a></div>
                                <div className="mb-2"><a href="" className="text-white">Privacy Policy</a></div>
                                <div className="mb-2"><a href="" className="text-white">Terms & Conditions</a></div>
                                <div className="mb-2"><a href="" className="text-white">Customer Service</a></div>
                                <div className="mb-2"><a href="" className="text-white">Return Policy</a></div>

                            </div>
                            <div className="col-md-3">
                                <h4 className="footer-heading">Tour</h4>
                                <div className="footer-underline"></div>

                                <div className="mb-2"><a href="" className="text-white">VietNam</a></div>
                                <div className="mb-2"><a href="" className="text-white">Laos</a></div>
                                <div className="mb-2"><a href="" className="text-white">ThaiLan</a></div>
                                <div className="mb-2"><a href="" className="text-white">Myanmar</a></div>
                                <div className="mb-2"><a href="" className="text-white">Cambodia</a></div>
                                <div className="mb-2"><a href="" className="text-white">Orther</a></div>
                            </div>
                            <div className="col-md-3">
                                <h4 className="footer-heading">Newsletter</h4>
                                <div className="footer-underline"></div>
                                <div className="mb-2">
                                    <p>Tham gia cộng đồng của chúng tôi với hơn 200,000 độc giả toàn cầu nhận được những email đầy đủ thông tin về tin tức, khuyến mãi và những điều tuyệt vời khác.</p>
                                    <form action="" className='form-submit'>
                                        <input className='email' type="email" id="email" name="email" placeholder='E-Mail' />
                                        <input className='submit' type="submit" value="Submit" />
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer