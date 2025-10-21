'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MessageSquare, Mail } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className=" bg-white">
      {/* Privacy Section */}
      <div className="max-w-6xl mx-auto px-4 py-2">
        <h1 className="text-4xl font-bold text-center mb-12">Privacy at Naibrly.</h1>
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            We know how important it is for users to know their personal information is handled carefully. At Thumbtack, we utilize 
            safety and security practices like encryption, passwords, and physical security measures to protect your personal information 
            from unauthorized access or disclosure. <a href="#" className="text-[#0E7A60] hover:underline">View our full privacy policy here.</a>
          </p>
        </div>

        {/* Dedicated Support Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-4">
          <div>
            <h2 className="text-3xl font-bold mb-8">Dedicated support.</h2>
            
            <p className="text-gray-700 mb-2">
              Our team of support specialists is available to provide the highest  
            </p>
            <p className="text-gray-700 mb-2">
             quality of customer service in English and Spanish.
            </p>

            <p className="text-gray-700 ">
              Always <a href="#" className="text-[#0E7A60] hover:underline">report concerns</a> as soon as possible so we can look into 
            </p>

            <p className="text-gray-700 mb-2">
             them promptly.
            </p>


            <div className="space-">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Phone size={18} /> Call us.
                </h3>
                <p className="text-gray-600 mb-1">8am-5pm Monday-Friday</p>
                <p className="text-[#0E7A60]  font-mono">(***)***-*****: </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MessageSquare size={18} /> Text us.
                </h3>
                <p className="text-[#0E7A60] ">(415) 299-6398</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Mail size={18} /> Email us.
                </h3>
                <p className="text-[#0E7A60] ">support@Naibrly.com</p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <img 
                src="/Support/support (2).jpg" 
                alt="Support team with headsets" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg h-80">
            <img 
              src="/Support/support (3).png" 
              alt="Teamwork and unity" 
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-lg border-gray-200"
              />
              <Input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="rounded-lg border-gray-200"
              />
              <Textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="rounded-lg border-gray-200 min-h-32 resize-none"
              />
              <div className="flex justify-center">
              <Button
                type="submit"
                className="w-1/2 bg-green-500 hover:bg-green-600 text-white text-lg py-6 rounded-lg font-semibold"
              >
                Send
              </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}