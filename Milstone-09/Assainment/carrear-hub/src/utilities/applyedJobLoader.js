import { getShoppingCart } from "./fakedb";

const applayedJobLoader = async () => {
  const allJobs = await fetch("jobs.json");
  const jobs = await allJobs.json();
  const applayedJobs = getShoppingCart();
  const saveJobs = [];
  for (const id in applayedJobs) {
    const exits = jobs.find((job) => job.id == id);

    if (exits) {
      saveJobs.push(exits);
    }
  }
  return saveJobs;
};

export default applayedJobLoader;
