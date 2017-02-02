export const fetchProfile = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/profiles/${id}`
  })
);

export const createProfile = (data) => (
  $.ajax({
    method: 'POST',
    url: `/api/profiles/`,
    data: data
  })
);
