// Importa la clase Perfil desde el archivo 'Perfil.js'
import { Perfil } from '/src/bd/Perfil.js';

// Tu componente de registro
export function Registro() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const nombre = formData.get('nombre');
    const apellidos = formData.get('apellidos');
    
    try {
      // Registrar usuario usando la clase Perfil
      const perfil = await Perfil.registrarUsuario(email, password, nombre, apellidos);
      console.log('Usuario registrado con éxito:', perfil);
      // Limpiar los campos después de registrar el usuario
      // Aquí puedes agregar lógica para redirigir al usuario a otra página, etc.
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Aquí van los campos del formulario (email, password, nombre, apellidos) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input type="email" name="email" placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input type="password" name="password" placeholder="Contraseña" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input type="text" name="nombre" placeholder="Nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidos">
            Apellidos
          </label>
          <input type="text" name="apellidos" placeholder="Apellidos" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}
