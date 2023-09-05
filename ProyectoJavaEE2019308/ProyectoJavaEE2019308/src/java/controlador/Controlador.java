/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import modelo.Cliente;
import modelo.ClienteDAO;
import modelo.Empleado;
import modelo.EmpleadoDAO;
import modelo.Producto;
import modelo.ProductoDAO;
import modelo.Venta;

/**
 *
 * @author informatica
 */
public class Controlador extends HttpServlet {
    EmpleadoDAO empleadoDao = new EmpleadoDAO();
    Empleado empleado= new Empleado();
    Cliente cliente = new Cliente();
    ClienteDAO clienteDao = new ClienteDAO();
    Producto producto = new Producto();
    ProductoDAO productoDao = new ProductoDAO();
    Venta venta = new Venta();
    List<Venta> lista = new ArrayList();
    int codEmpleado;
    int codigoCliente;
    int codigoProducto;
    int item = 0;
    int canti;
    String descripcion;
    double precio, subTotal;
    double totalPagar;
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String menu = request.getParameter("menu");
        String accion = request.getParameter("accion");
        if(menu.equals("Principal")){
            request.getRequestDispatcher("Principal.jsp").forward(request, response);
        }else if(menu.equals("Empleado")){
            switch(accion){
                case "Listar":
                    List listaEmpleados = empleadoDao.listar();
                    request.setAttribute("empleados", listaEmpleados);
                    break;
                    
                case "Agregar":
                    String DPI = request.getParameter("txtDPIEmpleado");
                    String nombre = request.getParameter("txtNombreEmpleado");
                    String telefono = request.getParameter("txtTelefonoEmpleado");
                    String estado = request.getParameter("txtEstadoEmpleado");
                    String usuario = request.getParameter("txtUsuarioEmpleado");
                    empleado.setDPIEmpleado(DPI);
                    empleado.setNombreEmpleado(nombre);
                    empleado.setTelefonoEmpleado(telefono);
                    empleado.setEstado(estado);
                    empleado.setUsuario(usuario);
                    empleadoDao.agregar(empleado);
                    request.getRequestDispatcher("Controlador?menu=Empleado&accion=Listar").forward(request, response);
                    break;
                    
                case "Editar":
                    codEmpleado = Integer.parseInt(request.getParameter("codigoEmpleado"));
                    Empleado e = empleadoDao.listarCodigoEmpleado(codEmpleado);
                    request.setAttribute("empleado", e);
                    request.getRequestDispatcher("Controlador?menu=Empleado&accion=Listar").forward(request, response);
                    break;
                    
                case "Actualizar":
                    String DPIEmp = request.getParameter("txtDPIEmpleado");
                    String nombreEmp = request.getParameter("txtNombreEmpleado");
                    String telefonoEmp = request.getParameter("txtTelefonoEmpleado");
                    String estadoEmp = request.getParameter("txtEstadoEmpleado");
                    String usuarioEmp = request.getParameter("txtUsuarioEmpleado");
                    empleado.setDPIEmpleado(DPIEmp);
                    empleado.setNombreEmpleado(nombreEmp);
                    empleado.setTelefonoEmpleado(telefonoEmp);
                    empleado.setEstado(estadoEmp);
                    empleado.setUsuario(usuarioEmp);
                    empleado.setCodigoEmpleado(codEmpleado);
                    empleadoDao.actualizar(empleado);
                    request.getRequestDispatcher("Controlador?menu=Empleado&accion=Listar").forward(request, response);
                    break;
                    
                case "Eliminar":
                    codEmpleado = Integer.parseInt(request.getParameter("codigoEmpleado"));
                    empleadoDao.eliminar(codEmpleado);
                    request.getRequestDispatcher("Controlador?menu=Empleado&accion=Listar").forward(request, response);
                    break;
            }
            request.getRequestDispatcher("Empleado.jsp").forward(request, response);
        }else if(menu.equals("NuevaVenta")){
            switch(accion){
                case "BuscarCliente":
                    String dpi = request.getParameter("txtCodigoCliente");
                    cliente.setDPICliente(dpi);
                    cliente = clienteDao.buscar(dpi);
                    request.setAttribute("cliente", cliente);
                    break;
                case "BuscarProducto":
                    codigoProducto = Integer.parseInt(request.getParameter("txtCodigoProducto"));
                    producto = productoDao.listarCodigoProducto(codigoProducto);
                    request.setAttribute("producto", producto);
                    request.setAttribute("lista", lista);
                    request.setAttribute("totalPagar", totalPagar);
                    request.setAttribute("cliente", cliente);
                    break;
                case "Agregar":
                    request.setAttribute("cliente", cliente);
                    totalPagar = 0.0;
                    item = item + 1;
                    codigoProducto = producto.getCodigoProducto();
                    descripcion = request.getParameter("txtNombreProducto");
                    precio = Double.parseDouble(request.getParameter("txtPrecio"));
                    canti = Integer.parseInt(request.getParameter("txtCantidad"));
                    subTotal = precio * canti;
                    venta = new Venta();
                    venta.setItem(item);
                    venta.setCodigoProducto(codigoProducto);
                    venta.setDescripcionProd(descripcion);
                    venta.setPrecio(precio);
                    venta.setCantidad(canti);
                    venta.setSubTotal(subTotal);
                    lista.add(venta);
                    for(int i = 0; i <lista.size(); i++){
                        totalPagar = totalPagar +lista.get(i).getSubTotal();
                    }
                    request.setAttribute("totalPagar", totalPagar);
                    request.setAttribute("lista", lista);
                    break;
            }
            request.getRequestDispatcher("NuevaVenta.jsp").forward(request, response);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
