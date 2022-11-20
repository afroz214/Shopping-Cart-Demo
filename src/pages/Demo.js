import React from 'react'
import "./demo.scss"

const Demo = () => {
  return (
    <div style={{ background: "#0000ff1c" }}>
    <div className='main_div'>
        <div>
            <button className='logo'>Logo</button>
        </div>
        <div>
            <input className='searchInput' type='text' placeholder='Search' />
            <button className='searchBtn'>search</button>
        </div>
        <div style={{ marginLeft: "50px" }} className='top_project'>
            <p className='project'>Post Project</p>
            <p className='project'>Search Project</p>
        </div>
    </div>
    <div style={{ 
      background: "black",
      height: "200px"
      // height: "300px", width: "100%", background: "#fff"
       }}>
      <p style={{ fontSize: "30px", color: "#fff", padding: "5px 30px 30px 30px", margin: "0px", marginLeft: "115px"}}>My Orders</p>
    </div>
    <div className='secondDiv'>

    </div>
    <div className='topDiv2'>
    <div className='topDiv'>
      <div style={{ display: "flex"}}>
        <p className='filterBy'>Filter By</p>
        <button className='allBtn'>All</button>
        <button className='allBtn2'>Pending</button>
        <button className='allBtn2'>In Progress</button>
        <button className='allBtn2'>Completed</button>
        <button className='allBtn2'>Cancelled</button>
        <button className='allBtn2'>Delivered</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <div>
          <p style={{ padding: "10px 10px 0px 10px", fontWeight: "bold", color: "#55a655" }}>Date</p>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ fontWeight: "bold", color: "#55a655" }}>Status</p>
          <p style={{ margin: "0px 95px", fontWeight: "bold", color: "#55a655" }}>Action</p>
        </div>
      </div>
      <div className='tableDiv'>
        <div className='dateDiv'>
          <p>12 Aug 2022</p>
        </div>
        <div>
          <p className='freelancerDiv'>Freelancer and order id</p>
          <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Theresa Webb</p>
          <p style={{ fontSize: "12px" }}>Gk341000756</p>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <p className='freelancerDiv'>Project Details</p>
          <p style={{ fontWeight: "bold" }}>udvyh ireug ewuyfw weiuvh ewivuhe iuevhciue ewiuvh wdivuhewnv
            dkjvbjdiw iwduvhur weuv
          </p>
          <p className='freelancerDiv'>Price</p>
          <p className='priceDiv'><span style={{ fontWeight: "bold", fontSize: "18px" }}>₹ </span>3000</p>
        </div>
        <div style={{ width: "120px", marginLeft: "10px" }}>
          <p className='freelancerDiv'>Delivery Time</p>
          <p style={{ fontWeight: "bold" }}>08 Days
          </p>
          <p className='freelancerDiv'>Time Left</p>
          <p style={{ fontWeight: "bold", color: "skyblue" }}>00:00:00</p>
        </div>
        <div className='pendingDiv'>
          <button style={{ border: "none", padding: "5px 10px", background: "#8080803b", borderRadius: "6px", height: "40px" }}>Pending</button>
        </div>
        <div style={{ paddingLeft: "27px" }}>
          <p>View Details</p>
          <p className='clientDiv'>Waiting for Client Payment</p>
        </div>
      </div>
      <div className='tableDiv'>
        <div className='dateDiv'>
          <p>12 Aug 2022</p>
        </div>
        <div>
          <p className='freelancerDiv'>Freelancer and order id</p>
          <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Cody Fisher</p>
          <p style={{ fontSize: "12px" }}>Gk341000756</p>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <p className='freelancerDiv'>Project Details</p>
          <p style={{ fontWeight: "bold" }}>udvyh ireug ewuyfw weiuvh ewivuhe iuevhciue ewiuvh wdivuhewnv
            dkjvbjdiw iwduvhur weuv
          </p>
          <p className='freelancerDiv'>Price</p>
          <p className='priceDiv'><span style={{ fontWeight: "bold", fontSize: "18px" }}>₹ </span>3000</p>
        </div>
        <div style={{ width: "120px", marginLeft: "10px" }}>
          <p className='freelancerDiv'>Delivery Time</p>
          <p style={{ fontWeight: "bold" }}>08 Days
          </p>
          <p className='freelancerDiv'>Time Left</p>
          <p style={{ fontWeight: "bold", color: "skyblue" }}>00:00:00</p>
        </div>
        <div className='pendingDiv'>
          <button style={{ border: "none", padding: "5px 10px", background: "#ff00005e", borderRadius: "6px" }}>In progress</button>
        </div>
        <div style={{ paddingLeft: "27px" }}>
          <p>View Details</p>
          <p className='clientDiv'>Waiting for Client Payment</p>
        </div>
      </div>
      <div className='tableDiv'>
        <div className='dateDiv'>
          <p>12 Aug 2022</p>
        </div>
        <div>
          <p className='freelancerDiv'>Freelancer and order id</p>
          <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Arlene McCoy</p>
          <p style={{ fontSize: "12px" }}>Gk341000756</p>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <p className='freelancerDiv'>Project Details</p>
          <p style={{ fontWeight: "bold" }}>udvyh ireug ewuyfw weiuvh ewivuhe iuevhciue ewiuvh wdivuhewnv
            dkjvbjdiw iwduvhur weuv
          </p>
          <p className='freelancerDiv'>Price</p>
          <p className='priceDiv'><span style={{ fontWeight: "bold", fontSize: "18px" }}>₹ </span>3000</p>
        </div>
        <div style={{ width: "120px", marginLeft: "10px" }}>
          <p className='freelancerDiv'>Delivery Time</p>
          <p style={{ fontWeight: "bold" }}>08 Days
          </p>
          <p className='freelancerDiv'>Time Left</p>
          <p style={{ fontWeight: "bold", color: "skyblue" }}>00:00:00</p>
        </div>
        <div className='pendingDiv'>
          <button style={{ border: "none", padding: "5px 10px", background: "#0000ff54", borderRadius: "6px", height: "40px" }}>Delivered</button>
        </div>
        <div style={{ paddingLeft: "27px" }}>
          <p>View Details</p>
          <p className='clientDiv'>Waiting for Client Payment</p>
        </div>
      </div>
      <div className='tableDiv'>
        <div className='dateDiv'>
          <p>12 Aug 2022</p>
        </div>
        <div>
          <p className='freelancerDiv'>Freelancer and order id</p>
          <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Theresa Webb</p>
          <p style={{ fontSize: "12px" }}>Gk341000756</p>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <p className='freelancerDiv'>Project Details</p>
          <p style={{ fontWeight: "bold" }}>udvyh ireug ewuyfw weiuvh ewivuhe iuevhciue ewiuvh wdivuhewnv
            dkjvbjdiw iwduvhur weuv
          </p>
          <p className='freelancerDiv'>Price</p>
          <p className='priceDiv'><span style={{ fontWeight: "bold", fontSize: "18px" }}>₹ </span>3000</p>
        </div>
        <div style={{ width: "120px", marginLeft: "10px" }}>
          <p className='freelancerDiv'>Delivery Time</p>
          <p style={{ fontWeight: "bold" }}>08 Days
          </p>
          <p className='freelancerDiv'>Time Left</p>
          <p style={{ fontWeight: "bold", color: "skyblue" }}>00:00:00</p>
        </div>
        <div className='pendingDiv'>
          <button style={{ border: "none", padding: "5px 10px", background: "#ff00005e", borderRadius: "6px", height: "40px" }}>Cancelled</button>
        </div>
        <div style={{ paddingLeft: "27px" }}>
          <p>View Details</p>
          <p className='clientDiv'>Waiting for Client Payment</p>
        </div>
      </div>
      <div className='tableDiv'>
        <div className='dateDiv'>
          <p>12 Aug 2022</p>
        </div>
        <div>
          <p className='freelancerDiv'>Freelancer and order id</p>
          <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}>Theresa Webb</p>
          <p style={{ fontSize: "12px" }}>Gk341000756</p>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <p className='freelancerDiv'>Project Details</p>
          <p style={{ fontWeight: "bold" }}>udvyh ireug ewuyfw weiuvh ewivuhe iuevhciue ewiuvh wdivuhewnv
            dkjvbjdiw iwduvhur weuv
          </p>
          <p className='freelancerDiv'>Price</p>
          <p className='priceDiv'><span style={{ fontWeight: "bold", fontSize: "18px" }}>₹ </span>3000</p>
        </div>
        <div style={{ width: "120px", marginLeft: "10px" }}>
          <p className='freelancerDiv'>Delivery Time</p>
          <p style={{ fontWeight: "bold" }}>08 Days
          </p>
          <p className='freelancerDiv'>Time Left</p>
          <p style={{ fontWeight: "bold", color: "skyblue" }}>00:00:00</p>
        </div>
        <div className='pendingDiv'>
          <button style={{ border: "none", padding: "5px 10px", background: "#00800047", borderRadius: "6px", height: "40px" }}>Completed</button>
        </div>
        <div style={{ paddingLeft: "27px" }}>
          <p>View Details</p>
          <p className='clientDiv'>Waiting for Client Payment</p>
        </div>
      </div>
      <div>
        <div style={{ textAlign: "center" }}>
          <button className='paginationBtn'>1</button>
          <button className='paginationBtn' style={{ background: "blue", color: "#fff" }}>2</button>
          <button className='paginationBtn'>3</button>
          <button className='paginationBtn'>4</button>
          <button className='paginationBtn'>5</button>
        </div>
      </div>
    </div>
    </div>
    <div className='footer'>
      <div>
        <button className='logo' style={{ marginLeft: "0px" }}>Logo</button>
        <p style={{ fontWeight: "bold", marginTop: "5px" }}>Shiloh, Hawali 81063</p>
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
        <p className='small_company'>Twitter</p>
        <p className='small_company'>Facebook</p>
        <p className='small_company'>Instagram</p>
      </div>
    </div>
    </div>
  )
}

export default Demo