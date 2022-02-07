<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
        <title>ギャラリー</title>
        <link rel="stylesheet" type="text/css" href="assets/css/reset.css">
        <link rel="stylesheet" type="text/css" href="assets/css/style.css">
        <link rel="stylesheet" type="text/css" href="assets/css/lightbox.min.css">
</head>
    <body>
        <header>
            <a href="https://saigahiroki.com/"><h1>SAIGA HIROKI</h1></a>
        </header>
        <main class="container">
            <?php
                $images = array_reverse(glob('./assets/app/images/*'));
                foreach($images as $image) {
                    echo '<a href="', $image, '" data-lightbox="images" data-title="', basename($image), '"><img src="', $image, '" alt="', basename($image), '" loading="lazy"></a>';
                }
            ?>
            <div id="modal" class="hidden">
                <div id="modal-content">
                    <img id="modal-image" src="">
                </div>
            </div>
        </main>
        <script src="assets/js/lightbox-plus-jquery.min.js" type="text/javascript"></script>
        <script>
            lightbox.option({
                'disableScrolling': true,
                'resizeDuration': 200,
                'showImageNumberLabel': false,
                'wrapAround': true
            })
        </script>
    </body>
</html>