<?php
	header('content-type:text/ html;charset=utf8;application/json');
	header('Access-Control-Allow-Origin:*'); 
	header('Access-Control-Allow-Headers:content-type');
	date_default_timezone_set("PRC");

	$arrItem = Array
	(
    0 => Array
        (
            'id' => '1',
            'pid' => '0',
            'name' => '测试一',
            'level' => '1',
            'select' => '1',
            '_child_' => Array
                (
                    0 => Array
                        (
                            'id' => '3',
                            'pid' => '1',
                            'name' => '测试一的子类1',
                            'level' => '2',
                            'select' => '1',
                        ),

                    1 => Array
                        (
                            'id' => '4',
                            'pid' => '1',
                            'name' => '测试一的子类2',
                            'level' => '2',
                            '_child_' => Array
                                (
                                    0 => Array
                                        (
                                            'id' => '7',
                                            'pid' => '4',
                                            'name' => '测试一的子类22',
                                            'level' => '3',
                                            'select' => '0',
                                        )

                                )

                        ),

                ),

        ),

    1 => Array
        (
            'id' => '2',
            'pid' => '0',
            'name' => '测试二',
            'level' => '1',
            'select' => '1',
            '_child_' => Array
                (
                    0 => Array
                        (
                            'id' => '6',
                            'pid' => '2',
                            'name' => '测试二的子类1',
                            'level' => '2',
                            'select' => '0',
                        ),

                    1 => Array
                        (
                            'id' => '8',
                            'pid' => '2',
                            'name' => '测试二的子类2',
                            'level' => '2',
                            'select' => '1',
                        ),

                    2 => Array
                        (
                            'id' => '9',
                            'pid' => '2',
                            'name' => '测试二的子类3',
                            'level' => '2',
                            'select' => '0',
                        ),

                    3 => Array
                        (
                            'id' => '10',
                            'pid' => '2',
                            'name' => '测试二的子类4',
                            'level' => '2',
                            'select' => '1',
                        ),

                ),

        ),

    2 => Array
        (
            'id' => '5',
            'pid' => '0',
            'name' => '测试三',
            'level' => '1',
            'select' => '0',
        ),

	);
	echo json_encode($arrItem,JSON_UNESCAPED_UNICODE);
?>