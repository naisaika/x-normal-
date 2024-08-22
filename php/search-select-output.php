<?php
$db = new mysqli('localhost:8889','root','root','mydb');

error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

if ($db->connect_error) {
    die('Connection failed: ' . $db->connect_error);
}

$data = array();

// フォーカスアイテムのデータを取得
$result = $db->query('SELECT * FROM focusitems');

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $grouptype = $row['grouptype'];
        $grouptypenum = $row['grouptypenum'];
        $name = $row['name'];

        // 各grouptypeごとに配列を作成
        if (!isset($data[$grouptype])) {
            $data[$grouptype] = array();
        }

        $data[$grouptype][] = array('name' => $name, 'grouptypenum' => $grouptypenum);
    }
    $result->free_result();
} else {
    echo $db->error;
}

$response = array();

if (!empty($_REQUEST['selectarea'])) {
    $response['selectareas'] = $_REQUEST['selectarea'];
} else {
    $response['selectareas'] = [];
}

if (!empty($_REQUEST['focus'])) {
    $response['selectfocus'] = $_REQUEST['focus'];
} else {
    $response['selectfocus'] = [];
}

$response['data'] = $data; 
echo json_encode($response);

?>
