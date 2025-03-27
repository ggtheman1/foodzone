import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumberWithDecimal =(num: number): string =>{
  const [int, decimal]=num.toString().split('.')
  return decimal? `${int}.${decimal.padEnd(2, '0')}`: int
}

// PROMPT chatGPT create toSlug ts arrow function that converts text to lowercase

export const toSlug= (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')