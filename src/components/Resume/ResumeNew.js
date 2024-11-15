import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/shubham-portfolio-2.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Col } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set up the pdf.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Adjust the width of the document based on window size
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle page load success and get total pages
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button className="mb-2"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* PDF viewer */}
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center"
          >
            <Page
              pageNumber={pageNumber}
              scale={width > 786 ? 1.5 : 0.7} // Adjust scale for different screen sizes
            />
          </Document>
        </Row>

        {/* Pagination controls */}
        {numPages && (
          <Row className="justify-content-center " style={{ justifyContent: "center", position: "relative" }}>
            <Col md={2} className="text-center">
              <Button
                variant="primary"
                onClick={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber <= 1}
              >
                Previous
              </Button>
            </Col>
            <Col md={2} className="text-center">
              <span style={{ margin: "0 10px" }}>
                Page {pageNumber} of {numPages}
              </span>
            </Col>
            <Col md={2} className="text-center">
              <Button
                variant="primary"
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber >= numPages}
              >
                Next
              </Button>
            </Col>
          </Row>
        )}

        {/* Download CV button */}

      </Container>
    </div>
  );
}

export default ResumeNew;
