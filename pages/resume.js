import { Container, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Document, Page, pdfjs, PDF } from 'react-pdf';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Container mt={5}>
      <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} renderAnnotationLayer={false} />
        <Text mt={2}>Page {pageNumber}</Text>
      </Document>
    </Container>
  );
};

export default Resume;
