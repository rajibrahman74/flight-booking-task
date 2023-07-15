import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import { VscPerson } from "react-icons/vsc";
import { PiPerson } from "react-icons/pi";

const PersonTypes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addPassanger, setAddPassanger] = useState(false)
  const [selectedOption, setSelectedOption] = useState([
    {
      text: "Adult",
      count: 1,
    }
  ]);
  const [options, setOptions] = useState([
    {
      text: "Adults",
      subText: ">12 Years",
      count: 0,
      icon: <VscPerson className="h-7 w-7" />,
    },
    {
      text: "Children",
      subText: "2-12 Years",
      count: 0,
      icon: <PiPerson className="h-7 w-7" />,
    },
    {
      text: "Infants",
      subText: "<2 Years",
      count: 0,
      icon: <PiPerson className="h-7 w-7" />,
    },
  ]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleIncrement = (index) => {
    const updatedOptions = [...options];
    updatedOptions[index].count += 1;
    setOptions(updatedOptions);
  };

  const handleDecrement = (index) => {
    const updatedOptions = [...options];
    if (updatedOptions[index].count > 0) {
      updatedOptions[index].count -= 1;
      setOptions(updatedOptions);
    }
  };

  const handlePlusMinusClick = (e) => {
    e.stopPropagation();
  };

  
 // updating the different types of passenger
  const handlePeopleCount = (people) =>{
    let newOptions = [...options]

    newOptions.map((option)=>{
       if(option.text === people){
          option.count + 1
       }
    })
    setAddPassanger(true)
    setOptions(newOptions)
  }


  const getAllCustomer = () =>{
    console.log(options)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full rounded-md px-4 py-2 bg-white text-md font-medium text-gray-500 hover:bg-gray-200 focus:outline-none"
          onClick={handleToggle}
        >
          {/* {options[0].count} <span>{options[0].text}</span> */}
          {addPassanger ? options.map((option, idx)=>{
            return (
              <div key={idx} className="mr-2">
                <span>{option.count !== 0 ? option.text : null}</span>
                {option.count !== 0 ? option.count : null}
              </div>
            )
          }) : <>{options[0].count} <span>{options[0].text}</span></>}
          <BiSolidDownArrow className="w-4 h-3 text-black" />
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-[230px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-4 px-1"
          onClick={handleToggle}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-2 text-md cursor-pointer text-[#8e8e8e]"
                onClick={() => handleOptionSelect(option)}
              >
                <div className="flex items-center">
                  <span className="text-gray-500">{option.icon}</span>
                  <div className="ml-2 flex flex-col items-start justify-start">
                    <span className="text-lg">{option.text}</span>
                    <span className="text-xs">{option.subText}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="bg-gray-400 text-white rounded-lg h-6 w-6 flex items-center justify-center focus:outline-none"
                    onClick={(e) => {
                      handleDecrement(index);
                      handlePlusMinusClick(e);
                      handlePeopleCount(option.text)
                    }}
                  >
                    <AiOutlineMinus size={16} />
                  </button>
                  <span className="mx-2">
                    {selectedOption.text === option.text
                      ? selectedOption.count
                      : option.count}
                  </span>
                  <button
                    type="button"
                    className="bg-[#27922e] hover:bg-[#165e1a] text-white rounded-lg h-6 w-6 flex items-center justify-center focus:outline-none"
                    onClick={(e) => {
                      handleIncrement(index);
                      handlePlusMinusClick(e);
                      handlePeopleCount(option.text, 'plus')
                    }}
                  >
                    <AiOutlinePlus size={16} />
                  </button>
                </div>
              </div>
            ))}
            <hr className="my-2" />
            <button
              type="button"
              className="text-[#47b610] font-semibold flex ms-auto me-4"
              onClick={getAllCustomer}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonTypes;
