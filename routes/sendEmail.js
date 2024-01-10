const express = require("express");
const sgMail = require("../service/sendgrid");
const router = express.Router();

router.post("/api/send", async (req, res) => {
  const { titulo, nombre, phone, email, mensaje } = req.body;
  console.log(req.body);

  if (!nombre || !titulo || !phone || !email || !mensaje) {
    return res.status(400).send("Faltan datos obligatorios en la solicitud");
  }
  const msg = {
    to: "jhon.macias.dev@gmail.com",
    from: "Solicitud de Servicios <jhonmacias08031994@gmail.com>",
    subject: `Solicitud de servicios de ${titulo}`,
    text: `${titulo}`,
    html: `<h2>Información sobre ${titulo}</h2> <br/>
    <p>Has recibido un mensaje de: <strong>${nombre}</strong><br/> 
    Mensaje: <strong>${mensaje}</strong>.
    <br/>
    <br/>
    Contacto;<br/>
    Email: <strong>${email}</strong><br/>
    Teléfono: <strong>${phone}</strong></p>`,
  };

  try {
    console.log(msg);
    await sgMail.send(msg);
    // console.log("Datos enviados a SendGrid:", msg);
    res
      .status(201)
      .json({ success: true, message: "Email enviado correctamente." });
  } catch (err) {
    console.log(err);
    // Esto sirve para manejar los errores y acatarlos más rapidamente.

    // if (err.response && err.response.body && err.response.body.errors) {
    //   console.log("Errores de SendGrid:", err.response.body.errors);
    // }

    return res.status(500).json({
      success: false,
      message: "Error al enviar el correo electrónico.",
    });
  }
  // console.log("Solicitud manejada correctamente");
});

module.exports = router;
