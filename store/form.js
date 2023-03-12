function hadeh(){
  var namamu = (document.form1.nama.value);
  var emailmu = (document.form1.email.value);
  var pesanmu = (document.form1.pesan.value);
  var notemu = (document.form1.note.value);
  var jumlahbarang = (document.form1.quantity.value);
  var total = jumlahbarang * pesanmu
  
  document.form1.ynama.value = namamu;
  document.form1.yemail.value = emailmu;
  document.form1.ypesan.value = pesanmu;
  document.form1.ynote.value = notemu;
  document.form1.ytotal.value = total;
  
}

// function hitungPesan(){
//   var myForm = document.form1; 
//   var bakso = 12000 eval(myForm.menu1.value);
//   var  soto = 5000 eval(myForm.menu2.value);
//   var mie = 4000 eval(myForm.menu3.value);
//   var degan = 15000 eval(myForm.menu4.value);

//   if (hasil > 50000) {
//   myForm.Total.value = hasil; 
//   myForm.Diskon.value = 10000;
//   myForm.Bayar.value = hasil - 10000;
//   } else {
//   myForm.Total.value = hasil; 
//   myForm.Diskon.value = 0;
//   myForm.Bayar.value = hasil - 0;
//   }

// myForm.bayar1.value = bakso;
// myForm.bayar1.value = soto;
// myForm.bayar1.value = mie;
// myForm.bayar1.value = degan;
// }