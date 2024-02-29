import { useState } from 'react';

const ImageUploadBtn = () => {
  const [files, setFiles] = useState<Array<FileList | File>>([]);
  const [previewFiles, setPreviewFiles] = useState<Array<string>>([]);

  return (
    <div>
      <label className=" btn border border-gray-300" htmlFor="inputFile">
        파일선택
        <input
          className=" w-0 h-0 cursor-pointer"
          type="file"
          id="inputFile"
          onChange={(e) => {
            if (!e.target.files) return;
            const reader = new FileReader();
            reader.onload = (e) => {
              setPreviewFiles([...previewFiles, e.target?.result as string]);
            };
            reader.readAsDataURL(e.target.files[0]);

            setFiles([...files, ...e.target.files]);
          }}
        />
      </label>
      {previewFiles.map((previewFile, idx) => (
        <div key={previewFile + idx}>
          <img src={previewFile} alt="" className=" w-[150px] h-[150px]" />
        </div>
      ))}
    </div>
  );
};

export default ImageUploadBtn;
