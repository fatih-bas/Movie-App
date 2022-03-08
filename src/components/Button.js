import React from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchButton = ({ handleClick }) => {
  return (
    <div>
      <Button
        className="btn"
        type="ghost"
        shape="circle"
        icon={<SearchOutlined />}
        size="large"
        onClick={handleClick}
      />
    </div>
  );
};

export default SearchButton;
