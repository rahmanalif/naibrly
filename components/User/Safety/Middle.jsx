'use client';


export default function NaibrlyGuarantee() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Title */}
        <h2
          style={{
            color: '#404040',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontSize: '36.7px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: '44px'
          }}
          className="text-center mb-8"
        >
          Our Naibrly Guarantee.
        </h2>

        {/* Description */}
        <p
          style={{
            color: '#404040',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontSize: '20.2px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '28px'
          }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          We want you to be thrilled with every pro you find and every project you get done on Thumbtack,
          but we know that life is unpredictable and pros are human. If anything happens, we'll work to make
          it right through our <span className="text-teal-600 font-medium">Naibrly Guarantee</span>.
        </p>

        {/* Guarantees Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Money-Back Guarantee */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2.41016C12.0184 2.40833 10.0673 2.89857 8.32194 3.83689C6.57656 4.77521 5.09148 6.13223 4 7.78616V6.41016C4 6.14494 3.89464 5.89059 3.70711 5.70305C3.51957 5.51552 3.26522 5.41016 3 5.41016C2.73478 5.41016 2.48043 5.51552 2.29289 5.70305C2.10536 5.89059 2 6.14494 2 6.41016V11.4102H7C7.554 11.4102 8 10.9632 8 10.4102C8 9.85716 7.554 9.41016 7 9.41016H5.354C5.44 9.25916 5.521 9.10216 5.617 8.95616C6.52388 7.55898 7.76607 6.41103 9.23032 5.61698C10.6946 4.82294 12.3343 4.40805 14 4.41016C19.515 4.41016 24 8.89616 24 14.4102C24 19.9242 19.515 24.4102 14 24.4102C12.6864 24.4137 11.3851 24.1567 10.1716 23.6539C8.95799 23.1512 7.85621 22.4127 6.93 21.4812C6.7414 21.299 6.4888 21.1982 6.2266 21.2005C5.9644 21.2028 5.71359 21.3079 5.52818 21.4933C5.34277 21.6788 5.2376 21.9296 5.23533 22.1918C5.23305 22.454 5.33384 22.7066 5.516 22.8952C6.62749 24.0129 7.94963 24.8991 9.40591 25.5025C10.8622 26.1058 12.4237 26.4143 14 26.4102C20.617 26.4102 26 21.0272 26 14.4102C26 7.79316 20.617 2.41016 14 2.41016ZM14 7.41016C13.7348 7.41016 13.4804 7.51552 13.2929 7.70305C13.1054 7.89059 13 8.14495 13 8.41016V9.41016C11.347 9.41016 10 10.7562 10 12.4102C10 14.0642 11.347 15.4102 13 15.4102H15C15.2652 15.4102 15.5196 15.5155 15.7071 15.7031C15.8946 15.8906 16 16.1449 16 16.4102C16 16.6754 15.8946 16.9297 15.7071 17.1173C15.5196 17.3048 15.2652 17.4102 15 17.4102H11.5C11.2348 17.4102 10.9804 17.5155 10.7929 17.7031C10.6054 17.8906 10.5 18.1449 10.5 18.4102C10.5 18.6754 10.6054 18.9297 10.7929 19.1173C10.9804 19.3048 11.2348 19.4102 11.5 19.4102H13V20.4102C13 20.6754 13.1054 20.9297 13.2929 21.1173C13.4804 21.3048 13.7348 21.4102 14 21.4102C14.2652 21.4102 14.5196 21.3048 14.7071 21.1173C14.8946 20.9297 15 20.6754 15 20.4102V19.4102C16.654 19.4102 18 18.0642 18 16.4102C18 14.7562 16.654 13.4102 15 13.4102H13C12.7348 13.4102 12.4804 13.3048 12.2929 13.1173C12.1054 12.9297 12 12.6754 12 12.4102C12 12.1449 12.1054 11.8906 12.2929 11.7031C12.4804 11.5155 12.7348 11.4102 13 11.4102H16C16.554 11.4102 17 10.9632 17 10.4102C17 9.85716 16.554 9.41016 16 9.41016H15V8.41016C15 7.85716 14.554 7.41016 14 7.41016Z" fill="#8C8C8C" />
                </svg>
              </div>
              <h3
                style={{
                  color: '#404040',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  fontSize: '20px',
                  fontWeight: '700',
                  lineHeight: '28px'
                }}
              >
                Money-Back Guarantee
              </h3>
            </div>
            <p
              style={{
                color: '#404040',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px'
              }}
              className="text-gray-800"
            >
              Our <span className="font-semibold">Money-Back Guarantee</span> covers circumstances where
              you hire a pro on Thumbtack and the job doesn't get done, or it isn't done as agreed.
            </p>
            <p
              style={{
                color: '#404040',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px'
              }}
              className="text-gray-800"
            >
              For example, if you hire a tiler who doesn't finish your backsplash, or the tiles fall off quickly, we can pay you
              back up to $2,500. Be sure to <span className="font-semibold">notify us within 45 days</span>.
            </p>
          </div>

          {/* Property Damage Guarantee */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.0011 2.41016C23.2664 2.41016 23.5207 2.51551 23.7083 2.70305C23.8958 2.89059 24.0011 3.14494 24.0011 3.41016V10.3002L25.6341 11.6372C25.8393 11.805 25.9693 12.0475 25.9957 12.3113C26.022 12.5751 25.9425 12.8385 25.7746 13.0437C25.6068 13.2488 25.3643 13.3789 25.1005 13.4052C24.8367 13.4316 24.5733 13.352 24.3681 13.1842L24.0011 12.8842V23.4102C24.0011 25.0642 22.6551 26.4102 21.0011 26.4102H7.00114C5.34714 26.4102 4.00114 25.0642 4.00114 23.4102V12.8842L3.63414 13.1842C3.53319 13.2723 3.41556 13.3392 3.28824 13.381C3.16092 13.4227 3.02651 13.4385 2.89298 13.4273C2.75945 13.4161 2.62954 13.3782 2.51096 13.3158C2.39237 13.2534 2.28753 13.1678 2.20267 13.0641C2.11781 12.9604 2.05465 12.8407 2.01696 12.7121C1.97926 12.5835 1.96778 12.4487 1.98322 12.3156C1.99865 12.1825 2.04068 12.0538 2.10681 11.9373C2.17293 11.8207 2.2618 11.7187 2.36814 11.6372L13.3681 2.63716C13.5466 2.49074 13.7703 2.41072 14.0011 2.41072C14.232 2.41072 14.4557 2.49074 14.6341 2.63716L18.0011 5.39116V3.41016C18.0011 3.14494 18.1065 2.89059 18.294 2.70305C18.4816 2.51551 18.7359 2.41016 19.0011 2.41016H23.0011ZM14.0011 4.70216L6.00114 11.2482V23.4102C6.00114 23.9612 6.45114 24.4102 7.00114 24.4102H21.0011C21.5521 24.4102 22.0011 23.9612 22.0011 23.4102V11.2482L14.0011 4.70216ZM17.0011 12.4102C17.2664 12.4102 17.5207 12.5155 17.7082 12.703C17.8958 12.8906 18.0011 13.1449 18.0011 13.4102V19.4102C18.0011 19.6754 17.8958 19.9297 17.7082 20.1173C17.5207 20.3048 17.2664 20.4102 17.0011 20.4102H11.0011C10.7359 20.4102 10.4816 20.3048 10.294 20.1173C10.1065 19.9297 10.0011 19.6754 10.0011 19.4102V13.4102C10.0011 13.1449 10.1065 12.8906 10.294 12.703C10.4816 12.5155 10.7359 12.4102 11.0011 12.4102H17.0011ZM16.0011 14.4102H12.0011V18.4102H16.0011V14.4102ZM22.0011 4.41016H20.0011V7.02716L22.0011 8.66316V4.41016Z" fill="#8C8C8C" />
                </svg>
              </div>
              <h3
                style={{
                  color: '#404040',
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  fontSize: '20px',
                  fontWeight: '700',
                  lineHeight: '28px'
                }}
              >
                Property Damage Guarantee
              </h3>
            </div>
            <p
              style={{
                color: '#404040',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px'
              }}
              className="text-gray-800"
            >
              If your Thumbtack pro was negligent and damaged your
              property, we can cover you up to $100,000 through our
              <span className="font-semibold"> Property Damage Guarantee</span>.
            </p>
            <p
              style={{
                color: '#404040',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px'
              }}
              className="text-gray-800"
            >
              For example, if the tile installer you hired accidentally
              breaks a window on the way out, <span className="font-semibold">notify us within 14 days</span>
              so we can help.
            </p>
          </div>
        </div>

        {/* Privacy Section Title */}
      </div>
    </div>
  );
}