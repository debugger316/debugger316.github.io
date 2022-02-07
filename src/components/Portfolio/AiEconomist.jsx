import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

export const AiEconomist = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <Document
        file="aiEconomist.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </>
  );
};
