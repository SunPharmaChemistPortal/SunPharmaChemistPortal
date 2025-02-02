"use client";
import { useState } from "react";
import ImageUpload from "@/components/ImageUpload/page";
import FormComponent from "@/components/FormComponent/page";
import Sidebar from "@/components/Sidebar/page";

export default function HomePage() {
  const [formData, setFormData] = useState<Record<string, any> | null>(null);

  // Create a wrapper function to log data
  const handleSetFormData = (data: Record<string, any>) => {
    console.log("Data being set to formData:", data);
    setFormData(data);
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex flex-col w-full gap-4 md:flex-row">
        <Sidebar />
        <div className="w-full md:w-9/10 gap-4 p-4 md:p-6">
          <ImageUpload onUpload={handleSetFormData} />
        </div>
        <div className="w-full md:w-9/10 gap-4 p-4 md:p-6">
          <FormComponent formData={formData} />
        </div>
      </div>
    </div>
  );
  
}





// "use client"

// import FormComponent from '@/components/FormComponent/page';
// import ImageUpload from '@/components/ImageUpload/page';
// import Sidebar from '@/components/Sidebar/page';
// import { useState } from 'react';


// export default function Home() {
//   const [formData, setFormData] = useState<Record<string, any> | null>(null);

//   const handleUpload = (uploadedData: Record<string, any>) => {
//     setFormData(uploadedData); // Pass data from image upload to form
//   };

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex w-9/10 gap-4 p-6">
//         {/* Pass handleUpload and formData */}
//         <ImageUpload onUpload={handleUpload} />
//         <FormComponent formData={formData} />
//       </div>
//     </div>
//   );
// }
