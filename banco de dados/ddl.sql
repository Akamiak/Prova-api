USE Superheroi;

	
INSERT INTO tb_super_heroi ( id_super_heroi, nm_super_heroi ,ds_super_poder)
value('3' , 'Jason' , 'invulnerabilidade');
    
select id_super_heroi    id,
       nm_super_heroi    nome,
       ds_super_poder    poder,
        bt_voa           voa
	from tb_super_heroi
    where ds_super_poder    = 'invulnerabilidade'
    and bt_voa            = 'não'
    