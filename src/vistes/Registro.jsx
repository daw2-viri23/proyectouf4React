import React, { useState } from 'react';

export function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar los datos en localStorage
    localStorage.setItem('registroData', JSON.stringify(formData));
    // Lógica para enviar los datos al servidor o realizar otras acciones
    console.log('Datos guardados:', formData);
    // Limpiar los campos después de guardar los datos
    setFormData({
      nombre: '',
      apellidos: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full mt-20">
        <h2 className="text-2xl font-semibold mb-6">Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className="border rounded w-full px-3 py-2" placeholder="Nombre" />
          </div>
          <div className="mb-4">
            <label htmlFor="apellidos" className="block text-gray-700 font-semibold mb-2">Apellidos</label>
            <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} className="border rounded w-full px-3 py-2" placeholder="Apellidos" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo electrónico</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border rounded w-full px-3 py-2" placeholder="Correo electrónico" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Contraseña</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="border rounded w-full px-3 py-2" placeholder="Contraseña" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full">Registrarse</button>
        </form>
      </div>
    </div>
  );
}
