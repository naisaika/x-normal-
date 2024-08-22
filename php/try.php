<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>検索ボックス値受け取り</title>
</head>
<body>
    <?php $db = new mysqli('localhost:8889','root','root','areadb'); ?>

    <h2>雇用区分</h2>
        <?php if (!empty($_REQUEST['worktype'])):?>
        <?php $worktypes = $_REQUEST['worktype']; ?>
        <ul>
            <?php foreach ($worktypes as $worktype): ?>
                <li><?php echo htmlspecialchars($worktype, ENT_QUOTES); ?></li>
            <?php endforeach; ?>
        </ul>
        <?php else: ?>
            <p>未選択です</p>
        <?php endif; ?>

    <h2>収入</h2>
        <?php if (!empty($_REQUEST['income'])):?>
        <ul>
            <li><?php echo htmlspecialchars($_REQUEST['income'], ENT_QUOTES); ?></li>
        </ul>
        <?php else: ?>
            <p>未選択です</p>
        <?php endif; ?>

        <?php if (!empty($_REQUEST['incomedetail'])):?>
        <ul>
            <li><?php echo htmlspecialchars($_REQUEST['incomedetail'], ENT_QUOTES); ?>円～</li>
        </ul>
        <?php else: ?>
            <p>未入力です</p>
        <?php endif; ?>

    <h2>最終学歴</h2>
        <?php if (!empty($_REQUEST['academicrecord'])):?>
        <ul>
            <li><?php echo htmlspecialchars($_REQUEST['academicrecord'], ENT_QUOTES); ?></li>
        </ul>
        <?php else: ?>
            <p>未選択です</p>
        <?php endif; ?>    

    <h2>勤務体制</h2>
        <?php if (!empty($_REQUEST['workshift'])):?>
        <?php $workshifts = $_REQUEST['workshift']; ?>
        <ul>
            <?php foreach ($workshifts as $workshift): ?>
                <li><?php echo htmlspecialchars($workshift, ENT_QUOTES); ?></li>
            <?php endforeach; ?>
        </ul>
        <?php else: ?>
            <p>未選択です</p>
        <?php endif; ?>
    
    <h2>休日</h2>
        <?php if (!empty($_REQUEST['offday'])):?>
        <?php $offdays = $_REQUEST['offday']; ?>
        <ul>
            <?php foreach ($offdays as $offday): ?>
                <li><?php echo htmlspecialchars($offday, ENT_QUOTES); ?></li>
            <?php endforeach; ?>
        </ul>
        <?php else: ?>
            <p>未選択です</p>
        <?php endif; ?>

</body>
</html>


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

echo "\n";  
echo json_encode($response);

?>

