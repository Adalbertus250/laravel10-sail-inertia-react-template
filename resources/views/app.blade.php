<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
     <head>
         <title>Laravel 10 - Inertia & react template</title>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <link rel="preconnect" href="https://fonts.bunny.net">
         <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
         @vite('resources/js/app.jsx')
         @inertiaHead
     </head>
    <body class="antialiased">
        @inertia
    </body>
</html>
