import "./form.css";
import { useState } from "react";

function Formkul() {
  // const[enteredName, setEnteredName] = useState('')
  // const[enteredEmail, setEnteredEmail] = useState('')
  // const[enteredMessage, setEnteredMessage] = useState('')

  // function submitMe(e){

  // }

  // const submitHandler = (e) => {
  //     const formEle = document.querySelector("form")
  //     e.prevenDefault()

  //     console.log('submitted')
  //     const formData = new FormData(formEle)
  //     fetch("https://script.google.com/macros/s/AKfycbyKLLvLIcUdDJDeHMxfVIqVjYNPD3QiYopaIX0MulBBVPLYkWaeyvIIk4CPNIvtGe2T/exec", {
  //         method: "POST",
  //         body: formData
  //     })
  // }

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function Submit(e) {
    e.preventDefault();
    const formEle = e.target; // Use e.target to access the form element

    const formData = new FormData(formEle);

    const nama = formData.get("nama");
    const email = formData.get("email");
    const pesan = formData.get("pesan");

    if (!nama || !email || !pesan) {
      setErrorMessage("Please, Isi data dengan lengkap dan benar.");
      return;
    }

    // Clear any previous error messages
    setErrorMessage("");

    console.log("submitted");

    fetch(
      "https://script.google.com/macros/s/AKfycbyKLLvLIcUdDJDeHMxfVIqVjYNPD3QiYopaIX0MulBBVPLYkWaeyvIIk4CPNIvtGe2T/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        // Handle success or further actions here
        setSuccessMessage("Pesan Kamu Berhasil Terkirim!!");

        // Refresh the page after a short delay
        setTimeout(() => {
          window.location.reload();
        }, 2000); // Refresh after 2 seconds
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors here
      });
  }

  return (
    <div>
      <form className="form" onSubmit={(e) => Submit(e)}>
        <div className="form_input">
          <input type="text" name="nama" placeholder="Nama Kamu" />
        </div>
        <div className="form_input">
          <input type="text" name="email" placeholder="Email Kamu" />
        </div>

        <div className="form_input">
          <textarea name="pesan" placeholder="pesan untuk saya"></textarea>
        </div>

        <button className="submit_btn" type="submit">
          Submit
        </button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );

  // return <form className="form" onSubmit={submitHandler}>
  //     <div className="form_input">
  //         <input type="text" name="nama" placeholder="Nama Kamu" value={enteredName} onChange={e=>setEnteredName(e.target.value)}></input>
  //     </div>
  //     <div className="form_input">
  //         <input type="text" name="email" placeholder="Email Kamu" value={enteredEmail} onChange={e=>setEnteredEmail(e.target.value)}></input>
  //     </div>

  //     <div className="form_input">
  //         <textarea name="pesan" placeholder="pesan untuk saya" value={enteredMessage} onChange={e=>setEnteredMessage(e.target.value)}></textarea>
  //     </div>

  //     <button className="submit_btn" type="submit">
  //         Submit
  //     </button>
  // </form>
}

export default Formkul;
