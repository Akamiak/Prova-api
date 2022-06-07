Const (con) = await mysql.createConection({
    host: '',
    user: '',
    password: '',
    database: ''
});
//continuar em casa


Const (con) = await mysql.Conection({
    host: Process.env.mysql_host,
    user: Process.env.mysql_user,
    password: Process.env.mysql_pwd,
    database: Process.env.mysql_BD
})