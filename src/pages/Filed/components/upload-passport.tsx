import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { Button, Upload } from "antd";
import React from "react";

//profile img upload

export const UploadPassport = () => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  const changeUpload: UploadProps["onChange"] = ({ file, fileList }) => {
    //upload backed file
    const formData = new FormData();//type File
    formData.append("profile_img", fileList[0].originFileObj as Blob);
    /////
    setFileList((p)=> [...p,file])
    
  }
  const deleteImg = () => {
    //img backed delete img
  };
  return (
    <div>
      <Upload
        maxCount={3}
        fileList={fileList}
        beforeUpload={() => false}
        onChange={changeUpload}
        showUploadList={false}
      >
        <Button type="primary">Upload</Button>
      </Upload>
      {fileList.map((item, index) => (
        <div key={index}>
          <h1>IMG</h1>
          <Button onClick={deleteImg} color="danger">
            delete
          </Button>
        </div>
      ))}
    </div>
  );
};
