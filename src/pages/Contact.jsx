import React, { useState } from "react";
import Header from "../components/shared/Header";

const Contact = ({ showMenu }) => {
  const [activeTab, setActiveTab] = useState("general");
  const [anonymousComplaint, setAnonymousComplaint] = useState(false);

  // Estados para los formularios
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [complaintForm, setComplaintForm] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    evidence: null
  });

  const [pqrsdfForm, setPqrsdfForm] = useState({
    type: "peticion",
    name: "",
    idNumber: "",
    email: "",
    phone: "",
    subject: "",
    description: ""
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleComplaintChange = (e) => {
    const { name, value } = e.target;
    setComplaintForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePqrsdfChange = (e) => {
    const { name, value } = e.target;
    setPqrsdfForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    setComplaintForm(prev => ({ ...prev, evidence: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    alert("Formulario enviado con éxito");
  };

  return (
    <div className={`py-2 px-2 transition-all duration-300 ${showMenu ? "ml-28" : "ml-0"}`}>
      <Header showMenu={showMenu} />
      
      {/* Hero Section */}
      <section className="bg-[#000031] text-white py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contacta a BSK Motorcycle Team</h1>
          <p className="text-xl md:text-2xl text-[#00ff99]">
            Estamos aquí para ayudarte en lo que necesites
          </p>
        </div>
      </section>

      {/* Pestañas de navegación */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
        <div className="flex flex-wrap border-b border-gray-200">
          {[
            { id: "general", label: "Información General" },
            { id: "complaint", label: "Denuncias Anónimas" },
            { id: "pqrsdf", label: "PQRSDF" },
            { id: "locations", label: "Ubicaciones" }
          ].map(tab => (
            <button
              key={tab.id}
              className={`py-4 px-6 font-medium text-sm md:text-base ${
                activeTab === tab.id 
                  ? "text-[#00ff99] border-b-2 border-[#00ff99]" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido de pestañas */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Información General */}
        {activeTab === "general" && (
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#000031] mb-6">Datos de Contacto</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#000031] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#00ff99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Dirección
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Carrera 5 A No. 36 A Sur 28<br />
                    CP 110431, Bogotá D.C.<br />
                    Colombia
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#000031] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#00ff99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Teléfonos
                  </h3>
                  <p className="text-gray-600 mt-2">
                    <strong>Administrativo:</strong> 312 5192000<br />
                    <strong>Operativo (24/7):</strong> 312 5192000<br />
                    <strong>WhatsApp:</strong> 312 5192000
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#000031] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#00ff99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Correos Electrónicos
                  </h3>
                  <p className="text-gray-600 mt-2">
                    <strong>Institucional:</strong> contacto@bskmt.xyz<br />
                    <strong>Notificaciones judiciales:</strong> notificacionesjudiciales@bskmt.xyz<br />
                    <strong>Correspondencia:</strong> correspondencia@bskmt.xyz
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#000031] flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#00ff99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Horarios de Atención
                  </h3>
                  <p className="text-gray-600 mt-2">
                    <strong>Administrativo:</strong><br />
                    Lunes a Viernes: 8:00 AM - 5:00 PM<br />
                    Sábados: 8:00 AM - 1:00 PM<br />
                    <strong>Operativo:</strong> 24/7 todos los días
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#000031] mb-6">Formulario de Contacto</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                    value={contactForm.name}
                    onChange={handleContactChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                      value={contactForm.email}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Asunto</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                  >
                    <option value="">Seleccione un asunto</option>
                    <option value="membership">Membresías</option>
                    <option value="events">Eventos</option>
                    <option value="courses">Cursos</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                    value={contactForm.message}
                    onChange={handleContactChange}
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#000031] text-white py-3 px-6 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00ff99] transition"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Denuncias Anónimas */}
        {activeTab === "complaint" && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    <strong>Importante:</strong> Las denuncias falsas pueden tener consecuencias legales. Por favor proporcione información veraz.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  name="anonymous"
                  className="h-4 w-4 text-[#00ff99] focus:ring-[#00ff99] border-gray-300 rounded"
                  checked={anonymousComplaint}
                  onChange={() => setAnonymousComplaint(!anonymousComplaint)}
                />
                <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
                  Deseo hacer esta denuncia de forma anónima
                </label>
              </div>

              {!anonymousComplaint && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="complainant-name" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                      type="text"
                      id="complainant-name"
                      name="complainant-name"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                    />
                  </div>
                  <div>
                    <label htmlFor="complainant-contact" className="block text-sm font-medium text-gray-700">Contacto (opcional)</label>
                    <input
                      type="text"
                      id="complainant-contact"
                      name="complainant-contact"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título de la denuncia</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                  value={complaintForm.title}
                  onChange={handleComplaintChange}
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción detallada</label>
                <textarea
                  id="description"
                  name="description"
                  rows="6"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                  value={complaintForm.description}
                  onChange={handleComplaintChange}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Lugar de los hechos</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                    value={complaintForm.location}
                    onChange={handleComplaintChange}
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha aproximada</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                    value={complaintForm.date}
                    onChange={handleComplaintChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="evidence" className="block text-sm font-medium text-gray-700">
                  Evidencia (fotos, videos, documentos)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-[#00ff99] hover:text-[#00805a] focus-within:outline-none"
                      >
                        <span>Subir archivo</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileUpload}
                        />
                      </label>
                      <p className="pl-1">o arrastrar y soltar</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, PDF hasta 10MB</p>
                  </div>
                </div>
                {complaintForm.evidence && (
                  <p className="mt-2 text-sm text-gray-600">
                    Archivo seleccionado: {complaintForm.evidence.name}
                  </p>
                )}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="focus:ring-[#00ff99] h-4 w-4 text-[#00ff99] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    Acepto que la información proporcionada es veraz y me hago responsable de su contenido
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
                >
                  Enviar Denuncia
                </button>
              </div>
            </form>
          </div>
        )}

        {/* PQRSDF */}
        {activeTab === "pqrsdf" && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Nota:</strong> Todos los PQRSDF requieren identificación del solicitante para dar trámite según la ley 1755 de 2015.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Tipo de solicitud</label>
                <div className="mt-1 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { value: "peticion", label: "Petición" },
                    { value: "queja", label: "Queja" },
                    { value: "reclamo", label: "Reclamo" },
                    { value: "sugerencia", label: "Sugerencia" },
                    { value: "denuncia", label: "Denuncia" },
                    { value: "felicitacion", label: "Felicitación" }
                  ].map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`pqrsdf-${option.value}`}
                        name="type"
                        type="radio"
                        value={option.value}
                        checked={pqrsdfForm.type === option.value}
                        onChange={handlePqrsdfChange}
                        className="focus:ring-[#00ff99] h-4 w-4 text-[#00ff99] border-gray-300"
                      />
                      <label htmlFor={`pqrsdf-${option.value}`} className="ml-2 block text-sm text-gray-700">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pqrsdf-name" className="block text-sm font-medium text-gray-700">Nombre completo*</label>
                  <input
                    type="text"
                    id="pqrsdf-name"
                    name="name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                    value={pqrsdfForm.name}
                    onChange={handlePqrsdfChange}
                  />
                </div>
                <div>
                  <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">Número de identificación*</label>
                  <input
                    type="text"
                    id="idNumber"
                    name="idNumber"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                    value={pqrsdfForm.idNumber}
                    onChange={handlePqrsdfChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pqrsdf-email" className="block text-sm font-medium text-gray-700">Correo electrónico*</label>
                  <input
                    type="email"
                    id="pqrsdf-email"
                    name="email"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                    value={pqrsdfForm.email}
                    onChange={handlePqrsdfChange}
                  />
                </div>
                <div>
                  <label htmlFor="pqrsdf-phone" className="block text-sm font-medium text-gray-700">Teléfono*</label>
                  <input
                    type="tel"
                    id="pqrsdf-phone"
                    name="phone"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                    value={pqrsdfForm.phone}
                    onChange={handlePqrsdfChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="pqrsdf-subject" className="block text-sm font-medium text-gray-700">Asunto*</label>
                <input
                  type="text"
                  id="pqrsdf-subject"
                  name="subject"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                  value={pqrsdfForm.subject}
                  onChange={handlePqrsdfChange}
                />
              </div>

              <div>
                <label htmlFor="pqrsdf-description" className="block text-sm font-medium text-gray-700">Descripción detallada*</label>
                <textarea
                  id="pqrsdf-description"
                  name="description"
                  rows="6"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#00ff99] focus:border-[#00ff99]"
                  value={pqrsdfForm.description}
                  onChange={handlePqrsdfChange}
                ></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="pqrsdf-terms"
                    name="pqrsdf-terms"
                    type="checkbox"
                    required
                    className="focus:ring-[#00ff99] h-4 w-4 text-[#00ff99] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="pqrsdf-terms" className="font-medium text-gray-700">
                    Autorizo el tratamiento de mis datos personales según la ley 1581 de 2012 y política de privacidad de BSK Motorcycle Team
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#000031] text-white py-3 px-6 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00ff99] transition"
                >
                  Enviar PQRSDF
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Ubicaciones */}
        {activeTab === "locations" && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-[#000031] mb-4">Oficina Administrativa</h3>
                <p className="text-gray-600 mb-4">
                  Carrera 5 A No. 36 A Sur 28<br />
                  CP 110431, Bogotá D.C.<br />
                  Colombia
                </p>
                <p className="text-gray-600">
                  <strong>Horario:</strong><br />
                  Lunes a Viernes: 8:00 AM - 5:00 PM<br />
                  Sábados: 8:00 AM - 1:00 PM<br />
                  <span className="text-red-500">Cerrado domingos y festivos</span>
                </p>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Mapa interactivo aquí</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <h3 className="text-xl font-bold text-[#000031] mb-4">Centro Operativo</h3>
                <p className="text-gray-600 mb-4">
                  Carrera 7 No. 40 - 25<br />
                  CP 110431, Bogotá D.C.<br />
                  Colombia
                </p>
                <p className="text-gray-600">
                  <strong>Horario:</strong> 24/7 todos los días del año
                </p>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center md:order-1">
                <span className="text-gray-500">Mapa interactivo aquí</span>
              </div>
            </div>

            <div className="bg-[#f0f9ff] border border-[#00ff99] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#000031] mb-4">Puntos de Atención Adicionales</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Sede Norte",
                    address: "Calle 127 #15-32",
                    hours: "Lunes a Viernes 9AM-6PM"
                  },
                  {
                    name: "Sede Sur",
                    address: "Carrera 24 #45-12",
                    hours: "Lunes a Sábado 8AM-4PM"
                  },
                  {
                    name: "Sede Occidente",
                    address: "Diagonal 68 #24-50",
                    hours: "Martes a Viernes 10AM-7PM"
                  }
                ].map((location, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-[#000031]">{location.name}</h4>
                    <p className="text-sm text-gray-600 mt-2">{location.address}</p>
                    <p className="text-sm text-gray-500 mt-1">{location.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;