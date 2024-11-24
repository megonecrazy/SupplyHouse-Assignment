
import { useState } from 'react'

export const HoursForm = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState("");
  
    const handleOpenPopup = (content) => {
      setPopupContent(content);
      setIsPopupVisible(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupVisible(false);
    };

    const [formData, setFormData] = useState({
        date: '',
        open: '',
        close: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Special hours submitted:', formData);
    };

    return (
        <>

<div className='container '>
      <div className='row'> 
        
        <div className='card col-md-6 offset-md-3 offset-md-3' >
      
          <div className='card-body'>
          
              <form onSubmit={handleSubmit}>
                <div className='form-group mb-2'>
                  <label className='form-label'>Date:</label>
                  <input type="date"
                        name="date"  required={true}
                   value={formData.date}  className='form-control' onChange={handleChange}/>
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'>Open Time:</label>
                  <input type="text" name="lastName"  required={true}
                   value={formData.open}  className='form-control' onChange={handleChange}/>
                </div>
                <div className='form-group mb-2'>
                  <label> Close Time:</label>
                  <input type="text" name="lastName"  required={true}
                   value={formData.close}  className='form-control' onChange={handleChange}/>
                </div>
                <div className='form-group mb-2'>
                  <label >Message:</label>
                  <input type="text" name="email"  required={true}
                   value={formData.message}  className='form-control' onChange={handleChange}/>
                </div>
                <button className='btn btn-success' >Submit</button>
              </form>
          </div>
        </div>

      </div>
      
    </div>
       
           
 {/* Popup Modal */}
 {isPopupVisible && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>{popupContent}</h3>
            <p>This is additional information about {popupContent.toLowerCase()}.</p>
            <button className="close-button" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
            
        </>
    );

}

export default HoursForm;