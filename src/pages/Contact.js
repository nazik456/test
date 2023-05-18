import "./Contact.css";

export default function Contact(){
  return(
    <div className="Contacts">
    <h1>Contact Us</h1>
    <p>Get in touch with us for any inquiries or feedback.</p>
 
    <h2>Phone:</h2>
    <p>Call us at +996 (505) 500-273.</p>
    
    <h2>Address:</h2>
    <p>
              Address:{" "}
              <a href="https://goo.gl/maps/VeQdviXxBjLxcnMh6">
                {" "}
                st. Pushkina, 10, Moscow
              </a>
            </p>
   
  </div>
  )
}
