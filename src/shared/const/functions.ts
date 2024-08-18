import { Gender } from "@/shared/types";

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

export function parseGender(value: string): Gender | undefined {
  return Object.values(Gender).includes(value as Gender)
    ? (value as Gender)
    : undefined;
}
