import express from "express";
import { getProducts, createProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// router.get("/", getProducts);
// router.get("/", () => {
//   console.log("here 111");
// });
router.get("/", getProducts);

router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
