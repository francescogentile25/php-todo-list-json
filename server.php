<?php 
    $todo_string = file_get_contents('./database.json');
    header('Content-Type:application/json');
    $todo_list = json_decode($todo_string,true);
    $risp =[
        'results' => $todo_list,
        'sucess' => true,
    ];
    echo json_encode( $risp);
?>