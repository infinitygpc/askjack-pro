'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cellNumber: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ fullName: '', email: '', cellNumber: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-crimson font-bold text-sm md:text-base mb-2 font-primary">
            CONTACT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black font-primary">
            Get in Touch With Jack
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          {success ? (
            <div className="text-center py-8 bg-green-50 rounded-lg">
              <p className="text-green-600 text-lg font-bold">
                ✓ Message sent. Jack will follow up with you directly.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <label className="block text-black text-sm font-bold mb-2 font-primary">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="form-input text-black"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label className="block text-black text-sm font-bold mb-2 font-primary">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input text-black"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-black text-sm font-bold mb-2 font-primary">
                  Cell Number
                </label>
                <input
                  type="tel"
                  name="cellNumber"
                  value={formData.cellNumber}
                  onChange={handleChange}
                  required
                  className="form-input text-black"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="mb-6">
                <label className="block text-black text-sm font-bold mb-2 font-primary">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-input text-black resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button type="submit" disabled={loading} className="btn-crimson w-full">
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
            </>
          )}
        </form>
      </div>
    </section>
  );
}
