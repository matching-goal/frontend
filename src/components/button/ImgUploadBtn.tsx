interface Props {
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  images: string[];
}
const ImageUploadBtn = ({ setImages, images }: Props) => {
  return (
    <div>
      <label className=" btn border border-gray-300" htmlFor="inputFile">
        파일선택
        <input
          className=" w-0 h-0 cursor-pointer"
          type="file"
          id="inputFile"
          accept="image/jpeg, image/png"
          onChange={(e) => {
            if (!e.target.files) return;
            if (!e.target.files[0].type.startsWith('image/')) {
              alert('이미지 파일만 업로드 가능합니다');
              return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
              setImages([...images, e.target?.result as string]);
            };
            reader.readAsDataURL(e.target.files[0]);
            e.target.value = '';
          }}
        />
      </label>
    </div>
  );
};

export default ImageUploadBtn;
