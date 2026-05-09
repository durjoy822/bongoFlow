<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Admin Panel</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.umd.min.js"></script>


{{-- <script>
    window.$ = window.jQuery = jQuery;
</script> --}}
     @vite([

        'resources/js/admin.js',
        'resources/assets/admin/admin.css',
        'resources/assets/admin/admin.js'
    ])

    @inertiaHead

</head>

<body>

    @inertia

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

</body>

</html>
