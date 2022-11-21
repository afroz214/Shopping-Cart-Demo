import React from 'react'
import "./demo.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaChevronDown, FaChevronRight, FaChevronLeft, FaSearch, FaFacebookMessenger, FaHeart, FaFilter, FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa"
import Laptop from "./laptop.png"
import { Table } from 'react-bootstrap'

const Demo = () => {

  return (
    <>
    <div style={{ background: "#8cc2fc38", fontFamily: "sans-serif", paddingBottom: "50px" }}>
      <div style={{ width: "80%", margin: "auto", padding: "20px 0px", display: "flex" }}>
        <button style={{ fontSize: "25px", fontWeight: "bold", padding: "5px 30px",
      background: "#00968896", color: "#fff", border: "none", borderRadius: "9px" }}>Logo</button>
        <input style={{ width: "40%", marginLeft: "20px", padding: "7px 5px", border: "1px solid #00968896", borderRadius: "10px", fontSize: "13px" }} className='text-center' type='text' placeholder='What are you looking here eg. freelancer, projects' />
        <button className='search' style={{ marginLeft: "10px", border: "none", background: "black", color: "#fff", borderRadius: "8px", fontSize: "18px" }}><FaSearch /></button>
       <div className='postDiv'> 
      <span style={{ fontWeight: "bold", margin: "0 20px", fontSize: "17px" }}>Post Project</span>
      <span style={{ fontWeight: "bold", fontSize: "17px" }}>Search Project</span>
      <FaFacebookMessenger style={{ margin: "0 20px", fontSize: "30px", color: "#00968896" }} />
      <FaHeart style={{ fontSize: "30px", color: "#00968896" }} />
      <span><img style={{ width: "50px", marginLeft: "20px" }} src={Laptop} /><FaChevronDown /></span>
      </div>
      </div>
      <div style={{ color: "#fff", }}>
        <p style={{ padding: "10px 0px 200px 150px", fontSize: "35px", background: "black" }}>My Orders</p>
        <div className='mainDiv' style={{ width: "80%", margin: "auto"}}>
          <div style={{ background: "#fffffff0", padding: "35px", marginTop: "-190px", borderRadius: "10px" }}>
            <button style={{ background: "none", border: "none", borderRight: "1px solid", marginRight: "15px", paddingRight: "15px" }}>
            <FaFilter />
              Filter By</button>
            <button className='filter' style={{ background: "black", color: "#fff" }}>All</button>
            <button className='filter' style={{ margin: "0px 30px" }}>Pending</button>
            <button className='filter'>In Progress</button>
            <button className='filter' style={{ margin: "0px 30px" }}>Cancelled</button>
            <button className='filter'>Filter By</button>
            <button className='filter' style={{ margin: "0px 30px" }}>Delivered</button>
            <div style={{ color: "black", marginTop: "20px" }}>
            <table>
            <thead>
              <tr >
                <th style={{ color: "#00968896", width: "120px", textAlign: "center", paddingBottom: "20px", paddingRight: "16px" }}>Date</th>
                <th style={{ width: "175px" }}></th>
                <th></th>
                <th style={{ width: "150px" }}></th>
                <th style={{ color: "#00968896", width: "145px", textAlign: "center", paddingBottom: "20px" }}>Status</th>
                <th style={{ color: "#00968896", textAlign: "center", paddingBottom: "20px" }}>Action</th>
                
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: "#fff" }}>
                <td style={{ fontWeight: "bold" }}>12 Aug, 2022</td>
                <td style={{ fontSize: "14px", display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "grey" }}>Freelancer and Order Id</span>
                  <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Theresa Webb</p>
                  <p>GKO341006234</p>
                </td>
                <td style={{ fontSize: "14px" }}>
                 <span style={{ color: "grey" }}> Project Details</span>
                  <p style={{ fontWeight: "bold", fontSize: "14px" }}>Lorem ipum dolor it amet, consectetur adipiscing elit. Nullum ullamcorper dui lorem proin eu.</p>
                <p style={{ marginBottom: "0px", color: "grey" }}>Price</p>
                <p style={{ fontSize: "20px", fontWeight: "bold", }}><span>₹ </span><text style={{ color: "#00968896" }}> 3000</text></p>
                </td>
                <td style={{ fontSize: "14px" }}>
                 <span style={{ color: "grey" }}> Delivery Time</span>
                <p style={{ fontWeight: "bold" }}>08 Days</p>
                <p style={{ color: "grey" }}>Time Left</p>
                <p style={{ fontWeight: "bold", color: "#00968854", fontSize: "16px" }}>00 : 00 : 00 : 00</p>
                </td>
                <td style={{ textAlign: "center" }}>
                  <button className='pendingBtn' style={{ color: "grey" }}>Pending</button>
                </td>
                <td style={{ fontSize: "14px", textAlign: "center" }}>
                  <p>View Details</p>
                  <p style={{ borderTop: "1px solid black", paddingTop: "15px" }}>Waiting for Client Payment</p>
                </td>
              </tr>
              <p></p>
              <tr style={{ background: "#fff" }}>
                <td style={{ fontWeight: "bold" }}>12 Aug, 2022</td>
                <td style={{ fontSize: "14px", display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "grey" }}>Freelancer and Order Id</span>
                  <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Cody Fisher</p>
                  <p>GKO341006234</p>
                </td>
                <td style={{ fontSize: "14px" }}>
                 <span style={{ color: "grey" }}> Project Details</span>
                  <p style={{ fontWeight: "bold", fontSize: "14px" }}>Lorem ipum dolor it amet, consectetur adipiscing elit. Nullum ullamcorper dui lorem proin eu.</p>
                <p style={{ marginBottom: "0px", color: "grey" }}>Price</p>
                <p style={{ fontSize: "20px", fontWeight: "bold", }}><span>₹ </span><text style={{ color: "#00968896" }}> 4200 <span> <button
                style={{
                  fontSize: "10px",
                  border: "none",
                  background: "#0080002b",
                  color: "green",
                  borderRadius: "4px"
                }}
                >Paid</button></span></text></p>
                </td>
                <td style={{ fontSize: "14px" }}>
                 <span style={{ color: "grey" }}> Delivery Time</span>
                <p style={{ fontWeight: "bold" }}>02 Days</p>
                <p style={{ color: "grey" }}>Time Left</p>
                <p style={{ fontWeight: "bold", color: "#df4b1d", fontSize: "16px" }}>2d : 12h : 34m : 19s</p>
                </td>
                <td style={{ textAlign: "center" }}>
                  <button style={{ background: "#fbd3da91", color: "#b61212ba" }} className='pendingBtn' >In progress</button>
                </td>
                <td style={{ fontSize: "14px", textAlign: "center" }}>
                  <p>View Details</p>
                  <p style={{ borderTop: "1px solid black", paddingTop: "15px" }}>Select</p>
                </td>
              </tr>
              <p></p>
              <tr style={{ background: "#fff" }}>
                <td style={{ fontWeight: "bold" }}>12 Aug, 2022</td>
                <td style={{ fontSize: "14px", display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "grey" }}>Freelancer and Order Id</span>
                  <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Arlene McCoy</p>
                  <p>GKO341006234</p>
                </td>
                <td style={{ fontSize: "14px" }}>
                 <span style={{ color: "grey" }}> Project Details</span>
                  <p style={{ fontWeight: "bold", fontSize: "14px" }}>Lorem ipum dolor it amet, consectetur adipiscing elit. Nullum ullamcorper dui lorem proin eu.</p>
                <p style={{ marginBottom: "0px", color: "grey" }}>Price</p>
                <p style={{ fontSize: "20px", fontWeight: "bold", }}><span>₹ </span><text style={{ color: "#00968896" }}> 2500 <span> <button
                style={{
                  fontSize: "10px",
                  border: "none",
                  background: "#0080002b",
                  color: "green",
                  borderRadius: "4px"
                }}
                >Paid</button></span></text></p>
                </td>
                <td style={{ fontSize: "14px" }}>
                 <span style={{ color: "grey" }}> Delivery Time</span>
                <p style={{ fontWeight: "bold" }}>05 Days</p>
                <p style={{ color: "grey" }}>Time Left</p>
                <p style={{ fontWeight: "bold", color: "#00800085", fontSize: "16px" }}>00 : 00 : 00 : 00</p>
                </td>
                <td style={{ textAlign: "center" }}>
                  <button style={{ background: "#0000ff21", color: "#0101c6" }} className='pendingBtn' >Delivered</button>
                </td>
                <td style={{ fontSize: "14px", textAlign: "center" }}>
                  <p>View Details</p>
                </td>
              </tr>
              
              <p></p>
              <tr style={{ background: "#fff" }}>
                <td style={{ fontWeight: "bold" }}>12 Aug, 2022</td>
                <td style={{ fontSize: "14px", display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "grey" }}>Freelancer and Order Id</span>
                  <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Devon Lane</p>
                  <p>GKO341006234</p>
                </td>
                <td style={{ fontSize: "14px" }}>
                 <span style={{ color: "grey" }}> Project Details</span>
                  <p style={{ fontWeight: "bold", fontSize: "14px" }}>Lorem ipum dolor it amet, consectetur adipiscing elit. Nullum ullamcorper dui lorem proin eu.</p>
                <p style={{ marginBottom: "0px", color: "grey" }}>Price</p>
                <p style={{ fontSize: "20px", fontWeight: "bold", }}><span>₹ </span><text style={{ color: "#00968896" }}> 1000 <span> <button
                style={{
                  fontSize: "10px",
                  border: "none",
                  background: "#0080002b",
                  color: "green",
                  borderRadius: "4px"
                }}
                >Paid</button></span></text></p>
                </td>
                <td style={{ fontSize: "14px" }}>
                 <span style={{ color: "grey" }}> Delivery Time</span>
                <p style={{ fontWeight: "bold" }}>10 Days</p>
                <p style={{ color: "grey" }}>Time Left</p>
                <p style={{ fontWeight: "bold", color: "rgb(255 150 150 / 54%)", fontSize: "16px" }}>00 : 00 : 00 : 00</p>
                </td>
                <td style={{ textAlign: "center" }}>
                  <button style={{ background: "#fbd3da91", color: "#b61212ba" }} className='pendingBtn' >Cancelled</button>
                </td>
                <td style={{ fontSize: "14px", textAlign: "center" }}>
                  <p>View Details</p>
                </td>
              </tr>
              <p></p>
              <tr style={{ background: "#fff" }}>
                <td style={{ fontWeight: "bold" }}>12 Aug, 2022</td>
                <td style={{ fontSize: "14px", display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "grey" }}>Freelancer and Order Id</span>
                  <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Guy Hawkins</p>
                  <p>GKO341006234</p>
                </td>
                <td style={{ fontSize: "14px" }}>
                 <span style={{ color: "grey" }}> Project Details</span>
                  <p style={{ fontWeight: "bold", fontSize: "14px" }}>Lorem ipum dolor it amet, consectetur adipiscing elit. Nullum ullamcorper dui lorem proin eu.</p>
                <p style={{ marginBottom: "0px", color: "grey" }}>Price</p>
                <p style={{ fontSize: "20px", fontWeight: "bold", }}><span>₹ </span><text style={{ color: "#00968896" }}> 8000 <span> <button
                style={{
                  fontSize: "10px",
                  border: "none",
                  background: "#0080002b",
                  color: "green",
                  borderRadius: "4px"
                }}
                >Paid</button></span></text></p>
                </td>
                <td style={{ fontSize: "14px" }}>
                 <span style={{ color: "grey" }}> Delivery Time</span>
                <p style={{ fontWeight: "bold" }}>10 Days</p>
                <p style={{ color: "grey" }}>Time Left</p>
                <p style={{ fontWeight: "bold", color: "#00800070", fontSize: "16px" }}>00 : 00 : 00 : 00</p>
                </td>
                <td style={{ textAlign: "center" }}>
                  <button style={{ background: "#00800045", color: "#0c5f0c" }} className='pendingBtn' >Completed</button>
                </td>
                <td style={{ fontSize: "14px", textAlign: "center" }}>
                  <p>View Details</p>
                </td>
              </tr>
              
            </tbody>
          </table>
          </div>
          <div>
        <div style={{ textAlign: "center", paddingTop: "40px" }}>
          <FaChevronLeft style={{ color: "black", marginRight: "20px" }} />
          <button className='paginationBtn'>1</button>
          <button className='paginationBtn' style={{ background: "rgba(0, 150, 136, 0.59)", color: "#fff" }}>2</button>
          <button className='paginationBtn'>3</button>
          <button className='paginationBtn'>4</button>
          <button className='paginationBtn'>5</button>
          <FaChevronRight style={{ color: "black", marginLeft: "20px" }} />
        </div>
      </div>
          </div>
          
        </div>
      </div>
    </div>
    <div className='footer'>
      <div>
        <button className='logo' style={{ fontSize: "25px", fontWeight: "bold", padding: "5px 30px",
      background: "#00968896", color: "#fff", border: "none", borderRadius: "9px" }}>Logo</button>
        <p style={{ fontWeight: "bold", marginTop: "20px", color: "grey" }}>1901 Thornridge Cir.<br />Shiloh, Hawali<br />81063</p>
      </div>
      <div>
        <p className='company'>Company</p>
        <p className='small_company'>About Us</p>
        <p className='small_company'>Career</p>
        <p className='small_company'>Team</p>
        <p className='small_company'>Contact</p>
      </div>
      <div>
        <p className='company'>Product</p>
        <p className='small_company'>Service</p>
        <p className='small_company'>Feelancer</p>
        <p className='small_company'>Feauters</p>
        <p className='small_company'>Development</p>
      </div>
      <div>
        <p className='company'>Links</p>
        <p className='small_company'>Privacy Policy</p>
        <p className='small_company'>Term and Condition</p>
        <p className='small_company'>FAQ</p>
      </div>
      <div>
        <p className='company'>Follow Us</p>
        <FaTwitter style={{ fontSize: "55px" }} />
        <FaFacebook style={{ fontSize: "55px", margin: "0 10px" }} />
        <FaInstagram style={{ fontSize: "55px" }} />
      </div>
    </div>
    </>
  )
}

// <div style={{ background: "#0000ff1c" }}>
    // <div className='main_div'>
    //     <div>
    //         <button className='logo'>Logo</button>
    //     </div>
    //     <div>
    //         <input className='searchInput' type='text' placeholder='Search' />
    //         <button className='searchBtn'>search</button>
    //     </div>
    //     <div style={{ marginLeft: "50px" }} className='top_project'>
    //         <p className='project'>Post Project</p>
    //         <p className='project'>Search Project</p>
    //     </div>
    // </div>
    // <div style={{ 
    //   background: "black",
    //   height: "200px"
    //   // height: "300px", width: "100%", background: "#fff"
    //    }}>
    //   <p style={{ fontSize: "30px", color: "#fff", padding: "5px 30px 30px 30px", margin: "0px", marginLeft: "115px"}}>My Orders</p>
    // </div>
    // <div className='secondDiv'>

    // </div>
    // <div className='topDiv2'>
    // <div className='topDiv'>
    //   <div style={{ display: "flex"}}>
    //     <p className='filterBy'>Filter By</p>
    //     <button className='allBtn'>All</button>
    //     <button className='allBtn2'>Pending</button>
    //     <button className='allBtn2'>In Progress</button>
    //     <button className='allBtn2'>Completed</button>
    //     <button className='allBtn2'>Cancelled</button>
    //     <button className='allBtn2'>Delivered</button>
    //   </div>
    //   <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
    //     <div>
    //       <p style={{ padding: "10px 10px 0px 10px", fontWeight: "bold", color: "#55a655" }}>Date</p>
    //     </div>
    //     <div style={{ display: "flex" }}>
    //       <p style={{ fontWeight: "bold", color: "#55a655" }}>Status</p>
    //       <p style={{ margin: "0px 95px", fontWeight: "bold", color: "#55a655" }}>Action</p>
    //     </div>
    //   </div>
    //   <div className='tableDiv'>
    //     <div className='dateDiv'>
    //       <p>12 Aug 2022</p>
    //     </div>
    //     <div>
    //       <p className='freelancerDiv'>Freelancer and order id</p>
    //       <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Theresa Webb</p>
    //       <p style={{ fontSize: "12px" }}>Gk341000756</p>
    //     </div>
    //     <div style={{ marginLeft: "15px" }}>
    //       <p className='freelancerDiv'>Project Details</p>
    //       <p style={{ fontWeight: "bold" }}>udvyh ireug ewuyfw weiuvh ewivuhe iuevhciue ewiuvh wdivuhewnv
    //         dkjvbjdiw iwduvhur weuv
    //       </p>
    //       <p className='freelancerDiv'>Price</p>
    //       <p className='priceDiv'><span style={{ fontWeight: "bold", fontSize: "18px" }}>₹ </span>3000</p>
    //     </div>
    //     <div style={{ width: "120px", marginLeft: "10px" }}>
    //       <p className='freelancerDiv'>Delivery Time</p>
    //       <p style={{ fontWeight: "bold" }}>08 Days
    //       </p>
    //       <p className='freelancerDiv'>Time Left</p>
    //       <p style={{ fontWeight: "bold", color: "skyblue" }}>00:00:00</p>
    //     </div>
    //     <div className='pendingDiv'>
    //       <button style={{ border: "none", padding: "5px 10px", background: "#8080803b", borderRadius: "6px", height: "40px" }}>Pending</button>
    //     </div>
    //     <div style={{ paddingLeft: "27px" }}>
    //       <p>View Details</p>
    //       <p className='clientDiv'>Waiting for Client Payment</p>
    //     </div>
    //   </div>
    //   <div className='tableDiv'>
    //     <div className='dateDiv'>
    //       <p>12 Aug 2022</p>
    //     </div>
    //     <div>
    //       <p className='freelancerDiv'>Freelancer and order id</p>
    //       <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Cody Fisher</p>
    //       <p style={{ fontSize: "12px" }}>Gk341000756</p>
    //     </div>
    //     <div style={{ marginLeft: "15px" }}>
    //       <p className='freelancerDiv'>Project Details</p>
    //       <p style={{ fontWeight: "bold" }}>udvyh ireug ewuyfw weiuvh ewivuhe iuevhciue ewiuvh wdivuhewnv
    //         dkjvbjdiw iwduvhur weuv
    //       </p>
    //       <p className='freelancerDiv'>Price</p>
    //       <p className='priceDiv'><span style={{ fontWeight: "bold", fontSize: "18px" }}>₹ </span>3000</p>
    //     </div>
    //     <div style={{ width: "120px", marginLeft: "10px" }}>
    //       <p className='freelancerDiv'>Delivery Time</p>
    //       <p style={{ fontWeight: "bold" }}>08 Days
    //       </p>
    //       <p className='freelancerDiv'>Time Left</p>
    //       <p style={{ fontWeight: "bold", color: "skyblue" }}>00:00:00</p>
    //     </div>
    //     <div className='pendingDiv'>
    //       <button style={{ border: "none", padding: "5px 10px", background: "#ff00005e", borderRadius: "6px" }}>In progress</button>
    //     </div>
    //     <div style={{ paddingLeft: "27px" }}>
    //       <p>View Details</p>
    //       <p className='clientDiv'>Waiting for Client Payment</p>
    //     </div>
    //   </div>
    //   <div className='tableDiv'>
    //     <div className='dateDiv'>
    //       <p>12 Aug 2022</p>
    //     </div>
    //     <div>
    //       <p className='freelancerDiv'>Freelancer and order id</p>
    //       <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Arlene McCoy</p>
    //       <p style={{ fontSize: "12px" }}>Gk341000756</p>
    //     </div>
    //     <div style={{ marginLeft: "15px" }}>
    //       <p className='freelancerDiv'>Project Details</p>
    //       <p style={{ fontWeight: "bold" }}>udvyh ireug ewuyfw weiuvh ewivuhe iuevhciue ewiuvh wdivuhewnv
    //         dkjvbjdiw iwduvhur weuv
    //       </p>
    //       <p className='freelancerDiv'>Price</p>
    //       <p className='priceDiv'><span style={{ fontWeight: "bold", fontSize: "18px" }}>₹ </span>3000</p>
    //     </div>
    //     <div style={{ width: "120px", marginLeft: "10px" }}>
    //       <p className='freelancerDiv'>Delivery Time</p>
    //       <p style={{ fontWeight: "bold" }}>08 Days
    //       </p>
    //       <p className='freelancerDiv'>Time Left</p>
    //       <p style={{ fontWeight: "bold", color: "skyblue" }}>00:00:00</p>
    //     </div>
    //     <div className='pendingDiv'>
    //       <button style={{ border: "none", padding: "5px 10px", background: "#0000ff54", borderRadius: "6px", height: "40px" }}>Delivered</button>
    //     </div>
    //     <div style={{ paddingLeft: "27px" }}>
    //       <p>View Details</p>
    //       <p className='clientDiv'>Waiting for Client Payment</p>
    //     </div>
    //   </div>
    //   <div className='tableDiv'>
    //     <div className='dateDiv'>
    //       <p>12 Aug 2022</p>
    //     </div>
    //     <div>
    //       <p className='freelancerDiv'>Freelancer and order id</p>
    //       <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Theresa Webb</p>
    //       <p style={{ fontSize: "12px" }}>Gk341000756</p>
    //     </div>
    //     <div style={{ marginLeft: "15px" }}>
    //       <p className='freelancerDiv'>Project Details</p>
    //       <p style={{ fontWeight: "bold" }}>udvyh ireug ewuyfw weiuvh ewivuhe iuevhciue ewiuvh wdivuhewnv
    //         dkjvbjdiw iwduvhur weuv
    //       </p>
    //       <p className='freelancerDiv'>Price</p>
    //       <p className='priceDiv'><span style={{ fontWeight: "bold", fontSize: "18px" }}>₹ </span>3000</p>
    //     </div>
    //     <div style={{ width: "120px", marginLeft: "10px" }}>
    //       <p className='freelancerDiv'>Delivery Time</p>
    //       <p style={{ fontWeight: "bold" }}>08 Days
    //       </p>
    //       <p className='freelancerDiv'>Time Left</p>
    //       <p style={{ fontWeight: "bold", color: "skyblue" }}>00:00:00</p>
    //     </div>
    //     <div className='pendingDiv'>
    //       <button style={{ border: "none", padding: "5px 10px", background: "#ff00005e", borderRadius: "6px", height: "40px" }}>Cancelled</button>
    //     </div>
    //     <div style={{ paddingLeft: "27px" }}>
    //       <p>View Details</p>
    //       <p className='clientDiv'>Waiting for Client Payment</p>
    //     </div>
    //   </div>
    //   <div className='tableDiv'>
    //     <div className='dateDiv'>
    //       <p>12 Aug 2022</p>
    //     </div>
    //     <div>
    //       <p className='freelancerDiv'>Freelancer and order id</p>
    //       <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Theresa Webb</p>
    //       <p style={{ fontSize: "12px" }}>Gk341000756</p>
    //     </div>
    //     <div style={{ marginLeft: "15px" }}>
    //       <p className='freelancerDiv'>Project Details</p>
    //       <p style={{ fontWeight: "bold" }}>udvyh ireug ewuyfw weiuvh ewivuhe iuevhciue ewiuvh wdivuhewnv
    //         dkjvbjdiw iwduvhur weuv
    //       </p>
    //       <p className='freelancerDiv'>Price</p>
    //       <p className='priceDiv'><span style={{ fontWeight: "bold", fontSize: "18px" }}>₹ </span>3000</p>
    //     </div>
    //     <div style={{ width: "120px", marginLeft: "10px" }}>
    //       <p className='freelancerDiv'>Delivery Time</p>
    //       <p style={{ fontWeight: "bold" }}>08 Days
    //       </p>
    //       <p className='freelancerDiv'>Time Left</p>
    //       <p style={{ fontWeight: "bold", color: "skyblue" }}>00:00:00</p>
    //     </div>
    //     <div className='pendingDiv'>
    //       <button style={{ border: "none", padding: "5px 10px", background: "#00800047", borderRadius: "6px", height: "40px" }}>Completed</button>
    //     </div>
    //     <div style={{ paddingLeft: "27px" }}>
    //       <p>View Details</p>
    //       <p className='clientDiv'>Waiting for Client Payment</p>
    //     </div>
    //   </div>
      // <div>
      //   <div style={{ textAlign: "center" }}>
      //     <button className='paginationBtn'>1</button>
      //     <button className='paginationBtn' style={{ background: "blue", color: "#fff" }}>2</button>
      //     <button className='paginationBtn'>3</button>
      //     <button className='paginationBtn'>4</button>
      //     <button className='paginationBtn'>5</button>
      //   </div>
      // </div>
    // </div>
    // </div>
    // <div className='footer'>
    //   <div>
    //     <button className='logo' style={{ marginLeft: "0px" }}>Logo</button>
    //     <p style={{ fontWeight: "bold", marginTop: "5px" }}>Shiloh, Hawali 81063</p>
    //   </div>
    //   <div>
    //     <p className='company'>Company</p>
    //     <p className='small_company'>About Us</p>
    //     <p className='small_company'>Career</p>
    //     <p className='small_company'>Team</p>
    //     <p className='small_company'>Contact</p>
    //   </div>
    //   <div>
    //     <p className='company'>Product</p>
    //     <p className='small_company'>Service</p>
    //     <p className='small_company'>Feelancer</p>
    //     <p className='small_company'>Feauters</p>
    //     <p className='small_company'>Development</p>
    //   </div>
    //   <div>
    //     <p className='company'>Links</p>
    //     <p className='small_company'>Privacy Policy</p>
    //     <p className='small_company'>Term and Condition</p>
    //     <p className='small_company'>FAQ</p>
    //   </div>
    //   <div>
    //     <p className='company'>Follow Us</p>
    //     <p className='small_company'>Twitter</p>
    //     <p className='small_company'>Facebook</p>
    //     <p className='small_company'>Instagram</p>
    //   </div>
    // </div>
    // </div>

export default Demo