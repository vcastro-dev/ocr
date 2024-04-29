import { createWorker } from "tesseract.js";

(async () => {
  const worker = await createWorker("por");
  const ret = await worker.recognize("./public/rg.jpg");
  console.log(ret.data.text);
  await worker.terminate();
})();
