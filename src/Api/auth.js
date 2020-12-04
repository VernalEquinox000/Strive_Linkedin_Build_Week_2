export default {
  fetchProfile: async (id, callbak) => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/profile/"+id;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      });

      const data = await response.json();
      callbak(data);

      console.log(this.state.profile.username);
    } catch (err) {
      console.log(err);
    }
  },
};
