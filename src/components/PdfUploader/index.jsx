// import React from "react";
// import PropTypes from "prop-types";
// import { Box, Typography, IconButton, Snackbar, Alert } from "@mui/material";
// import deleteIcon from "../../assets/svg/closeRoundRed.svg";
// import fileUploaded from "../../assets/svg/fileLine.svg";
// import pdfUploadIcon from "../../assets/svg/pdfUploader.svg";
// import useSnackbar from "../../hooks/useSnackbar"; // Adjust the import path as needed

// const PdfUploader = ({
//   label = "",
//   selectedPdfs = [],
//   setSelectedPdfs = () => {},
//   onRemovePdf = () => {},
//   onPdfChange = () => {},
//   showAsterisk = false,
// }) => {
//   const {
//     snackbarOpen,
//     snackbarMessage,
//     snackbarSeverity,
//     showSnackbar,
//     handleCloseSnackbar,
//   } = useSnackbar();

//   const handlePdfChange = (e) => {
//     const files = Array.from(e.target.files);
//     const validFiles = [];

//     files.forEach((file) => {
//       if (file.type === "application/pdf" && file.size <= 20 * 1024 * 1024) {
//         validFiles.push(file);
//       } else if (file.type !== "application/pdf") {
//         showSnackbar(`${file.name} is not a PDF file.`);
//       } else {
//         showSnackbar(`${file.name} exceeds the 20MB size limit.`);
//       }
//     });

//     if (validFiles.length > 0) {
//       onPdfChange(validFiles);  // Call the prop function here
//     }
//   };

//   const handleRemovePdf = (index) => {
//     const removedPdf = selectedPdfs[index];
//     setSelectedPdfs((prevPdfs) => prevPdfs.filter((_, i) => i !== index));
//     onRemovePdf(removedPdf);
//   };

//   function getFileNameFromUrl(url) {
//     try {
//       const urlObj = new URL(url);
//       const pathname = urlObj.pathname;
//       const fileName = pathname.substring(pathname.lastIndexOf("/") + 1);
//       const decodedFileName = decodeURIComponent(fileName);
//       return decodedFileName.replace(/^\d+_/, "");
//     } catch (error) {
//       console.error("Invalid URL:", error);
//       return null;
//     }
//   }

//   return (
//     <Box>
//       <Box>
//         <Typography
//           sx={{
//             fontSize: "14px",
//             lineHeight: "24px",
//             fontWeight: 500,
//             color: "#505259",
//           }}
//         >
//           {label}
//           {showAsterisk && (
//           <span
//             style={{
//               color: "var(--custom-primary)",
//               fontSize: "14px",
//               lineHeight: "24px",
//               fontWeight: 500,
//             }}
//           >
//             {" "}
//             *
//           </span>
//         )}
//         </Typography>
//       </Box>

//       <Box display="flex" flexWrap="wrap">
//         <Box>
//           {/* Use a unique id by incorporating the label */}
//           <input
//             accept="application/pdf"
//             id={`upload-pdf-${label}`}
//             type="file"
//             multiple
//             style={{ display: "none" }}
//             onChange={handlePdfChange}
//           />
//           <label htmlFor={`upload-pdf-${label}`}>
//             <IconButton
//               component="span"
//               sx={{
//                 border: "1.5px solid #D8D8D8",
//                 pr: 30,
//                 borderRadius: 1.5,
//               }}
//             >
//               <img src={pdfUploadIcon} height={18} width={18} alt="upload icon" />
//             </IconButton>
//           </label>
//         </Box>

//         {selectedPdfs?.map((pdf, index) => {
//           const fileName = pdf?.name || getFileNameFromUrl(pdf?.url);

//           return (
//             <Box sx={{ ml: 2.7, mt: 0.5 }} key={index} position="relative">
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   border: "1.5px solid #B9BABD",
//                   borderRadius: "5px",
//                   pl: 1,
//                   pr: 3,
//                   py: 0.4,
//                   color: "var(--secondary)",
//                   backgroundColor: "#fbfbfb",
//                 }}
//               >
//                 <img
//                   style={{ marginRight: 3 }}
//                   src={fileUploaded}
//                   alt="pdf uploaded icon"
//                 />
//                 <h6>{fileName}</h6>
//               </Box>
//               <IconButton
//                 onClick={() => handleRemovePdf(index)}
//                 sx={{
//                   position: "absolute",
//                   top: 5,
//                   right: 0,
//                   color: "red",
//                   backgroundColor: "rgba(255, 255, 255, 0.2)",
//                 }}
//                 size="small"
//               >
//                 <img src={deleteIcon} alt="delete icon" />
//               </IconButton>
//             </Box>
//           );
//         })}
//       </Box>

//       {/* Snackbar for displaying error messages */}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// PdfUploader.propTypes = {
//   selectedPdfs: PropTypes.array,
//   setSelectedPdfs: PropTypes.func,
//   onRemovePdf: PropTypes.func,
//   onPdfChange: PropTypes.func,
// };

// export default PdfUploader;

import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Box, Typography, IconButton, Snackbar, Alert } from "@mui/material";
import deleteIcon from "../../assets/svg/closeRoundRed.svg";
import fileUploaded from "../../assets/svg/fileLine.svg";
import pdfUploadIcon from "../../assets/svg/pdfUploader.svg";
import useSnackbar from "../../hooks/useSnackbar"; // Adjust the import path as needed

const PdfUploader = ({
  label = "",
  selectedPdfs = [],
  setSelectedPdfs = () => {},
  onRemovePdf = () => {},
  onPdfChange = () => {},
  showAsterisk = false,
}) => {
  const fileInputRef = useRef(null); // Add ref here
  const {
    snackbarOpen,
    snackbarMessage,
    snackbarSeverity,
    showSnackbar,
    handleCloseSnackbar,
  } = useSnackbar();

  const handlePdfChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = [];

    files.forEach((file) => {
      if (file.type === "application/pdf" && file.size <= 20 * 1024 * 1024) {
        validFiles.push(file);
      } else if (file.type !== "application/pdf") {
        showSnackbar(`${file.name} is not a PDF file.`);
      } else {
        showSnackbar(`${file.name} exceeds the 20MB size limit.`);
      }
    });

    if (validFiles.length > 0) {
      onPdfChange(validFiles); // Call the prop function here
    }

    // Reset the input value to allow re-upload of the same file
    e.target.value = null;
  };

  const handleRemovePdf = (index) => {
    const removedPdf = selectedPdfs[index];
    setSelectedPdfs((prevPdfs) => prevPdfs.filter((_, i) => i !== index));
    onRemovePdf(removedPdf);
  };

  function getFileNameFromUrl(url) {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      const fileName = pathname.substring(pathname.lastIndexOf("/") + 1);
      const decodedFileName = decodeURIComponent(fileName);
      return decodedFileName.replace(/^\d+_/, "");
    } catch (error) {
      console.error("Invalid URL:", error);
      return null;
    }
  }

  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: 500,
            color: "#505259",
          }}
        >
          {label}
          {showAsterisk && (
            <span
              style={{
                color: "var(--custom-primary)",
                fontSize: "14px",
                lineHeight: "24px",
                fontWeight: 500,
              }}
            >
              {" "}
              *
            </span>
          )}
        </Typography>
      </Box>

      <Box display="flex" flexWrap="wrap">
        <Box>
          <input
            accept="application/pdf"
            id={`upload-pdf-${label}`}
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={handlePdfChange}
            ref={fileInputRef} // Attach the ref here
          />
          <label htmlFor={`upload-pdf-${label}`}>
            <IconButton
              component="span"
              sx={{
                border: "1.5px solid #D8D8D8",
                pr: 30,
                borderRadius: 1.5,
                py: 0.6,
              }}
            >
              <img
                style={{ marginRight: 8 }}
                src={pdfUploadIcon}
                height={22}
                width={22}
                alt="upload icon"
              />
              <span
                style={{
                  fontSize: 14,
                  color: "#44464C",
                  margin: 0,
                  lineHeight: 1,
                  verticalAlign: "middle",
                }}
              >
                Upload
              </span>
            </IconButton>
          </label>
        </Box>

        {selectedPdfs?.map((pdf, index) => {
          const fileName = pdf?.name || getFileNameFromUrl(pdf?.url);

          return (
            <Box sx={{ ml: 2.7, mt: 0.5 }} key={index} position="relative">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1.5px solid #B9BABD",
                  borderRadius: "5px",
                  pl: 1,
                  pr: 3,
                  py: 0.4,
                  color: "var(--secondary)",
                  backgroundColor: "#fbfbfb",
                }}
              >
                <img
                  style={{ marginRight: 3 }}
                  src={fileUploaded}
                  alt="pdf uploaded icon"
                />
                <h6>{fileName}</h6>
              </Box>
              <IconButton
                onClick={() => handleRemovePdf(index)}
                sx={{
                  position: "absolute",
                  top: 5,
                  right: 0,
                  color: "red",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
                size="small"
              >
                <img src={deleteIcon} alt="delete icon" />
              </IconButton>
            </Box>
          );
        })}
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

PdfUploader.propTypes = {
  selectedPdfs: PropTypes.array,
  setSelectedPdfs: PropTypes.func,
  onRemovePdf: PropTypes.func,
  onPdfChange: PropTypes.func,
};

export default PdfUploader;
