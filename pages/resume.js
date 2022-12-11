import React, {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
        <div>
        <Document
            file="resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            allowFullScreen={true}
        >
        <Page pageNumber={pageNumber} />
      </Document>
        </div>
  );
};

export default Resume;
