'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    cellNumber: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ firstName: '', email: '', cellNumber: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError('Failed to submit form. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="hero"
      className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 bg-crimson text-white"
      style={{ backgroundColor: '#98243A' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-primary mb-6 leading-tight">
            You Know Your Craft. Now Learn How to Sell It.
          </h1>
          <p className="text-lg md:text-xl font-secondary max-w-3xl mx-auto leading-relaxed">
            30 years of small business coaching. Now in your pocket. Sales training built for Los Angeles small business owners who want government and private sector contracts.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <form
            onSubmit={handleSubmit}
            className="form-card"
            style={{ borderColor: '#98243A' }}
          >
            {success ? (
              <div className="text-center py-8">
                <p className="text-green-600 text-lg font-bold">
                  ✓ You're in. Check your email and download the app below.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-input text-black"
                    placeholder="John"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2">
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
                  <label className="block text-black text-sm font-bold mb-2">
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

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold"
                >
                  {loading ? 'Submitting...' : 'Get Free Access Tips + Start Your 7-Day Trial'}
                </button>

                {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
              </>
            )}
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
          <a
            href="https://apps.apple.com/us/app/ask-jack-at-igpc/id6468837240"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-90"
          >
            <Image
              src="/apple-badge.png"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="h-16 w-auto"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.pacwm722gscf.p2yg7t8dapp&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-90"
          >
            <Image
              src="/google-badge.png"
              alt="Get it on Google Play"
              width={180}
              height={60}
              className="h-16 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
