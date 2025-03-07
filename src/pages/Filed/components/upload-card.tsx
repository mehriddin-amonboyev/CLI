import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { Button, Upload } from "antd";
import React from "react";

//profile img upload

export const UploadCard = () => {
  //backned
  const [img, setImage] = React.useState<string | undefined>();
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  const changeUpload: UploadProps["onChange"] = ({ file }) => {
    setFileList([file]);
    setImage("/img");
  };

  return (
    <div>
      {img ? (
        <h1>{img}</h1>
      ) : (
        <Upload
        beforeUpload={() => false}
        onChange={changeUpload}
        fileList={fileList}
        >
          + upload
        </Upload>
      )}
    </div>
  );
};
