import { IBaseModalProps } from "../BaseModal";

type TOmitBaseModalProps<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface IFailureModalProps
  extends TOmitBaseModalProps<IBaseModalProps, "children"> {
  message: string | null | undefined;
}
