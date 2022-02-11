// QRCODE reader Copyright 2011 Lazar Laszlo
// http://www.webqr.com

var gCtx    = null;
var gCanvas = null;
var c       = 0;
var stype   = 0;
var gUM     = false;
var webkit  = false;
var moz     = false;
var v       = null;

function load(element_id)
{
    if(isCanvasSupported() && window.File && window.FileReader)
    {
        initCanvas(800, 600,element_id);
        qrcode.callback = read;
    }
}

function isCanvasSupported(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

function initCanvas(w,h,id)
{
    gCanvas = document.getElementById(id);
    gCanvas.style.width = w + "px";
    gCanvas.style.height = h + "px";
    gCanvas.width = w;
    gCanvas.height = h;
    gCtx = gCanvas.getContext("2d");
    gCtx.clearRect(0, 0, w, h);
}

function handleFiles(f)
{
    var o=[];
    alert(f)
    for(var i =0;i<f.length;i++)
    {
        var reader = new FileReader();
        reader.onload = (function(theFile) {
            return function(e) {
                gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);

                qrcode.decode(e.target.result);
            };
        })(f[i]);
        reader.readAsDataURL(f[i]);
    }
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function read(a) {
    var mac = a.slice(0,12);
    document.getElementById("result").innerHTML=htmlEntities(mac);
}

function error(error) {
    gUM=false;
    return;
}


