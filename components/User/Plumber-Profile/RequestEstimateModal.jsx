"use client";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export default function RequestEstimateModal({ isOpen, onClose, onSuccess, serviceName }) {
    const [formData, setFormData] = useState({
        problem: '',
        note: '',
        date: '',
        time: '00:00'
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.problem || !formData.note || !formData.date || !formData.time) {
            alert('Please fill in all fields');
            return;
        }

        // Call success callback to show success modal
        onSuccess();
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-center font-bold">
                        {serviceName || 'Appliance Repairs'}
                    </DialogTitle>
                    <p className="text-center text-sm text-gray-600 mt-2">
                        Average response time: 10 minutes (by Jacob Maicle)
                    </p>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-5 mt-4">
                    {/* Problem Field */}
                    <div>
                        <label className="text-sm font-semibold text-gray-900 mb-2 block">
                            Problem<span className="text-red-500">*</span>
                        </label>
                        <Input
                            type="text"
                            placeholder="Type here"
                            value={formData.problem}
                            onChange={(e) => handleChange('problem', e.target.value)}
                            className="w-full"
                        />
                    </div>

                    {/* Note Field */}
                    <div>
                        <label className="text-sm font-semibold text-gray-900 mb-2 block">
                            Note<span className="text-red-500">*</span>
                        </label>
                        <Textarea
                            placeholder="Type here"
                            value={formData.note}
                            onChange={(e) => handleChange('note', e.target.value)}
                            className="w-full min-h-[100px] resize-none"
                        />
                    </div>

                    {/* Date Field */}
                    <div>
                        <label className="text-sm font-semibold text-gray-900 mb-2 block">
                            Date<span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <Input
                                type="date"
                                value={formData.date}
                                onChange={(e) => handleChange('date', e.target.value)}
                                className="w-full pr-10"
                                placeholder="Select date"
                            />
                            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Time Field */}
                    <div>
                        <label className="text-sm font-semibold text-gray-900 mb-2 block">
                            Approximately time<span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <Input
                                type="time"
                                value={formData.time}
                                onChange={(e) => handleChange('time', e.target.value)}
                                className="w-full pr-10"
                            />
                            <svg
                                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                                <path d="M12 6V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 text-base"
                    >
                        Request Sent
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
