import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_default',
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_default',
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'key_default'
};

// Temporary: Add your actual EmailJS credentials here for production
// Remove this after setting up Vercel environment variables
if (process.env.NODE_ENV === 'production' && 
    EMAILJS_CONFIG.SERVICE_ID === 'service_default') {
  // Replace these with your actual EmailJS credentials
  EMAILJS_CONFIG.SERVICE_ID = 'your_service_id_here';
  EMAILJS_CONFIG.TEMPLATE_ID = 'your_template_id_here';
  EMAILJS_CONFIG.PUBLIC_KEY = 'your_public_key_here';
}

// Initialize EmailJS only if configuration is available
if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'key_default') {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
}

export const sendEmail = async (formData) => {
  try {
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('All fields are required');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address');
    }

    // Check if EmailJS is properly configured
    if (!EMAILJS_CONFIG.SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID === 'service_default' || 
        !EMAILJS_CONFIG.TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID === 'template_default' ||
        !EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY === 'key_default') {
      // Fallback: simulate email sending for demo purposes
      console.log('EmailJS not configured. Simulating email send:', {
        from: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        to: 'vishwa29patel.cg@gmail.com',
        timestamp: new Date().toLocaleString()
      });
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        success: true,
        message: "Demo mode: Email service not configured. Please contact directly at vishwa29patel.cg@gmail.com"
      };
    }

    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      message: formData.message.trim(),
      to_email: 'vishwa29patel.cg@gmail.com',
      reply_to: formData.email.trim(),
      subject: `New message from ${formData.name.trim()} - Portfolio Contact Form`,
      timestamp: new Date().toLocaleString()
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return {
      success: true,
      message: "Message sent successfully!"
    };

  } catch (error) {
    let errorMessage = 'Failed to send message. Please try again.';

    if (error.text) {
      errorMessage = error.text;
    } else if (error.message) {
      errorMessage = error.message;
    } else if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
      errorMessage = 'Email service not configured. Please check your environment variables.';
    }

    return {
      success: false,
      error: errorMessage
    };
  }
};

// ✅ FIXED to match your Connect.jsx
export const validateFormData = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  if (!formData.email) {
    errors.email = 'Email is required';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return errors; // ✅ important fix
};

export default emailjs;