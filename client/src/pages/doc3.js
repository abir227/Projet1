import React ,{useState} from 'react'
import Navbar from '../compnent/navbar'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import loi3 from '../pdf/loi3.pdf'

export default function Mission() {
  const [defaultPdfFile]=useState(loi3);
  //Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
        <Navbar/>
        {/* show pdf conditionally (if we have one)  */}
        {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={defaultPdfFile}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}
        </div>
  )
}