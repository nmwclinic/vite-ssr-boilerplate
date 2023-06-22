export function formatRupiah(...number) {
  let number_string = number.toString()
  const sisa = number_string.length % 3
  let rupiah = number_string.substr(0, sisa)
  const ribuan = number_string.substr(sisa).match(/\d{3}/g)

  if (ribuan) {
    const separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  return 'Rp. ' + rupiah
}