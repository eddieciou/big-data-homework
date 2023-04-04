import React, { useState } from 'react';

import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

type TSelectorChoose = {
  value: string;
  title: string;
};

interface ISelectorProps {
  chooseList: Array<TSelectorChoose>
  value: string
  onChange: (value: string) => void;
  label:string
  clearAble?: boolean
  disable?: boolean
  small?:boolean
  disablePlaceholder?: string
  placeholder?: string
}

function Selector({
  placeholder, small, label, disablePlaceholder, disable, chooseList, value, onChange, clearAble,
}:ISelectorProps) {
  const [autoText, setAutoText] = useState('');
  const [textKeying, setTextKeying] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const getTitle = () => {
    if (chooseList.length > 0) {
      const result = chooseList.find((part) => part.value === value);
      return result?.title;
    }
    return '';
  };

  let filterChooseList = chooseList;
  if (autoText) {
    filterChooseList = chooseList.filter((part) => part.title.includes(autoText));
  }

  return (
    <button
      type="button"
      className={`relative flex h-[36.5px] items-center justify-between rounded border border-[#B6B6B6] bg-white pl-[12px] pr-[8px] pt-[10px] text-[16px] ${small ? 'w-[73px]' : 'w-full sm:w-[165px]'} `}
      onClick={() => {
        if (!disable && !textKeying) {
          setDropDown(!dropDown);
        }
      }}
      onBlur={() => setDropDown(false)}
    >
      <div className={`absolute -top-2 bg-white px-1 text-xs ${disable && 'text-[#8B8B8B]'}`}>{label}</div>
      <input
        type="text"
        className="h-full w-full placeholder:text-gray-400 focus:outline-none"
        placeholder={disable ? disablePlaceholder : placeholder}
        value={getTitle() || autoText}
        onChange={(e) => {
          setAutoText(e.target.value);
        }}
        onClick={() => setTextKeying(true)}
        onBlur={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        disabled={disable}
      />

      <span className="flex justify-center gap-2">
        {clearAble && (
        <RxCross1
          className="text-[#797979]"
          onClick={
            (event) => {
              event.stopPropagation();
              onChange('');
              setAutoText('');
              setTextKeying(false);
            }
        }
        />
        )}
        {dropDown ? <AiFillCaretUp size="20px" className="text-[#797979]" /> : <AiFillCaretDown size="20px" className="text-[#797979]" />}
      </span>
      <div className={`absolute left-0 top-full z-50 mt-1 w-max min-w-full bg-[#FFFDFD] shadow-md ${(!dropDown || !textKeying) && 'hidden'}`}>
        <ul className="max-h-[258px] overflow-y-scroll rounded text-left">
          {filterChooseList.map((part) => (
            <li
              key={part.value}
              className="px-4 py-1 hover:bg-gray-200"
              onClick={() => {
                onChange(part.value);
                setTextKeying(false);
              }}
              aria-hidden="true"
            >
              {part.value}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}

Selector.defaultProps = {
  clearAble: false,
  disable: false,
  small: false,
  placeholder: '',
  disablePlaceholder: '',
};

export default Selector;
