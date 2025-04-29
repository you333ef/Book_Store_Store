import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import './subscripe.css'

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setMessage({ 
        text: 'الرجاء إدخال بريد إلكتروني صالح', 
        type: 'error' 
      });
      return;
    }

    setMessage({ 
      text: 'شكرًا لاشتراكك في نشرتنا الإخبارية', 
      type: 'success' 
    });
    
    setEmail('');

    // إخفاء الرسالة بعد 3 ثوانٍ
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  return (
    <section className=" mt-5 subscribe-section">
      {/* العناصر الزخرفية */}
      <div className="decorative-element yellow-dot-1"></div>
      <div className="decorative-element yellow-dot-2"></div>
      <div className="decorative-element orange-dot"></div>
      <div className="decorative-element white-dot-1"></div>
      <div className="decorative-element white-dot-2"></div>
      <div className="decorative-element white-dot-3"></div>
      
      <div className="subscribe-container">
        <h6 className="subscribe-title">
        Subscibe to Our Newsletter
        </h6>
        <p className="subscribe-description">
        Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.
        </p>
        
        <div className="form-container">
          <form onSubmit={handleSubmit} className="subscribe-form">
            <div className="input-container">
              <Mail className="mail-icon" />
              <input
                type="email"
                placeholder="youremail123@gmail.com"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="subscribe-button">
            SUBSCRIBE
            </button>
          </form>
        </div>
        
        {message.text && (
          <div className={`message-toast ${message.type}`}>
            {message.text}
          </div>
        )}
      </div>

 
    </section>
  );
};

export default Subscribe;
