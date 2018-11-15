<!DOCTYPE html>
<html class="loading" lang="{{getLocale()}}" data-textdirection="ltr">
<head>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">

    <!-- Put your site keywords here... -->
    <meta name="keywords" content="{{config('app.keywords')}}">

    <!-- Put your description here... -->
    <meta name="description" content="{{config('app.description')}}">

    <title>@yield('page.name') | {{config('app.name')}}</title>

    <!-- BEGIN FAVICON -->
    <link rel="shortcut icon" type="image/x-icon" href="{{config('app.shortcut_icon') ?: asset('/images/icon/favicon.ico')}}">
    <!-- END FAVICON -->


    <!-- BEGIN FONT CSS -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Quicksand:300,400,500,700" rel="stylesheet">
    <link href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css" rel="stylesheet">
    <!-- END FONT CSS -->

    <!-- BEGIN APPLICATION CSS-->
    <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/pages/authentication.css')}}">
    <!-- END APPLICATION CSS-->

    @include('includes.scripts')

</head>
<body class="vertical-layout vertical-menu 1-column  bg-info menu-expanded blank-page blank-page"
      data-open="click" data-menu="vertical-menu" data-col="1-column">

    <div id="particles-js"></div>

    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-body">
                @yield('page.body')
            </div>
        </div>
    </div>

    <!-- BEGIN APPLICATION LIBRARIES -->
    <script src="{{asset('js/app.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/pages/authentication/script.js')}}" type="text/javascript"></script>
    <!-- END APPLICATION LIBRARIES -->

    <!-- BEGIN PAGE SPECIFIC JS -->
    @stack('scripts')
    <!-- END PAGE SPECIFIC JS -->
</body>
</html>
