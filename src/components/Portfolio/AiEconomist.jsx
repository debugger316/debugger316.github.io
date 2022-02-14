import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

export const AiEconomist = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
  };

  return (
    <>
      <Document
        file="./aiEconomist.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        onSourceError={console.error}
        options={options}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </>
  );
};
