export const fetchEthnicities = () => (
  $.ajax({
    method: "GET",
    url: "/api/ethnicities"
  })
);
