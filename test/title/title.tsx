import React, { ReactNode } from 'react';

export type TitleProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Title({ children }: TitleProps) {
  return (
    <div>
      {children}
    </div>
  );
}
