Drop database if exists DBJavaEEVentas;
Create database DBJavaEEVentas;

Use DBJavaEEVentas;

Create table Cliente(
	codigoCliente int not null auto_increment,
    DPICliente varchar(15) not null,
    nombresCliente varchar(200) not null,
    direccionCliente varchar(150) not null,
    estado varchar(1) not null,
    primary key PK_codigoCliente (codigoCliente)
);

Create table Empleado(
	codigoEmpleado int not null auto_increment,
    DPIEmpleado varchar(15) not null,
    nombreEmpleado varchar(200) not null,
    telefonoEmpleado varchar(8) not null,
    estado varchar(1) not null,
    usuario varchar(15) not null unique,
    primary key PK_codigoEmpleado (codigoEmpleado)
);

Create table Producto(
	codigoProducto int not null auto_increment,
    nombreProducto varchar(200) not null,
    precio double not null,
    stock int not null,
    estado varchar(1) not null,
	primary key PK_codigoProducto (codigoProducto)
);

Create table Venta(
	codigoVenta int not null auto_increment,
    numeroSerie varchar(255) not null,
    fechaVenta date not null,
    monto double not null,
    estado varchar(1) not null,
    codigoCliente int not null,
    codigoEmpleado int not null,
    primary key PK_codigoVenta (codigoVenta),
    constraint FK_Venta_Cliente foreign key (codigoCliente)
		references Cliente(codigoCliente),
	constraint FK_Venta_Empleado foreign key(codigoEmpleado)
		references Empleado(codigoEmpleado)
);

Create table DetalleVenta(
	codigoDetalleVenta int not null auto_increment,
    codigoProducto int not null,
    cantidad int not null,
    precioVenta double not null,
    codigoVenta int not null,
    primary key PK_codigoDetalleVenta(codigoDetalleVenta),
    constraint FK_DetalleVenta_Producto foreign key(codigoProducto)
		references Producto(codigoProducto),
	constraint FK_DetalleVenta_Venta foreign key(codigoVenta)
		references Venta(codigoVenta)
);

-- --------------------- Ingreso de datos --------------------
Insert into Cliente (DPICliente, nombresCliente, direccionCliente, estado)
	values('1276548791010','Pedro Armas','Mixco, Guatemala','1');
Insert into Cliente (DPICliente, nombresCliente, direccionCliente, estado)
	values('1234567891010','Luis Olmedo','Guatemala, Guatemala','1');
Insert into Cliente (DPICliente, nombresCliente, direccionCliente, estado)
	values('1234567891010','Jorge Tala','Scatepéquez, Guatemala','1');
Insert into Cliente (DPICliente, nombresCliente, direccionCliente, estado)
	values('4567891231010','Mario Rodríguez','Villa Nueva, Guatemala','1');

Insert into Empleado (DPIEmpleado, nombreEmpleado, telefonoEmpleado, estado, usuario)
	values ('1234567891010','Pedro Hernández','12345678','1','phernandez01');
Insert into Empleado (DPIEmpleado, nombreEmpleado, telefonoEmpleado, estado, usuario)
	values ('4567891231010','Rony Gordinez','45667899','1','rgordinez02');
Insert into Empleado (DPIEmpleado, nombreEmpleado, telefonoEmpleado, estado, usuario)
	values ('6549872110105','Palermo Tulio','78996654','1','palermo12');
Insert into Empleado (DPIEmpleado, nombreEmpleado, telefonoEmpleado, estado, usuario)
	values ('9632587411010','Julio Verne','45665781','1','jvenee21');
Insert into Empleado (DPIEmpleado, nombreEmpleado, telefonoEmpleado, estado, usuario)
	values ('123','Julio Verne','45665781','1','jvenee213');
    Insert into Empleado (DPIEmpleado, nombreEmpleado, telefonoEmpleado, estado, usuario)
	values ('123','Diego Estrada','123','1','destrada');

Insert into Producto (nombreProducto, precio, stock, estado) 
	values ('Mouse',120.50,60,'1');
Insert into Producto (nombreProducto, precio, stock, estado) 
	values ('Monitor',45.20,50,'1');
Insert into Producto (nombreProducto, precio, stock, estado) 
	values ('Teclado',550.20,50,'1');
Insert into Producto (nombreProducto, precio, stock, estado) 
	values ('Pantalla amoled',785.5,50,'1');
Insert into Producto (nombreProducto, precio, stock, estado) 
	values ('Silla',542.60,50,'1');
    
select * from empleado where usuario = 'palermo12' and DPIEmpleado = '6549872110105';

select * from Empleado;

delete from Empleado where codigoEmpleado = 1;