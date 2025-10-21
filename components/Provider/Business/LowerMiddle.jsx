import { ThumbsDown } from 'lucide-react';

export default function HowNaibrlyDifferent() {
    const features = [
        {
            feature: "Customers choose pros directly",
            good: true,
            bad: true
        },
        {
            feature: "Pros control their pricing",
            good: true,
            bad: true
        },
        {
            feature: "Direct customer communication",
            good: true,
            bad: true
        },
        {
            feature: "Limited competition per lead",
            good: true,
            bad: true
        },
        {
            feature: "No hidden fees or contracts",
            good: true,
            bad: true
        },
        {
            feature: "Free pro Community",
            good: true,
            bad: true
        }
    ];

    return (
        <div className="w-full bg-white ">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-normal text-center mb-16 text-black font-inter not-italic leading-normal">How to Naibrly is different:</h1>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2 border-gray-200">
                                <th className="py-4 px-6 text-black text-left font-inter text-2xl not-italic font-semibold leading-[30px]">Features</th>
                                <th className="py-4 px-6 text-black text-center font-inter text-2xl not-italic font-semibold leading-[30px]">Good Services</th>
                                <th className="py-4 px-6 text-black text-center font-inter text-2xl not-italic font-semibold leading-[30px]">Bad Services</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((item, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="py-4 px-6 text-black  font-inter text-2xl not-italic font-normal leading-[30px]">{item.feature}</td>
                                    <td className="py-4 px-6 text-center">
                                        <div className="flex justify-center">
                                            <div className=" p-3 rounded-lg">
                                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M28.75 12.7344C28.75 12.0713 28.4866 11.4354 28.0178 10.9666C27.5489 10.4978 26.913 10.2344 26.25 10.2344H18.35L19.55 4.52187C19.575 4.39687 19.5875 4.25937 19.5875 4.12187C19.5875 3.60937 19.375 3.13437 19.0375 2.79687L17.7125 1.48438L9.4875 9.70937C9.025 10.1719 8.75 10.7969 8.75 11.4844V23.9844C8.75 24.6474 9.01339 25.2833 9.48223 25.7521C9.95107 26.221 10.587 26.4844 11.25 26.4844H22.5C23.5375 26.4844 24.425 25.8594 24.8 24.9594L28.575 16.1469C28.6875 15.8594 28.75 15.5594 28.75 15.2344V12.7344ZM1.25 26.4844H6.25V11.4844H1.25V26.4844Z" fill="#0E7A60" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <div className="flex justify-center">
                                            <div className=" p-3 rounded-lg">
                                                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.75 15.9844V0.984375H27.75V15.9844H22.75ZM17.75 0.984375C18.413 0.984375 19.0489 1.24777 19.5178 1.71661C19.9866 2.18545 20.25 2.82133 20.25 3.48438V15.9844C20.25 16.6719 19.975 17.2969 19.5125 17.7469L11.2875 25.9844L9.9625 24.6594C9.625 24.3219 9.4125 23.8594 9.4125 23.3344L9.45 22.9469L10.6375 17.2344H2.75C2.08696 17.2344 1.45107 16.971 0.982233 16.5021C0.513392 16.0333 0.25 15.3974 0.25 14.7344V12.2344C0.25 11.9094 0.3125 11.6094 0.425 11.3219L4.2 2.50937C4.575 1.60937 5.4625 0.984375 6.5 0.984375H17.75ZM17.75 3.48438H6.4625L2.75 12.2344V14.7344H13.725L12.3125 21.3844L17.75 15.9469V3.48438Z" fill="black" />
                                                </svg>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}