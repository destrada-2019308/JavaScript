package modelo;

import config.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ClienteDAO {
    Conexion cn = new Conexion();
    Connection con;
    PreparedStatement ps;
    ResultSet rs;
    int resp;
    
    public Cliente buscar(String dpi){
        Cliente cl = new Cliente();
        String sql  = "select * from cliente where DPICliente = " + dpi;
        try{
            con = cn.Conexion();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                cl.setCodigoCliente(rs.getInt(1));
                cl.setDPICliente(rs.getString(2));
                cl.setNombresCliente(rs.getString(3));
                cl.setDireccionCliente(rs.getString(4));
                cl.setEstado(rs.getString(5));
            }
        }catch(Exception e){
            e.printStackTrace();
        }
        return cl;
    }
    
    public List listarCliente(){
        String sql = "Select * from cliente";
        List<Cliente> listaCliente = new ArrayList<>();
        try{
            con = cn.Conexion();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                Cliente cl = new Cliente();
                cl.setCodigoCliente(rs.getInt(1));
                cl.setDPICliente(rs.getString(2));
                cl.setNombresCliente(rs.getString(3));
                cl.setDireccionCliente(rs.getString(4));
                cl.setEstado(rs.getString(5));
                listaCliente.add(cl);
            }
        }catch(Exception e){
            e.printStackTrace();
        }
        return listaCliente;
    }
    
}
