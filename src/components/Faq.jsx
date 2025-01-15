import React, { useState } from 'react';

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // FAQ Data
  const data = [
    {
        id: 1,
        question:"What are your operating hours?",
        answer: "We are open daily from 9:00 AM to 8:00 PM.",
    },
    {
        id: 2,
        question:"Do you offer membership or discount packages?",
        answer: "Yes, we offer monthly memberships, discount packages, and seasonal offers. Please inquire during your visit.",
    },
    {
        id: 3,
        question:"How long are physiotherapy sessions?",
        answer: "Sessions usually last between 30 minutes to 1 hour, depending on the treatment plan",
    },
  ];

  // Handle single selection
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // Handle multiple selections
  function handleMultiSelection(getCurrentId) {
    const updatedMultiple = [...multiple];
    const index = updatedMultiple.indexOf(getCurrentId);

    if (index === -1) updatedMultiple.push(getCurrentId);
    else updatedMultiple.splice(index, 1);

    setMultiple(updatedMultiple);
  }

  return (
    <div className="flex flex-col items-center justify-center h-3/4 gap-6 p-4 m-10">
  
     <h1 className='font-bold text-3xl text-gray-900'>frequently asked questions</h1>

      {/* Accordion */}
      <div className="w-full max-w-lg">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="mb-4 border border-gray-400 rounded-lg bg-gray-400 text-white"
            >
              {/* Question */}
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="flex items-center justify-between px-4 py-2 cursor-pointer"
              >
                <h3 className="font-semibold">{dataItem.question}</h3>
                <span className="font-bold">
                  {selected === dataItem.id || multiple.includes(dataItem.id) ? '-' : '+'}
                </span>
              </div>

              {/* Answer */}
              {enableMultiSelection
                ? multiple.includes(dataItem.id) && (
                    <div className="px-4 py-2 bg-gray-400">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="px-4 py-2 bg-gray-400">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Faq;
