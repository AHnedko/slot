<?php

require('../engine/inc/db_class.php');
require('../engine/dbcfg.php');
$db=new DB($hostname, $mysql_login , $mysql_password,$database);

//удаляем гостей 
$timeout=60*60; //таймаут 1 час, все более старые сессии удалим
$db->run("delete from users_tmp where go_time+$timeout<".time());

//уберем просроченные активации
$rows=$db->get_all("select * from activate where exp_time<now()");
if($rows)
  {
  foreach($rows as $row)
    {
    $field=$row['type']==1 ? 'mail': 'phone';
    $db->run("update users set ".$field."_active_status=0 where id=".$row['user_id']);
    }
  $db->run("delete from activate where exp_time<now()");
  }

?>