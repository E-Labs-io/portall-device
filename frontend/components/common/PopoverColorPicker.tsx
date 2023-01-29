/** @format */

import { useClickOutside } from "hooks";
import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker, RgbaStringColorPicker } from "react-colorful";
import styled from "styled-components";

const Picker = styled.div`
  position: relative;
`;

const Swatch = styled.div`
  width: 50px;
  height: 28px;
  border-radius: 8px;
  border: 3px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Popover = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  border-radius: 9px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  z-index: 5;
`;

interface PopoverPickerProps {
  color: string;
  pro?: true;
  onChange: (value: string) => void;
}

export const PopoverPicker = ({ color, pro, onChange }: PopoverPickerProps) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <Picker>
      <Swatch style={{ backgroundColor: color }} onClick={() => toggle(true)} />
      {isOpen &&
        (pro ? (
          <Popover ref={popover}>
            <RgbaStringColorPicker color={color} onChange={onChange} />
          </Popover>
        ) : (
          <Popover ref={popover}>
            <HexColorPicker color={color} onChange={onChange} />
          </Popover>
        ))}
    </Picker>
  );
};
