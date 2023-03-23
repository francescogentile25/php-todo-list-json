<?php 
    $todo_string = file_get_contents('./database.json');
    
    $todo_list = json_decode($todo_string, true);
    // $risp =[
    //     'results' => $todo_list,
    //     'sucess' => true,
    // ];
    $new_task = isset($_POST['todo']) ? $_POST['todo'] :  null;
    if($new_task !== null){
        $todo_list[] = $new_task;
    }
    $new_array_string = json_encode($todo_list);
    file_put_contents('./database.json', $new_array_string);
    header('Content-Type: application/json');
    echo $new_array_string;
?>