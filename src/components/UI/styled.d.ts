import { CSSProperties } from 'styled-components/macro';

export declare interface StyleProps extends CSSProperties {
  [key: string]: CSSObject | string | number | undefined;
}
