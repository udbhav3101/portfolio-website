import { DownloadIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Document, Page, pdfjs } from 'react-pdf';
import MyResume from '../public/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeDoc = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, _] = useState(1);
  const documentWrapperRef = React.useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div ref={documentWrapperRef} style={{ marginTop: '30px' }}>
      <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          width={
            documentWrapperRef?.current?.getBoundingClientRect().width - 10 ||
            undefined
          }
        />
      </Document>
    </div>
  );
};

const Resume = () => {
  const intl = useIntl();
  return (
    <div>
      <ResumeDoc />
      <Box align="center" my={4} mt={5}>
        <Button rightIcon={<DownloadIcon />} colorScheme="teal">
          <a href="/resume.pdf" download>
            {intl.formatMessage({ id: 'resumePage.cta' })}
          </a>
        </Button>
      </Box>
    </div>
  );
};

export default Resume;
