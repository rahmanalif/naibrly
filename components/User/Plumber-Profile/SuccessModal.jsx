"use client";
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function SuccessModal({ isOpen, onClose }) {
    const router = useRouter();

    const handleGoHome = () => {
        onClose();
        router.push('/');
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[565px]" showCloseButton={false}>
                {/* Hidden title for accessibility */}
                <DialogTitle className="sr-only">Request Submitted Successfully</DialogTitle>

                <div className="flex flex-col items-center justify-center py-8 px-4">
                    {/* Success Icon */}
                    <div className="mb-6 relative">
                        {/* Shadow effect */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-gray-200 rounded-full blur-sm opacity-50"></div>

                        {/* Check circle */}
                        <div className="relative w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center bg-white">
                            <svg
                                className="w-10 h-10 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 13l4 4L19 7"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Success Message */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">
                        Your request has been submitted
                    </h2>

                    <p className="text-sm text-gray-600 text-center mb-8">
                        Average response time: 10 minutes (by Jacob Maicle)
                    </p>

                    {/* Go Home Button */}
                    <Button
                        onClick={handleGoHome}
                        className="w-full max-w-xs bg-teal-600 hover:bg-teal-700 text-white font-semibold py-6 text-base"
                    >
                        Go Home
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
