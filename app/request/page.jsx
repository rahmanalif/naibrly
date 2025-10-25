'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PendingConfirmationModal from '@/components/Global/Modals/PendingConfirmationModal';
import QuickChatMessaging from '@/components/Global/Modals/QuickChatMessaging';
import CancelRequestModal from '@/components/Global/Modals/CancelRequestModal';
import RequestAmountCard from '@/components/Global/Modals/RequestAmountCard';
import ReviewAndConfirm from '@/components/Global/Modals/ReviewAndConfirm';
import PaymentInformationModal from '@/components/Global/Modals/PaymentInformationModal';
import TaskCompletedModal from '@/components/Global/Modals/TaskCompletedModal';

export default function RequestPage() {
  const [activeTab, setActiveTab] = useState('open');
  const [showPendingModal, setShowPendingModal] = useState(false);
  const [selectedAcceptedRequest, setSelectedAcceptedRequest] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showTaskCompletedModal, setShowTaskCompletedModal] = useState(false);

  // Request flow states
  const [requestFlowState, setRequestFlowState] = useState('accepted');
  // 'accepted' -> 'provider-accepted' -> 'payment' -> 'done' or 'cancelled'
  const [requestAmountStatus, setRequestAmountStatus] = useState('waiting'); // 'waiting' or 'accepted'

  // Sample request data
  const openRequests = [
    {
      id: 1,
      title: 'Appliance Repairs',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      avgPrice: '$63/hr',
      rating: 5.0,
      reviews: 1513,
      date: '18 Sep, 14:00',
      status: 'Accepted',
      statusColor: 'text-green-600',
      statusBg: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=200&h=200&fit=crop',
      amount: 500
    },
    {
      id: 2,
      title: 'Appliance Repairs',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      avgPrice: '$63/hr',
      rating: 5.0,
      reviews: 1513,
      date: '18 Sep, 14:00',
      status: 'Pending',
      statusColor: 'text-orange-600',
      statusBg: 'bg-orange-50',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=200&h=200&fit=crop'
    }
  ];

  const closedRequests = [
    {
      id: 3,
      title: 'Appliance Repairs',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      avgPrice: '$63/hr',
      rating: 5.0,
      reviews: 1513,
      date: '18 Sep, 14:00',
      status: 'Done',
      statusColor: 'text-gray-700',
      statusBg: 'bg-gray-100',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=200&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Appliance Repairs',
      description: 'Drain pipe leaking, pipe clogged, replace the pipe line',
      avgPrice: '$63/hr',
      rating: 5.0,
      reviews: 1513,
      date: '18 Sep, 14:00',
      status: 'Cancel',
      statusColor: 'text-red-600',
      statusBg: 'bg-red-50',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=200&h=200&fit=crop'
    }
  ];

  const handlePendingClick = () => {
    setShowPendingModal(true);
  };

  const handleAcceptedClick = (request) => {
    setSelectedAcceptedRequest(request);
    setRequestFlowState('accepted');
    setRequestAmountStatus('waiting');
  };

  const handleCancelRequest = (note) => {
    console.log('Request cancelled with note:', note);
    setRequestFlowState('cancelled');
    setShowCancelModal(false);
  };

  const handleAcceptRequestAmount = () => {
    setRequestAmountStatus('accepted');
    setRequestFlowState('provider-accepted');
  };

  const handleConfirmAndPayment = (total) => {
    console.log('Total amount:', total);
    setShowPaymentModal(true);
  };

  const handlePaymentConfirm = (paymentInfo) => {
    console.log('Payment info:', paymentInfo);
    setShowPaymentModal(false);
    setShowTaskCompletedModal(true);
  };

  const handleTaskCompleted = (feedback) => {
    console.log('Task feedback:', feedback);
    setRequestFlowState('done');
    setShowTaskCompletedModal(false);
  };

  const RequestCard = ({ request }) => {
    const isPending = request.status === 'Pending';
    const isAccepted = request.status === 'Accepted';
    const isDone = request.status === 'Done';
    const isCancelled = request.status === 'Cancel';

    return (
      <div
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => {
          if (isPending) handlePendingClick();
          else if (isAccepted) handleAcceptedClick(request);
          else if (isDone) {
            setSelectedAcceptedRequest(request);
            setRequestFlowState('done');
          }
          else if (isCancelled) {
            setSelectedAcceptedRequest(request);
            setRequestFlowState('cancelled');
          }
        }}
      >
        <div className="flex gap-4">
          {/* Image */}
          <div className="shrink-0">
            <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={request.image}
                alt={request.title}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Header with title and status */}
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{request.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${request.statusBg} ${request.statusColor} whitespace-nowrap ml-2`}>
                {request.status === 'Accepted' && '• Accepted'}
                {request.status === 'Pending' && '• Pending'}
                {request.status === 'Done' && '• Done'}
                {request.status === 'Cancel' && '• Cancelled'}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
              {request.description}
            </p>

            {/* Price, Rating, and Date */}
            <div className="flex items-center gap-4 text-sm">
              <div>
                <span className="font-semibold text-gray-900">Avg. price: </span>
                <span className="text-gray-700">{request.avgPrice}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>
                <span className="font-medium text-gray-900">{request.rating}</span>
                <span className="text-gray-500">({request.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>

            {/* Date */}
            <div className="mt-2 text-sm text-gray-500">
              Date : {request.date}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('open')}
              className={`px-12 py-3 rounded-lg font-medium text-base transition-all ${
                activeTab === 'open'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400'
              }`}
            >
              Open
            </button>
            <button
              onClick={() => setActiveTab('closed')}
              className={`px-12 py-3 rounded-lg font-medium text-base transition-all ${
                activeTab === 'closed'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400'
              }`}
            >
              Closed
            </button>
          </div>

          {/* Request Cards or Messaging */}
          <div className="space-y-6">
            {selectedAcceptedRequest ? (
              /* Show messaging interface when an accepted request is clicked */
              <>
                <QuickChatMessaging
                  request={selectedAcceptedRequest}
                  onCancel={() => setShowCancelModal(true)}
                  status={requestFlowState}
                  cancellationReason={requestFlowState === 'cancelled' || requestFlowState === 'done' ? 'The service was no longer required due to unforeseen circumstances.' : null}
                  cancelledBy={requestFlowState === 'cancelled' ? 'user' : requestFlowState === 'done' ? 'provider' : null}
                />

                {/* Request Amount Card - Show only in accepted or provider-accepted state */}
                {(requestFlowState === 'accepted' || requestFlowState === 'provider-accepted') && (
                  <RequestAmountCard
                    request={selectedAcceptedRequest}
                    onCancel={() => setShowCancelModal(true)}
                    onAccept={handleAcceptRequestAmount}
                    status={requestAmountStatus}
                  />
                )}

                {/* Review and Confirm - Show only when provider has accepted */}
                {requestFlowState === 'provider-accepted' && requestAmountStatus === 'accepted' && (
                  <ReviewAndConfirm
                    amount={selectedAcceptedRequest.amount}
                    onConfirm={handleConfirmAndPayment}
                  />
                )}
              </>
            ) : (
              /* Show request cards when no accepted request is selected */
              <>
                {activeTab === 'open' && openRequests.map((request) => (
                  <RequestCard key={request.id} request={request} />
                ))}
                {activeTab === 'closed' && closedRequests.map((request) => (
                  <RequestCard key={request.id} request={request} />
                ))}
              </>
            )}
          </div>

          {/* Empty State */}
          {!selectedAcceptedRequest && ((activeTab === 'open' && openRequests.length === 0) ||
            (activeTab === 'closed' && closedRequests.length === 0)) && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No requests found</p>
            </div>
          )}

          {/* Back button when viewing messaging */}
          {selectedAcceptedRequest && (
            <button
              onClick={() => setSelectedAcceptedRequest(null)}
              className="mt-4 px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
            >
              Back to Requests
            </button>
          )}
        </div>
      </div>

      {/* Pending Confirmation Modal */}
      <PendingConfirmationModal
        isOpen={showPendingModal}
        onClose={() => setShowPendingModal(false)}
      />

      {/* Cancel Request Modal */}
      <CancelRequestModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancelRequest}
      />

      {/* Payment Information Modal */}
      <PaymentInformationModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onConfirm={handlePaymentConfirm}
      />

      {/* Task Completed Modal */}
      <TaskCompletedModal
        isOpen={showTaskCompletedModal}
        onClose={() => setShowTaskCompletedModal(false)}
        onSubmit={handleTaskCompleted}
        providerName="Jacob Malcle"
      />
    </>
  );
}
