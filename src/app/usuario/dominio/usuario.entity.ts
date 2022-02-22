export interface UsuarioEntity {
  id: number | string;
  nombre: string;
  correo: string;
  contrasena: string;
  roles: any[];
}
