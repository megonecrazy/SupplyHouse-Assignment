import React, { useState, useEffect } from "react";
import "./CustomerSupportCard.css";
export const DashboardComponent = () => {
    const hoursData = {
        regularHours: {
            "Monday-Thursday": "8am ET - 7:45pm ET",
            Friday: "9am ET - 7:45pm ET",
            "Saturday-Sunday": "9am ET - 5:45pm ET",
        },
        specialHours: [
            {
                date: "2024-12-25",
                openTime: "Closed",
                closeTime: "Closed",
                reason: "Christmas Holiday",
            },
            {
                date: "2024-12-31",
                openTime: "9am ET",
                closeTime: "3pm ET",
                reason: "New Year's Eve",
            },
        ],
    };
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState("");
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
    const handleOpenPopup = () => {
        setPopupContent();
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    const [activeStatus, setActiveStatus] = useState({
        call: false,
        text: false,
        chat: false,
    });

    // Function to check active hours
    const checkAvailability = () => {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        // Example active hours (adjust based on requirements)
        const isWithinHours = (start, end) => {
            const [startHour, startMinute] = start.split(":").map(Number);
            const [endHour, endMinute] = end.split(":").map(Number);

            const startTime = startHour * 60 + startMinute;
            const endTime = endHour * 60 + endMinute;
            const currentTime = currentHour * 60 + currentMinute;

            return currentTime >= startTime && currentTime <= endTime;
        };

        setActiveStatus({
            call: isWithinHours("14:40", "20:00"), // 8am - 8pm
            text: isWithinHours("08:00", "20:00"), // 8am - 8pm
            chat: isWithinHours("08:00", "18:00"), // 8am - 6pm
        });
    };

    // Run the checkAvailability function on component load and every minute
    useEffect(() => {
        checkAvailability();
        const interval = setInterval(checkAvailability, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="card">
                {/* Header Section */}
                <div className="card-header">
                    <img
                        src="./src/assets/women.png"
                        alt="Profile"
                        className="profile-image"
                    />
                    <h2>Questions?</h2>
                    <p>
                        Our Customer Support will be opening late today. We apologize for any
                        inconvenience.
                    </p>
                </div>

            </div>



            {/* Contact Section */}
            <div className="card-body">
                <div className="contact-item">
                    <div
                        className={`status-circle ${activeStatus.call ? "active" : "inactive"
                            }`}
                    ></div>
                    <i className="fas fa-phone-alt"></i> <span>Call</span> 888-551-7600
                </div>
                <div className="contact-item ">
                    <div
                        className={`status-circle ${activeStatus.text ? "active" : "inactive"
                            }`}
                    ></div>
                    <i className="fas fa-comment-dots"></i> <span>Text</span> 888-551-7600
                    <p>{activeStatus.text ? "" : ""}</p>
                </div>
                <div className="contact-item ">
                    <div
                        className={`status-circle ${activeStatus.text ? "active" : "inactive"
                            }`}
                    ></div>
                    <i className="fas fa-comments"></i> <span>Live Chat</span>
                    <p>{activeStatus.chat ? "" : ""}</p>
                </div>
                <div className="contact-item">
                    <i className="fas fa-envelope"></i> <span>Email</span>
                    <p> Response by Sun</p>
                </div>


                {/* Special Hours Section */}
                <div className="card-footer">
                    <p>
                        <strong style={{ color: "red" }}>Special Hours</strong>
                <br />        
      <a onClick={handleOpenPopup} style={{ color: "blue" }}>Submit Special Hours</a>
                    </p>
                    <ul  className="no-bullets" >
        {hoursData.specialHours.map((special, index) => (
          <li key={index}>
            <strong>{special.date}</strong>: <br />{special.openTime} - {special.closeTime} (
            {special.reason})
          </li>

        ))}

      </ul>
                     {Object.entries(hoursData.regularHours).map(([day, hours]) => (
                        <li className="no-bullets" key={day}>
                            <p>
                                <strong>{day}</strong>: <br /> {hours}
                            </p>
                        </li>
                    ))}

                </div>
            </div>

            {/* Popup Modal */}
            {isPopupVisible && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                       <h2 className='text-center'>Submit Special Hour</h2>
                        <div className='card-body'>

                            <form onSubmit={handleSubmit}>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Date:</label>
                                    <input type="date"
                                        name="date" required={true}
                                        value={formData.date} className='form-control' onChange={handleChange} />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Open Time:</label>
                                    <input type="text" name="lastName" required={true}
                                        value={formData.open} className='form-control' onChange={handleChange} />
                                </div>
                                <div className='form-group mb-2'>
                                    <label> Close Time:</label>
                                    <input type="text" name="lastName" required={true}
                                        value={formData.close} className='form-control' onChange={handleChange} />
                                </div>
                                <div className='form-group mb-2'>
                                    <label >Message:</label>
                                    <input type="text" name="email" required={true}
                                        value={formData.message} className='form-control' onChange={handleChange} />
                                </div>
                                <button className='btn btn-success' >Submit</button> &nbsp;&nbsp;&nbsp;
                                <button className="btn btn-success" onClick={handleClosePopup} >
                                    Close
                                </button>
                            </form>
                        </div>


                    </div>
                </div>
            )}
        </>

    );

}

export default DashboardComponent