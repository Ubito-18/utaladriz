import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("¡Mensaje enviado!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error.text); // Muestra el mensaje de error
        alert("Oops! Algo salió mal, por favor intenta de nuevo.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 text-stone-700 text-center">
            {" "}
            Contáctame
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-stone-900/20 rounded px-4 py-3 text-stone-950 transition focus:outline-none focus:border-teal-500 focus:bg-teal-500/5"
                placeholder="Nombre..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-stone-900/20 rounded px-4 py-3 text-stone-950 transition focus:outline-none focus:border-teal-500 focus:bg-teal-500/5"
                placeholder="ejemplo@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-stone-900/20 rounded px-4 py-3 text-stone-950 transition focus:outline-none focus:border-teal-500 focus:bg-teal-500/5"
                placeholder="Tu mensaje..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(0,0,0,100)] hover:bg-teal-700 hover:text-gray-100"
            >
              Enviar
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};