import { Container, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const documentWrapperRef = React.useRef(null);
  return (
    <div ref={documentWrapperRef} style={{marginTop: '30px'}}>
      <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderAnnotationLayer={false} width={documentWrapperRef.current?.getBoundingClientRect().width - 10 || undefined}/>
        <Text mt={2}>Page {pageNumber}</Text>
      </Document>
    </div>
  );
};

export default Resume;
