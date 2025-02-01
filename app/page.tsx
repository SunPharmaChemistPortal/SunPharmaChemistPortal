'use client';

import Image from 'next/image';
import { useState } from 'react';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <h2>Sidebar Component</h2>
    </div>
  );
}

export default function Home() {
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
      */

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Changes saved');
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex w-9/10 gap-4 p-6">
        {/* Image Upload Section */}
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

        {/* Form Section */}
        <div className="w-3/5">
          {apiData && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Generated Form</h2>
              <form onSubmit={handleSubmit}>
                {Object.entries(apiData).map(([key, value]) => (
                  <div key={key} className="mb-4">
                    <label
                      htmlFor={key}
                      className="block text-gray-700 font-semibold mb-1"
                    >
                      {key.replace(/_/g, ' ').toUpperCase()}
                    </label>

                    {/* Dropdown for GST and DL Numbers */}
                    {(key === 'gst_numbers' || key === 'dl_numbers') &&
                    Array.isArray(value) ? (
                      <select
                        id={key}
                        name={key}
                        value={formData[key] || ''}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded  text-gray-700"
                      >
                        {value.map((option: string) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        id={key}
                        name={key}
                        value={formData[key] || ''}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded  text-gray-700"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
