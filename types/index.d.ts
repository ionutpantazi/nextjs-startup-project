import { ToastType } from "@/components/StrapiComponents/PwaComponents/Common/Toast/Toast";

declare global {
  interface Window {
    addToast: (message: string, type: ToastType, title?: string) => void;
  }
}