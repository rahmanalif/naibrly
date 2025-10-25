'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MoreVertical, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function QuickChatMessaging({
  request,
  onCancel,
  status = 'accepted', // 'accepted', 'done', 'cancelled'
  cancellationReason = null,
  cancelledBy = null // 'user' or 'provider'
}) {
  const [message, setMessage] = useState('');
  const [quickChats, setQuickChats] = useState([
    'Can you provide an update on when the service will start?',
    'Can you please confirm the details of the service before we begin?',
    'Can you provide an update on when the service will start?'
  ]);

  // Sample chat messages
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'Mike',
      message: 'Hi Bryan, our priorities have just changed 😊',
      timestamp: '14 days ago',
      isUser: false
    },
    {
      id: 2,
      sender: 'Bryan',
      message: 'No problem, I\'m listening for the changes ✨',
      timestamp: '5 days ago',
      isUser: true
    },
    {
      id: 3,
      sender: 'Mike',
      message: 'Can you prioritize the task from yesterday ⚠️',
      timestamp: '3 days ago',
      isUser: false
    },
    {
      id: 4,
      sender: 'Bryan',
      message: 'Consider it done Mike ✔️',
      timestamp: '1 days ago',
      isUser: true
    }
  ]);

  // Handle clicking on a quick chat box to send it as a message
  const handleQuickChatClick = (chat) => {
    const newMessage = {
      id: chatMessages.length + 1,
      sender: 'You',
      message: chat,
      timestamp: 'Just now',
      isUser: true
    };
    setChatMessages([...chatMessages, newMessage]);
  };

  // Handle adding text from input to quick chats
  const handleAddQuickChat = () => {
    if (message.trim()) {
      setQuickChats([...quickChats, message]);
      setMessage('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Service Header */}
      <div className="bg-gray-50 p-4 border-b border-gray-200 flex gap-4">
        {/* Image */}
        <div className="shrink-0">
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-200">
            <Image
              src={request.image}
              alt={request.title}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header with title, status, and cancel button */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-gray-900">{request.title}</h3>
              {status === 'accepted' && (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-600">
                  • Accepted
                </span>
              )}
              {status === 'done' && (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                  • Done
                </span>
              )}
              {status === 'cancelled' && (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-600">
                  • Cancelled
                </span>
              )}
            </div>
            {status === 'accepted' && (
              <Button
                onClick={onCancel}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 h-8 text-sm rounded-md"
              >
                Cancel
              </Button>
            )}
          </div>

          {/* Description */}
          <p className="text-xs text-gray-600 mb-2 line-clamp-2">
            {request.description}
          </p>

          {/* Price, Rating, and Date */}
          <div className="flex items-center gap-3 text-xs">
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
          <div className="mt-1 text-xs text-gray-500">
            Date : {request.date}
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 space-y-3 max-h-64 overflow-y-auto bg-gray-50">
        {chatMessages.map((msg) => (
          <div key={msg.id} className={`flex gap-2 ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            {!msg.isUser && (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold text-gray-700 shrink-0">
                {msg.sender[0]}
              </div>
            )}
            <div className={`max-w-md ${msg.isUser ? 'order-first' : ''}`}>
              <div className={`px-4 py-2 rounded-lg ${msg.isUser ? 'bg-teal-600 text-white' : 'bg-gray-800 text-white'}`}>
                {!msg.isUser && (
                  <div className="text-xs font-semibold mb-1">{msg.sender}</div>
                )}
                <div className="text-sm">{msg.message}</div>
              </div>
              <div className={`text-xs text-gray-500 mt-1 ${msg.isUser ? 'text-right' : ''}`}>
                {msg.timestamp} {msg.isUser && 'Bryan'}
              </div>
            </div>
            {msg.isUser && (
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-xs font-semibold text-white shrink-0">
                {msg.sender[0]}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Chats - Only show for accepted status */}
      {status === 'accepted' && (
        <div className="p-4 bg-white border-t border-gray-200">
          {quickChats.length > 0 && (
            <div className="space-y-2 mb-3">
              {quickChats.map((chat, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-yellow-100 transition-colors"
                  onClick={() => handleQuickChatClick(chat)}
                >
                  <p className="text-sm text-gray-700 flex-1">{chat}</p>
                  <button
                    className="text-gray-400 hover:text-gray-600 ml-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Remove quick chat
                      setQuickChats(quickChats.filter((_, i) => i !== index));
                    }}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Message Input with Add Quick Chats Button */}
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddQuickChat()}
              placeholder="Add a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <Button
              onClick={handleAddQuickChat}
              variant="outline"
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-6 h-10 rounded-lg font-medium whitespace-nowrap"
            >
              Add Quick Chats
            </Button>
          </div>
        </div>
      )}

      {/* Cancellation Reason - Show for cancelled or done status */}
      {(status === 'cancelled' || status === 'done') && cancellationReason && (
        <div className="p-6 bg-white border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600 mb-2">
            The service was no longer required due to unforeseen circumstances.
          </p>
          <p className="text-sm font-medium text-gray-900">
            Cancellation reason provided by {cancelledBy === 'user' ? 'you' : (cancelledBy || 'Jacob')}.
          </p>
          <p className="text-xs text-gray-500 mt-2">1:44 PM</p>
        </div>
      )}
    </div>
  );
}
