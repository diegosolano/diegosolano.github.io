$(document).ready(function () {

    // QRCODE reader Copyright 2011 Lazar Laszlo
    // http://www.webqr.com

    var c       = 0;
    var stype   = 0;
    var gUM     = false;
    var webkit  = false;
    var moz     = false;
    var v       = null;

    function handleFiles(f)
    {
        var o=[];
        for(var i =0;i<f.length;i++)
        {
            var reader = new FileReader();
            reader.onload = (function(theFile) {
                return function(e) {
                    qrcode.decode(e.target.result);
                };
            })(f[i]);
            reader.readAsDataURL(f[i]);
        }
    }

    function read(a) {
        var mac = a.slice(0,12);
        $('#mac_addr').text(mac);
    }

    function error(error) {
        gUM=false;
        return;
    }

    $('#photo_of_mac').change(function() {
        file = $(this).prop('files');
        handleFiles(file)
    });

    qrcode.callback = read;
});
