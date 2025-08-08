import React from 'react';

const TestSection = () => {
  return (
    <section className="py-16 bg-blue-500 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">TEST SECTION</h2>
        <p className="text-lg">
          If you can see this blue section, React is working.
          If you can't see the Signature Dishes section below, 
          there's a specific issue with that component.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-500 p-4">Card 1</div>
          <div className="bg-green-500 p-4">Card 2</div>
          <div className="bg-yellow-500 p-4">Card 3</div>
        </div>
      </div>
    </section>
  );
};

export default TestSection;
