const imgElement = document.querySelector("img");

imgElement.addEventListener("click", () => {
  const inputElement = document.createElement("input");
  inputElement.type = "file";
  inputElement.accept = "image/png, image/jpeg"; // Only allow PNG and JPEG images
  inputElement.click();
  inputElement.addEventListener("change", (event) => {
    const file = event.target.files[0];
    // Use the selected file as needed
    console.log(file);
  });
});
