import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === "production" ? "/Tarihin-Izinde" : "";
  return `${basePath}${path}`;
};
