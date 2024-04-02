import { Text } from '@chakra-ui/react';
import { Document, Page } from 'react-pdf';

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
        <Text mt={2}>Page {pageNumber}</Text>
      </Document>
    </div>
  );
};

export default ResumeDoc;
