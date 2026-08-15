'use client';

import { useState } from 'react';

export default function ContactScene({ isActive }: { isActive: boolean }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING...');

    // TODO: Implement actual form submission
    setTimeout(() => {
      setStatus('MESSAGE SENT ✓');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('');
        setShowForm(false);
      }, 3000);
    }, 1000);
  };

  if (!isActive) return null;

  return (
    <div className="flex items-center justify-start h-full px-16 tracking-wider">
      <div className="max-w-2xl w-full text-left">
        {!showForm ? (
          // Contact Menu - No Box
          <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:your.email@example.com"
                className="block group"
              >
                <div className="flex items-center justify-between border-b border-white/20 pb-4 transition-all hover:border-gta-pink">
                  <div>
                    <div className="text-sm text-gta-pink font-pricedown mb-1">EMAIL</div>
                    <div className="text-xl font-pricedown text-white group-hover:text-gta-pink transition-colors">
                      your.email@example.com
                    </div>
                  </div>
                  <div className="text-gta-pink text-2xl">→</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center justify-between border-b border-white/20 pb-4 transition-all hover:border-gta-pink">
                  <div>
                    <div className="text-sm text-gta-pink font-pricedown mb-1">LINKEDIN</div>
                    <div className="text-xl font-pricedown text-white group-hover:text-gta-pink transition-colors">
                      /in/yourprofile
                    </div>
                  </div>
                  <div className="text-gta-pink text-2xl">→</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center justify-between border-b border-white/20 pb-4 transition-all hover:border-gta-pink">
                  <div>
                    <div className="text-sm text-gta-pink font-pricedown mb-1">GITHUB</div>
                    <div className="text-xl font-pricedown text-white group-hover:text-gta-pink transition-colors">
                      @yourhandle
                    </div>
                  </div>
                  <div className="text-gta-pink text-2xl">→</div>
                </div>
              </a>

              {/* Message Me Button */}
              <button
                onClick={() => setShowForm(true)}
                className="w-full group"
              >
                <div className="flex items-center justify-between border-b-4 border-gta-pink pb-4 transition-all hover:border-white">
                  <div className="text-left">
                    <div className="text-sm text-gta-pink font-pricedown mb-1">MESSAGE ME</div>
                    <div className="text-xl font-pricedown text-white group-hover:text-gta-pink transition-colors">
                      Send a direct message
                    </div>
                  </div>
                  <div className="text-gta-pink text-2xl group-hover:text-white transition-colors">✉</div>
                </div>
              </button>
            </div>
        ) : (
          // Message Form - Centered
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="glass border-l-4 border-gta-pink p-8 max-w-lg w-full mx-4 rounded-lg">
              <button
                onClick={() => setShowForm(false)}
                className="mb-6 text-white hover:text-gta-pink transition-colors font-pricedown text-xl text-left"
              >
                ← BACK
              </button>

              <h3 className="text-3xl font-pricedown text-gta-pink mb-6 text-left">SEND MESSAGE</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gta-pink font-pricedown mb-2">NAME</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/40 border-l-4 border-gta-pink px-4 py-3 font-pricedown text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gta-pink font-pricedown mb-2">EMAIL</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/40 border-l-4 border-gta-pink px-4 py-3 font-pricedown text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gta-pink font-pricedown mb-2">MESSAGE</label>
                  <textarea
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-black/40 border-l-4 border-gta-pink px-4 py-3 font-pricedown text-white placeholder-white/40 focus:border-white focus:outline-none resize-none transition-colors rounded-lg"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gta-pink text-white font-pricedown text-2xl py-4 px-6 hover:bg-white hover:text-black transition-colors rounded-lg"
                >
                  SEND MESSAGE
                </button>

                {status && (
                  <div className="text-center text-gta-pink font-pricedown text-xl mt-4">
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
