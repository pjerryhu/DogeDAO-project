import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x4f6A958443A698222aBAd7E9e06C286C2948019d",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Doge Membership Sunglasses",
        description: "This NFT will give you access to Doge DAO!",
        image: readFileSync("scripts/assets/doge.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
