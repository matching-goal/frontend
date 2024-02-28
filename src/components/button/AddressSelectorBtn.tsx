import { useState, useRef } from 'react';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

interface Props {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
}

const AddressSelectorBtn = ({ setAddress }: Props) => {
  const [isPostCodeActive, setPostCodeActive] = useState<boolean>(true);
  const ref = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    ref.current?.close();
    setPostCodeActive(false);
  };
  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    ref.current?.close();
    setPostCodeActive(false);
    setAddress(fullAddress);
  };

  return (
    <div>
      <button
        className="btn border-gray-300"
        onClick={() => {
          setPostCodeActive(true);
          ref.current?.showModal();
        }}
      >
        구장 주소 선택
      </button>
      <dialog id="my_modal_2" className="modal" ref={ref}>
        {isPostCodeActive && (
          <>
            <div className="modal-box">
              <DaumPostcodeEmbed onComplete={handleComplete} />
            </div>

            <form method="dialog" className="modal-backdrop" onClick={handleClick}>
              <button>close</button>
            </form>
          </>
        )}
      </dialog>
    </div>
  );
};

export default AddressSelectorBtn;
