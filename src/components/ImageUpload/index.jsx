import React from "react";
import { Box, Typography, IconButton, Snackbar, Alert } from "@mui/material";
import uploadIcon from "../../assets/svg/upload.svg";
import deleteIcon from "../../assets/svg/closeRoundRed.svg";
import fileUploaded from "../../assets/svg/fileLine.svg";
import useSnackbar from "../../hooks/useSnackbar"; // Adjust the import path as needed

const ImageUpload = ({ selectedImages, setSelectedImages, onRemoveImage }) => {
  const {
    snackbarOpen,
    snackbarMessage,
    snackbarSeverity,
    showSnackbar,
    handleCloseSnackbar,
  } = useSnackbar();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = [];

    files.forEach((file) => {
      if (file.size <= 20 * 1024 * 1024) {
        validFiles.push(file);
      } else {
        showSnackbar(`${file.name} exceeds the 20MB size limit.`);
      }
    });

    if (validFiles.length > 0) {
      setSelectedImages((prevImages) =>
        [...prevImages, ...validFiles].slice(0, 3)
      );
    }
  };

  const handleRemoveImage = (index) => {
    const removedImage = selectedImages[index];
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    if (onRemoveImage) {
      onRemoveImage(removedImage);
    }
  };

  function getFileNameFromUrl(url) {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      const fileName = pathname.substring(pathname.lastIndexOf("/") + 1);
      const decodedFileName = decodeURIComponent(fileName);

      // Use regex to remove the unwanted prefix
      const cleanedFileName = decodedFileName.replace(/^\d+_/, "");

      return cleanedFileName;
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
          Upload Image
        </Typography>
      </Box>

      <Box display="flex" flexWrap="wrap">
        {selectedImages.map((image, index) => {
          const fileName = image?.name || getFileNameFromUrl(image?.url);

          return (
            <Box sx={{ mr: 1 }} key={index} position="relative">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1.5px solid #B9BABD",
                  borderRadius: "5px",
                  pl: 1,
                  pr: 3,
                  color: "var(--secondary)",
                  backgroundColor: "#fbfbfb",
                }}
              >
                <img
                  style={{ marginRight: 3 }}
                  src={fileUploaded}
                  alt="file uploaded icon"
                />
                <h6>{fileName}</h6>
              </Box>
              <IconButton
                onClick={() => handleRemoveImage(index)}
                sx={{
                  position: "absolute",
                  top: 2,
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
        {selectedImages.length < 3 && (
          <Box sx={{ mt: -1.2 }}>
            <input
              accept="image/*"
              id="upload-image"
              type="file"
              multiple
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label htmlFor="upload-image">
              <IconButton component="span">
                <img src={uploadIcon} alt="uploadIcon" />
              </IconButton>
            </label>
          </Box>
        )}
      </Box>

      {/* Snackbar for displaying error messages */}
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

export default ImageUpload;
