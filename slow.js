const slow = () => {
  console.log("slow func call");
  for (let i = 0; i < 1e10; i++) {}
  console.log("slow func executed");
};

slow();
