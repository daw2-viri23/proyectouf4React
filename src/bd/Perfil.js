// Perfil.js
import { supabase } from '/src/bd/supabase.js';

export class Perfil {
  static async registrarUsuario(email, password, nombre, apellidos) {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      // Ahora que el usuario está registrado en la autenticación de Supabase,
      // puedes insertar su información en la tabla de perfiles
      const { data, error: insertError } = await supabase
        .from('perfiles')
        .insert({
          id: user.id, // Usa el ID proporcionado por Supabase Auth
          email,
          nombre,
          apellidos,
        });

      if (insertError) {
        throw insertError;
      }

      return data ? new Perfil(data[0]) : null;
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
      throw error;
    }
  }

  static async iniciarSesion(email, password) {
    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      // Retorna el usuario autenticado
      return user;
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      throw error;
    }
  }

  static async obtenerPerfilPorUsuario(userId) {
    try {
      const { data, error } = await supabase
        .from('perfiles')
        .select('*')
        .eq('id', userId)
        .single();
  
      if (error) {
        throw error;
      }
  
      return data;
    } catch (error) {
      console.error("Error al obtener perfil por usuario:", error.message);
      throw error;
    }
  }
}
