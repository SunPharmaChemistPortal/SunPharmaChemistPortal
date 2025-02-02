import React from 'react'
import Image from 'next/image'
import { useState } from 'react';

export default function ImageUpload({ onUpload }: { onUpload: (data: Record<string, any>) => void }) {
    const [file, setFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
          setFile(selectedFile);
          setImagePreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleUpload = () => {
      if (!file) return alert('Please select a file.');
  
      const mockApiResponse = {
        medical_name: 'ABC Pharmacy',
        gst_numbers: ['GST001', 'GST002'],
        dl_numbers: ['DL001', 'DL002'],
        address: 'ABC Block, ABC Road, 400065',
      };
  
      onUpload(mockApiResponse); // Pass data back to parent
    };
  
    return (
      <div>
        <input type="file" onChange={handleFileChange} className="block w-full mb-4" />
        <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Upload</button>

        {imagePreview && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Image Preview:</h2>
              <Image
                src={imagePreview}
                alt="Uploaded Preview"
                width={300}
                height={300}
                className="mt-2 w-full max-w-full max-h-64 object-contain"
              />
            </div>
          )}
      </div>
    );
  }



/*
function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [apiData, setApiData] = useState<{ [key: string]: any } | null>(null);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file first.');

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Uncomment below when using the real API
      /*
      const response = await fetch('http://localhost:8000/recognize-image', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setApiData(result);
      

      // Mock API Response for testing
      const mockApiResponse = {
        medical_name: 'ABC Pharmacy',
        gst_numbers: ['GST001', 'GST002'],
        dl_numbers: ['DL001', 'DL002', 'DL003'],
        address: 'ABC Block, ABC Road, 400065',
      };
      // Properly map array values to select defaults
      const updatedResponse = Object.fromEntries(
        Object.entries(mockApiResponse).map(([key, value]) =>
          Array.isArray(value) ? [key, value[0]] : [key, value]
        )
      );

      setApiData(mockApiResponse);
      setFormData(updatedResponse);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
        <div className="w-2/5">
          <h1 className="text-xl font-semibold mb-4">Upload an Image</h1>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full mb-4"
          />
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Upload
          </button>

          {imagePreview && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Image Preview:</h2>
              <Image
                src={imagePreview}
                alt="Uploaded Preview"
                width={500}
                height={500}
                className="mt-2 w-full max-h-64 object-contain"
              />
            </div>
          )}
        </div>
  )
}
*/