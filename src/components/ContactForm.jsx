import React, { useEffect, useState } from 'react';
import ToastMessage from './ToastMessage';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [genderEnquiry, setGenderEnquiry] = useState('');
  const [message, setMessage] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    genderEnquiry: '',
    message: '',
  });

  const resetInput = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setGenderEnquiry('');
    setMessage('');
    setSubscribe(false);
  };

  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast(false);
        resetInput();
      }, 3000);
    }
  }, [toast]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!firstName) {
      newErrors.firstName = 'First name is required';
    }
    if (!lastName) {
      newErrors.lastName = 'Last name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!genderEnquiry) {
      newErrors.genderEnquiry = 'Query type is required';
    }
    if (!message) {
      newErrors.message = 'Message is required';
    }
    if(!subscribe) {
      newErrors.subscribe = ' To submit this form, please consent to being contacted';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setToast(true);
      console.log('Form submitted:', {
        firstName,
        lastName,
        email,
        genderEnquiry,
        message,
        subscribe,
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center   p-4 sm:p-6 md:p-8 bg-white rounded-md">
      <form onSubmit={handleSubmit} className="grid gap-4">
      <h1 className="text-2xl text-gray-900 font-bold text-left ">Contact Us</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col text-left gap-1">
            <label className="font-medium">First Name <span className='text-emerald-600'>*</span></label>
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="border-2 border-gray-200 outline-[#0c7d69] hover:border-[#0c7d69]  focus:bg-emerald-50  p-2 rounded-md"
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div className="flex flex-col text-left gap-1">
            <label className="font-medium">Last Name <span className='text-[#0c7d69]'>*</span></label>
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="border-2 border-gray-200 outline-[#0c7d69] hover:border-[#0c7d69] focus:bg-emerald-50 p-2 rounded-md"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col text-left gap-1">
          <label className="font-medium">Email Address <span className='text-[#0c7d69]'>*</span></label>
          <input focus:bg-emerald-50
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border-2 border-gray-200 outline-[#0c7d69] hover:border-[#0c7d69] focus:bg-emerald-50 p-2 rounded-md"
            placeholder="Email Address"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col text-left gap-4">
          <label className="font-medium">Query Type <span className='text-[#0c7d69]'>*</span></label>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center border-2 border-gray-200 outline-[#0c7d69] hover:border-[#0c7d69]  focus:bg-emerald-50 p-2 rounded-md">
              <input
                type="radio"
                name="genderEnquiry"
                id='general'
                value="general"
                checked={genderEnquiry === 'general'}
                onChange={(event) => setGenderEnquiry(event.target.value)}
                className="accent-[#0c7d69]"
              />
              <label htmlFor="general" className="ml-2 font-medium">General Enquiry</label>
            </div>
            <div className="flex items-center border-2 border-gray-200 outline-[#0c7d69] hover:border-[#0c7d69]  focus:bg-emerald-50 p-2 rounded-md">
              <input
                type="radio"
                name="genderEnquiry"
                id='support'
                value="support"
                checked={genderEnquiry === 'support'}
                onChange={(event) => setGenderEnquiry(event.target.value)}
                className="accent-[#0c7d69]"
              />
              <label htmlFor="support" className="ml-2 font-medium">Support Request</label>
            </div>
          </div>
          {errors.genderEnquiry && (
            <p className="text-red-500 text-sm">{errors.genderEnquiry}</p>
          )}
        </div>
        <div className="flex flex-col text-left gap-1">
          <label className="font-medium">Message <span className='text-[#0c7d69]'>*</span></label>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="border-2 border-gray-200 outline-[#0c7d69] hover:border-[#0c7d69] focus:bg-emerald-50 p-2 rounded-md"
            placeholder="Message"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <div className="flex flex-col text-left gap-1">
          <div className='flex items-center gap-2'>
            <input
              type="checkbox"
              checked={subscribe}
              onChange={(event) => setSubscribe(event.target.checked)}
              className="accent-[#0c7d69] "
            
            />
            <label >I consent to being contacted by the team</label>
          </div>
          {errors.subscribe && (
            <p className="text-red-500 text-sm text-left  ">{errors.subscribe}</p>
          )}
        </div>
        
        <button
          className="bg-[#0c7d69] hover:bg-[#084f42] text-white p-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
      {toast && <ToastMessage />}

    </div>
  );
};

export default ContactForm;
