<?php
    if (!empty( $_FILES)) {

        $user = $_GET[user];

        $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];

        $uploadPath = 'storage' . DIRECTORY_SEPARATOR . $user . DIRECTORY_SEPARATOR . $_FILES[ 'file' ][ 'name' ];

        move_uploaded_file ($tempPath, $uploadPath);

        $answer = array( 'answer' => 'File transfer completed' );
        $json = json_encode( $answer );

        echo $json;
    }

    else {
        echo 'No files';
    }
?>
