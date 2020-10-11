import { ReactNode } from 'react';

interface ILayout {
  /**
   * Children of a Layout.
   * Usually nested Compositions, Backgrounds, and Layouts.
   */
  children: ReactNode;
  omitPadding?: boolean;
}

export default ILayout;
