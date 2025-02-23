import { MouseEvent, ReactNode } from 'react';
import { StyledProps } from '../common';
import { TdUploadProps, UploadFile, UploadRemoveContext } from './type';
import { GlobalConfigProvider } from '../config-provider/type';
import { ImageViewerProps } from '../image-viewer';

export interface CommonDisplayFileProps {
  accept: string;
  files: TdUploadProps['files'];
  toUploadFiles: TdUploadProps['files'];
  displayFiles: TdUploadProps['files'];
  theme: TdUploadProps['theme'];
  abridgeName: TdUploadProps['abridgeName'];
  placeholder: TdUploadProps['placeholder'];
  classPrefix: string;
  tips?: TdUploadProps['tips'];
  locale?: GlobalConfigProvider['upload'];
  sizeOverLimitMessage?: string;
  autoUpload?: boolean;
  disabled?: boolean;
  uploading?: boolean;
  tipsClasses?: string;
  errorClasses?: string[];
  placeholderClass?: string;
  showUploadProgress?: boolean;
  children?: ReactNode;
  fileListDisplay?: TdUploadProps['fileListDisplay'];
  imageViewerProps?: ImageViewerProps;
  onRemove?: (p: UploadRemoveContext) => void;
}

export interface UploadProps<T extends UploadFile = UploadFile> extends TdUploadProps<T>, StyledProps {}

export interface UploadRef {
  upload: HTMLInputElement;
  uploading: boolean;
  triggerUpload: () => void;
  uploadFiles: (files?: UploadFile[]) => void;
  cancelUpload: (context?: { file?: UploadFile; e?: MouseEvent<HTMLElement> }) => void;
}
