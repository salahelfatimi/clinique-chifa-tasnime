import * as React from "react";

export const EmailTemplate = ({
  fullName,
  email,
  Phone,
  service,
  date,
  comment,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
    <h2 style={{ color: "#0276FF" }}>Nouvelle demande de rendez-vous</h2>
    <p>Vous avez reçu une nouvelle demande de rendez-vous via le site <strong>Clinique Chifa Tasnime</strong>.</p>
    <hr style={{ border: "1px solid #ddd" }} />
    <div style={{ marginBottom: "20px" }}>
      <p><strong>Nom complet :</strong> {fullName}</p>
      <p><strong>Email :</strong> {email || "Email non fourni par le client"}</p>
      <p><strong>Téléphone :</strong> {Phone || "Téléphone non fourni par le client"}</p>
      <p><strong>Service demandé :</strong> {service || "Non spécifié"}</p>
      <p><strong>Date souhaitée :</strong> {date || "Non spécifiée"}</p>
      <p><strong>Message :</strong> {comment || "Aucun message fourni par le client"}</p>
    </div>
    <hr style={{ border: "1px solid #ddd" }} />
    <p style={{ fontSize: "14px", color: "#555" }}>
      Cet email a été généré automatiquement par le site Clinique Chifa Tasnime.
    </p>
  </div>
);