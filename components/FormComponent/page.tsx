import axios from 'axios';
import React from 'react'
import { useState } from 'react';

export default function FormComponent({ formData }: { formData: Record<string, any> | null }) {
    
    if (!formData) return <div>Please upload an image to display form data.</div>;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Update the formData state dynamically
        // setFormData(prevData => ({
        //   ...prevData,
        //   [name]: value,
        // }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            // const response = await axios.post("api/formInputs", formData)
            console.log(formData)
            const response = await axios.post("api/formInputs", {
                medical_name: 'ABC Pharmacy', 
                gst_numbers: 'GST001',
                dl_numbers: 'DL001', 
                address: 'ABC Block, ABC Road, 400065',
            })
            console.log(response)
        }catch(error){
            console.log("error: ", error)
        }
        alert('Changes saved');
    };

    return (
      <form onSubmit={handleSubmit} className="w-full sm:w-3/5">
        {Object.entries(formData).map(([key, value]) => (
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
                    // multiple={true}
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
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Submit</button>
      </form>
    );
}



// function FormComponent() {
//     const [apiData, setApiData] = useState<{ [key: string]: any } | null>(null);
//     const [formData, setFormData] = useState<{ [key: string]: string }>({});

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         alert('Changes saved');
//     };

//     return (
//         <div className="w-3/5">
//         {apiData && (
//             <div>
//             <h2 className="text-xl font-semibold mb-4">Generated Form</h2>
//             <form onSubmit={handleSubmit}>
//                 {Object.entries(apiData).map(([key, value]) => (
//                 <div key={key} className="mb-4">
//                     <label
//                     htmlFor={key}
//                     className="block text-gray-700 font-semibold mb-1"
//                     >
//                     {key.replace(/_/g, ' ').toUpperCase()}
//                     </label>

//                     {/* Dropdown for GST and DL Numbers */}
//                     {(key === 'gst_numbers' || key === 'dl_numbers') &&
//                     Array.isArray(value) ? (
//                     <select
//                         id={key}
//                         name={key}
//                         value={formData[key] || ''}
//                         onChange={handleChange}
//                         className="w-full border px-3 py-2 rounded  text-gray-700"
//                     >
//                         {value.map((option: string) => (
//                         <option key={option} value={option}>
//                             {option}
//                         </option>
//                         ))}
//                     </select>
//                     ) : (
//                     <input
//                         type="text"
//                         id={key}
//                         name={key}
//                         value={formData[key] || ''}
//                         onChange={handleChange}
//                         className="w-full border px-3 py-2 rounded  text-gray-700"
//                     />
//                     )}
//                 </div>
//                 ))}

//                 <button
//                 type="submit"
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                 >
//                 Submit
//                 </button>
//             </form>
//             </div>
//         )}
//         </div>
//     )
// }

// export default FormComponent