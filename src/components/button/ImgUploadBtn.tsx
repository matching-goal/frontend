import BASE_API_URL from '@/constants/url';
import axios from 'axios';

interface Props {
  setImages?: React.Dispatch<React.SetStateAction<string[]>>;
  images?: string[];
  setImage?: React.Dispatch<React.SetStateAction<string>>;
}
const ImageUploadBtn = ({ setImages, images, setImage }: Props) => {
  if (setImages && images) {
    return (
      <div>
        <label
          className=" btn border border-gray-300"
          htmlFor="inputFile">
          파일선택
          <input
            className=" w-0 h-0 cursor-pointer"
            type="file"
            id="inputFile"
            accept="image/jpeg, image/png"
            onChange={async (e) => {
              if (!e.target.files) return;
              if (!e.target.files[0].type.startsWith('image/')) {
                alert('이미지 파일만 업로드 가능합니다');
                return;
              }

              const formData = new FormData();
              formData.append('file', e.target.files[0]);

              const res = await axios.post(
                `${BASE_API_URL}/api/images/upload`,
                formData,
                {
                  headers: { 'Content-Type': 'multipart/form-data' },
                }
              );
              const data = res.data;
              setImages([...images, data]);
            }}
          />
        </label>
      </div>
    );
  }
  if (setImage) {
    return (
      <div>
        <label
          className=" btn border border-gray-300"
          htmlFor="inputFile">
          파일선택
          <input
            className=" w-0 h-0 cursor-pointer"
            type="file"
            id="inputFile"
            accept="image/jpeg, image/png"
            onChange={async (e) => {
              if (!e.target.files) return;
              if (!e.target.files[0].type.startsWith('image/')) {
                alert('이미지 파일만 업로드 가능합니다');
                return;
              }

              const formData = new FormData();
              formData.append('file', e.target.files[0]);

              const res = await axios.post(
                `${BASE_API_URL}/api/images/upload`,
                formData,
                {
                  headers: { 'Content-Type': 'multipart/form-data' },
                }
              );
              const data = res.data;
              setImage(data);
            }}
          />
        </label>
      </div>
    );
  }
  return <div>setImage 혹은 setImages images를 넣어주세요</div>;
};

export default ImageUploadBtn;
