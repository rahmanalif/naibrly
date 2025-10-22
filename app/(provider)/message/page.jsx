"use client"
import React from "react";

const Message = () => {
    // Example messages with all info
    const other_message = [
        {
            id: 1,
            name: "Alice",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "Hi, are you available for work tomorrow?",
            time: "1:44 PM",
        },
        {
            id: 2,
            name: "Alice",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "In the morning time are you available?",
            time: "1:44 PM",
        },
        {
            id: 3,
            name: "Alice",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "Nice work. OK, see you tomorrow",
            time: "1:44 PM",
        },
    ];

    const user_message = [
        {
            id: 1,
            name: "John",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
            text: "Yes, tomorrow I will come in the morning.",
            time: "1:44 PM",
        },
        {
            id: 2,
            name: "John",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
            text: "Yes, mam I am available in this time.",
            time: "1:44 PM",
        },
        {
            id: 3,
            name: "John",
            avatar: "https://randomuser.me/api/portraits/men/75.jpg",
            text: "ok. see you",
            time: "1:44 PM",
        },
    ];

    // this is for handle submit 
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData)
        console.log(data.sent);
    }

    // Merge messages by time or id if you want to display chronologically
    // For simplicity, let's show other messages first, then user messages
    return (
        <div className="flex flex-col mx-6 lg:mx-[140px] justify-between relative">
            <div className="message_layout my-10">
                <div className="flex justify-between mx-6 gap-6 lg:gap-0 lg:mx-[142px] py-[50px]">
                    {/* this is for other message */}
                    <div className="flex flex-col gap-[71px]">
                        {other_message.map((msg, index) => {
                            return (
                                <div key={index} className="flex flex-col gap-[5px]">
                                    <div className="flex items-center gap-[5px]" >
                                        <img className="user_icon" src={msg.avatar} alt="" />
                                        <p className="other_message">{msg.text}</p>
                                    </div>
                                    <p className="flex items-center gap-2">
                                        <span className="text-[#7D7D7D] text-[12px]">
                                            {msg.time}
                                        </span>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    {/* this is for user message */}
                    <div className="flex flex-col gap-[81px]">
                        {user_message.map((msg, index) => {
                            return (
                                <div key={index} className="flex flex-col items-end gap-[5px]">
                                    <div className="flex items-center justify-end gap-[5px]">
                                        <p className="our_message">{msg.text}</p>
                                        <img className="user_icon" src={msg.avatar} alt="" />
                                    </div>
                                    <p className="flex items-center gap-2">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M13.7446 5.29331C13.3566 4.90137 12.7244 4.89643 12.3304 5.28229L4.93869 12.5807L1.72547 9.2574C1.34223 8.85836 0.707761 8.84526 0.30837 9.22813C-0.0910637 9.611 -0.104174 10.2449 0.279067 10.6439L0.284233 10.6492L4.20208 14.7054C4.2949 14.8 4.4056 14.8753 4.52775 14.9268C4.6499 14.9784 4.78108 15.0052 4.91369 15.0058H4.92472C5.18751 15.005 5.43946 14.901 5.6263 14.7164L13.7355 6.70612C14.1273 6.31796 14.1313 5.68645 13.7446 5.29331ZM10.2156 14.7054C10.3082 14.7998 10.4186 14.8749 10.5404 14.9265C10.6621 14.978 10.7929 15.005 10.9252 15.0058H10.9362C11.199 15.005 11.451 14.901 11.6378 14.7164L19.7471 6.70612C20.1147 6.29264 20.0771 5.65978 19.6633 5.29257C19.2881 4.95966 18.7243 4.95528 18.3439 5.28229L10.9553 12.5807L10.6917 12.3073C10.3085 11.9083 9.67399 11.8951 9.27456 12.278C8.87512 12.6608 8.86197 13.2947 9.24521 13.6937L9.25042 13.6991L10.2156 14.7054Z" fill="#7A7A7A" />
                                            </svg>
                                        </span>
                                        <span className="text-[#7D7D7D] text-[12px]">
                                            {msg.time}
                                        </span>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* this is for message part  */}
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center pb-[50px] pt-[145px] gap-3">
                        {/* this is messge input */}
                        <input type="text" name="sent" className="message_input" placeholder="Type Something...." />
                        {/* this is message sent button */}
                        <button type="submit" className="message_sent_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <g clip-path="url(#clip0_845_42770)">
                                    <path d="M9.16406 12.8333L19.2474 2.75" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.2473 2.75L13.2889 19.25C13.2487 19.3378 13.1841 19.4121 13.1029 19.4643C13.0216 19.5164 12.9271 19.5441 12.8306 19.5441C12.734 19.5441 12.6395 19.5164 12.5583 19.4643C12.477 19.4121 12.4125 19.3378 12.3723 19.25L9.16392 12.8333L2.74726 9.625C2.65949 9.58478 2.58512 9.52021 2.53298 9.43896C2.48084 9.35772 2.45312 9.26321 2.45312 9.16667C2.45312 9.07013 2.48084 8.97562 2.53298 8.89437C2.58512 8.81312 2.65949 8.74855 2.74726 8.70833L19.2473 2.75Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_845_42770">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </form>

                {/* this part is for auto message*/}
                <div className="absolute flex flex-col gap-[6px] bottom-[86px] right-[142px]">
                    <input className="auto_message" type="text" placeholder="automated answer" />
                    <p className="auto_message">Yes, tomorrow i will come in the morning.</p>
                    <p className="auto_message">Yes, mam i am available in this
                        time.</p>
                    <p className="auto_message">ok. see you</p>
                </div>
            </div>
        </div>
    );
};

export default Message;
// some issue ...