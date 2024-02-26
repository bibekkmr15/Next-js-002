"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();

  // Function to trigger click on the file input
  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    // Retrieve the selected file from the input
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    // Use FileReader to read the selected file as a data URL
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    // Set pickedImage with the data URL once the file is read
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        {/* Button to trigger the file input click */}
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
