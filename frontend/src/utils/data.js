export const userQuery = (userId) => {
  const query = `*[_type == 'user' && _id == '${userId}']`; // sanity query(GROQ)

  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
    image {
      asset -> {
        url
      }
    },
    _id,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[] {
      _key,
      postedBy -> {
        _id,
        userName,
        image
      },
    },
  }`;

  return query;
};

export const feedQuery = `*[_type == 'pin'] | order(_createAt desc) {
  image {
      asset -> {
        url
      }
    },
    _id,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[] {
      _key,
      postedBy -> {
        _id,
        userName,
        image
      },
    },
}`;