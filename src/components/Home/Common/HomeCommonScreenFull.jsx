import React, { useState, useEffect } from "react";
import screenfull from "screenfull";
import { message, Tooltip } from "antd";
import "./HomeCommonScreenFull.scss";
import {
    //是否全屏
    FullscreenOutlined,
    FullscreenExitOutlined,
} from '@ant-design/icons';

const click = () => {
  if (!screenfull.isEnabled) {
    message.warning("you browser can not work");
    return false;
  }
  screenfull.toggle();
};

const HomeCommonScreenFull = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const change = () => {
    setIsFullscreen(screenfull.isFullscreen);
  };

  useEffect(() => {
    screenfull.isEnabled && screenfull.on("change", change);
    return () => {
      screenfull.isEnabled && screenfull.off("change", change);
    };
  }, []);

  const title = isFullscreen ? "取消全屏" : "全屏";
  //const type = isFullscreen ? "fullscreen-exit" : "fullscreen";
  return (
    <div className="HomeCommonScreenFullComponent">
      <Tooltip placement="bottom" title={title}>
        {
          isFullscreen 
          ?
          (
            <FullscreenExitOutlined onClick={click}  className="content_col_four_icon" />
          )
          :
          (
            <FullscreenOutlined onClick={click}  className="content_col_four_icon" />
          )
        }
        
      </Tooltip>
    </div>
  );
};

export default HomeCommonScreenFull;
