$(document).ready(function(){
    
    $(window).resize();
    $('.scrollbar-inner').scrollbar();
    // alert('we are heere');
});


// select payment option toggle
function select_payment() {

    if (document.getElementById('opt_commission').checked) {
      $(".commission-container").removeClass("d-none");
      $(".remmitance-container").addClass("d-none");
      $("#opt_remmitance").checked = false;
    } else if (document.getElementById('opt_remmitance').checked) {
      $(".commission-container").addClass("d-none");
      $(".remmitance-container").removeClass("d-none");
      $("#opt_commission").checked = false;

    }
  }


// populate create invoice form
  
$('body').on('click','.add_invoice', function(e){
	e.preventDefault();
	var the_form=$(this).parent().parent().parent().parent().parent();
	var theIndex=the_form.index();
	AddInvoice(theIndex);
	// $(this).addClass('d-none');
});

function AddInvoice(theIndex) {
  var cln = document.getElementById("group_form").cloneNode(true);
	document.getElementsByClassName('group-invoice')[0].appendChild(cln);	
	
	var new_index = theIndex+1;
	$(".group_form").eq(new_index).find('input:text, input:password, input:file, input, select, textarea').val('');
	$(".group_form").eq(new_index).find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
  $(".group_form").eq(new_index).find('.add_invoice').removeClass('d-none');
  
  
}

// filter bank transactions 
$('.all-transactions').on('click', function(){
  $('#revenue-by-bank').removeClass('d-none');
  $('#revenue-by-bank-debited').addClass('d-none');
  $('#revenue-by-bank-credited').addClass('d-none');
});

$('.debited-transactions').on('click', function(){
	$('#revenue-by-bank').addClass('d-none');
  $('#revenue-by-bank-debited').removeClass('d-none');
  $('#revenue-by-bank-credited').addClass('d-none');
});

$('.credited-transactions').on('click', function() {
  $('#revenue-by-bank').addClass('d-none');
  $('#revenue-by-bank-credited').removeClass('d-none');
  $('#revenue-by-bank-debited').addClass('d-none');

});

// upload image (add-product)
var loadFile = function(event) {
  var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
};