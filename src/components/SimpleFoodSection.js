import React from 'react';

const SimpleFoodSection = () => {
  const simpleImages = [
    { src: '/images/food01.jpg', title: 'Karnataka Military Mutton Pulao' },
    { src: '/images/food02.jpg', title: 'Murgh Kalmi' },
    { src: '/images/food03.jpg', title: 'Yakhni Ghost Pulao' },
    { src: '/images/food04.jpg', title: 'Shahi Shadoot Tukda' }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400">
          SIMPLE SIGNATURE DISHES TEST
        </h2>
        
        <div className="bg-red-600 text-white p-4 mb-8 text-center">
          <strong>SIMPLE TEST: Can you see this red box and the images below?</strong>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {simpleImages.map((image, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  console.log('Simple image failed:', image.src);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
                onLoad={() => {
                  console.log('Simple image loaded:', image.src);
                }}
              />
              <div style={{display: 'none'}} className="bg-red-500 text-white p-4 h-48 flex items-center justify-center">
                IMAGE FAILED TO LOAD<br/>{image.src}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-yellow-400">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleFoodSection;
