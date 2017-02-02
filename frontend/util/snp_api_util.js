export const fetchSnp = (id) => {
  $.ajax({
    method: 'GET',
    url: `/api/snps/${id}`
  });
};
