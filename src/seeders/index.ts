import cartSeeder from "./cartSeeder";

const promises = [cartSeeder];

export default {
  init: () => Promise.all(promises.map((p) => p())),
};
