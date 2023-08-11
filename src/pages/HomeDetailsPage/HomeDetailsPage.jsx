import './HomeDetailsPage.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BiBed } from "react-icons/bi";
import { MdOutlineBathtub } from "react-icons/md";
import { BiPound } from "react-icons/bi";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'
import Modal from 'react-modal'
// import BookingModal from '../../components/BookingModal/BookingModal';
// import Modal from '../../components/Modal/Modal';

function HomeDetailsPage() {

  //useParams is for passing data through the URL, make sure the param
  //set as a const here is the EXACT same as in the route path (app.jsx) followed by a :
const {propertyId} = useParams()
  // useEffect(()=>{
  //   setCurrentPage('HomeDetailsPage');
  // }, []);

  //create state to hold property data
  const [home, setHome] = useState('')
  const [homeAddress, setHomeAddress] = useState({})
  const [otherImages, setOtherImages] = useState([])
  const [mainImage, setMainImage] = useState('')
  const [keyFeatures, setKeyFeatures] = useState([])

  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50vw',
      height: '60vh'
    },
  };

  Modal.setAppElement(document.getElementById('root'));

  const onShortlist = false;
  const openModal = () => {
    
  }

  //633d45d461f49f86a21caa1a
  useEffect(()=>{
    axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
    .then(res=>{
      setHome(res.data)
      setHomeAddress(res.data.address);
      setMainImage(res.data.images[0]);
      setOtherImages(res.data.images);
      setKeyFeatures(res.data.key_features)
    })
      
    .catch(err=>console.log(err))
  },[])


  return (
    <div className='home-details-container'>
      <div className="gallery-info">
      <div className="gallery">
        <div className="gallery-main" style={{backgroundImage: `url(${mainImage})`}}>
        </div>
        <div className="gallery-other">
          {
            otherImages.map(item => {
            return <div onClick={()=>setMainImage(item)} className='gallery-other-item' key={item?.id}
            style={{backgroundImage: `url(${item})`}}>
                    </div>
             } )
          }
        
        </div>
      </div>
      <div className="home-info-btns">
          <div className="home-info">
            <p className="address">{homeAddress?.street}, {homeAddress?.city}, {homeAddress?.postcode}</p>
            <div className="info-grid">
              <div className="grid-child">
                <p className='grid-child-heading'>Bedrooms</p>
                <div className="grid-child-info">
                  <BiBed alt='bed-icon' className='icon'/>
                  <p className='number'>{home?.bedroom_count}</p>
                </div>
              </div>
            <div className="grid-child">
              <p className='grid-child-heading'>Bathrooms</p>
              <div className="grid-child-info">
                <MdOutlineBathtub alt='bath-icon' className='icon'/>
                <p className='number'>{home?.bathroom_count}</p>
              </div>
            </div>
            <div className="grid-child">
              <p className='grid-child-heading'>Property Type</p>
              <p className="grid-child-info grid-text">{home?.property_type}</p>
            </div>
            <div className="grid-child">
              <p className='grid-child-heading'>Price</p>
              <div className="grid-child-info">
                <BiPound alt='british-pound-icon' className='number'/>
                <p className='number'>{home?.rent}</p>
              </div>
            </div>
            <div className="grid-child">
              <p className='grid-child-heading'>Furnished Type</p>
              <div className="grid-child-info">
                <p className='grid-text'>{home?.furnished}</p>
              </div>
            </div>
            <div className="grid-child">
              <p className='grid-child-heading'>Available from</p>
              <div className="grid-child-info">
                <p className='grid-text'>{home?.availability}</p>
              </div>
            </div>
          </div>
          </div>
          <div className="btn-box">
            <div className='shortlist-btn'>
              <AiOutlineHeart />
              <p>Shortlist</p>
            </div>
          <div onClick={()=>setIsOpen(true)} className='book-view-btn'>
            <p>Book Viewing</p>
          </div>
          <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Book a Viewing"
      >
        {/* <button onClick={closeModal}>close</button> */}
        <div className="modal-content">
          <p>{home?.address}</p>
          <form>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Enter your name'></input>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter your email'></input>
            <label htmlFor='phone'>Phone Number</label>
            <input type='number' id='phone' placeholder='Enter your phone number'></input>
            <label htmlFor='message'>Message</label>
            <textarea id='message' placeholder='Enter your message'></textarea>
          </form>
          <button>Submit</button>
        </div>
        </Modal>
      </div>
    </div>
    <div className="add-info">
        <div className='add-info-left'>
          <div className="description">
            <h3>Description</h3>
            <p>{home?.property_description}</p>
          </div>
          <div className="key-feat">
          <h3>Key Features</h3>
          <ul>
          {
            keyFeatures.map(item =>{
              return <li key={item.id} className='list-item'><AiOutlineCheck alt='Checkmark icon'/> {item}</li>
            })
          }
          </ul>
          </div>
        </div>
        <div className="add-info-right">
          <div className="bedroom-prices">
          <h3>Bedroom Prices</h3>
          <div className="bedroom-prices-container">
            {
              
              Object.keys(home?.bedroom_prices?? {}).map((item, index)=>{
                return <div className='bedroom' key={item}>
                  <h4>Bedroom {index + 1}</h4>
                  <div className='bedroom-price'>
                    <p>£{home?.bedroom_prices[item]} per week</p>
                  </div>
                </div>  
                })
            }
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )}

export default HomeDetailsPage

//I need to either turn the object into an array or something for the bedroom prices