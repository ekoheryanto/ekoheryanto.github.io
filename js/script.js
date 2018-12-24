// event link
$('.page-scroll').on('click', function(e){

//ambil isi href
var tujuan = $(this).attr('href');

//menangkap element tujuan
var elementtuju = $(tujuan);

//perpindahan scroll
$('html,body').animate({

	scrollTop: elementtuju.offset().top - 50

},1300 ,'swing'); //untuk pilih transisi lihat jquery easing

e.preventDefault();
});
