<%-- 
    Document   : NuevaVenta
    Created on : 29/08/2023, 08:36:22 AM
    Author     : informatica
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <title>Nueva Venta</title>
    </head>
    <body>
        <div class="d-flex">
            <div class="col-sm-4">  
                <div class="card">
                    <form action="Controlador?menu=NuevaVenta" method="POST">
                        <!-- FORMULARIO CLIENTE -->
                        <div class="card-body">
                            <div class="form-group"> 
                                <label>Datos del Cliente</label>
                            </div>
                            <div class="form-group d-flex">
                                <div class="col-sm-6.5 d-flex">
                                    <input type="text" name="txtCodigoCliente" value="" class="form-control" placeholder="Código">
                                    <input type="submit" name="accion" value="BuscarCliente" class="btn btn-outline-info" >
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" name="txtNombresCliente" value="" class="form-control">
                                </div>
                            </div>
                            <!-- FORMULARIO PRODUCTO -->
                            <div class="form-group">
                                <label> Datos Producto </label>
                            </div>
                            <div class="form-group d-flex">
                                <div class="col-sm-6 d-flex">
                                    <input type="text" name="txtCodigoProducto" value="" class="form-control" placeholder="Producto" >
                                    <button type="submit" name="accion" value="BuscarProducto" class="btn-outline-info">Buscar</button>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" name="txtNombreProducto" class="form-control" placeholder="Producto">
                                </div>
                            </div>
                            <div class="form-group d-flex"> 
                                <div class="col-sm-6 d-flex">
                                    <input type="text" name="txtPrecio" value="" class="form-control" placeholder="Q.00.00">
                                </div>
                                <div class="col-sm-3"> 
                                    <input type="text" name="txtCantidad" value="1" class="form-control">
                                </div>
                                <div>
                                    <input type="text" name="txtStock" value="" class="form-control" placeholder="Stock">
                                </div>
                            </div>
                            <!-- AGREGAR REGISTRO -->
                            <div class="form-group"> 
                                <div>
                                    <button type="submit" name="accion" value="Agregar" class="btn-outline-info">Agregar Producto</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-sm-7">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex col-sm-6 mi-auto">
                            <label>Serie No.</label>
                            <input type="text" name="txtNumber" class="form-control"><br>
                        </div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <td><strong>NUMERO</strong></td>
                                    <td><strong>CODIGO</strong></td>
                                    <td><strong>DESCRIPCION</strong></td>
                                    <td><strong>PRECIO</strong></td>
                                    <td><strong>CANTIDAD</strong></td>
                                    <td><strong>SUB-TOTAL</strong></td>
                                    <td><strong>ACCIONES</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td class="d-flex">
                                        <a href="#" class="btn btn-danger" style="margin-left: 10px">Eliminar</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer d-flex">
                        <div class="col-sm-6">
                            <input type="submit" name="accion" value="Generar Venta" class="btn btn-success">
                            <input type="submit" name="accion" value="Cancelar" class="btn btn-danger">
                        </div>
                        <div class="col-sm-6 mi-auto">
                            <input type="text" name="txtTotal" value="Q." class="form-control">
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </body>
</html>
