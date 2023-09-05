package modelo;

import config.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ProductoDAO {
    Conexion cn = new Conexion();
    Connection con;
    PreparedStatement ps;
    ResultSet rs;
    int resp;
    
    public List listar(){
        String sql = "Select * from Producto";
        List<Producto> listaProducto = new ArrayList<>();
        try{
            con = cn.Conexion();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                Producto product = new Producto();
                product.setCodigoProducto(rs.getInt(1));
                product.setNombreProducto(rs.getString(2));
                product.setPrecio(rs.getDouble(3));
                product.setStock(rs.getInt(4));
                product.setEstado(rs.getString(5));
                listaProducto.add(product);
            }
        }catch(Exception e){
            e.printStackTrace();
        }
        return listaProducto;
    }
    
    //Listar por código
    public Producto listarCodigoProducto(int id){
        //Instanciar un objeto de tipo Producto
        Producto prod = new Producto();
        String sql = "select * from Producto where codigoProducto = " +id;
        try {
            con = cn.Conexion();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()){
                prod.setCodigoProducto(rs.getInt(1));
                prod.setNombreProducto(rs.getString(2));
                prod.setPrecio(rs.getDouble(3));
                prod.setStock(rs.getInt(4));
                prod.setEstado(rs.getString(5));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return prod;
    }
}
