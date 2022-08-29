import { defineStore } from "pinia";
import data from "@/data/data.json";
import { alphabeticalSort, subSrtFunc } from "../utility/utility";

export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [],
  }),
  getters: {},
  actions: {
    setDefauldData() {
      if (!localStorage.products) {
        localStorage.setItem("products", JSON.stringify(data));
        this.products = data;
      } else {
        this.products = JSON.parse(localStorage.products);
      }
    },
    addNewProduct(newProduct) {
      this.products = this.products.concat(newProduct);
      localStorage.products = JSON.stringify(this.products);
    },
    deleteProduct(productId) {
      this.products = this.products.filter((prod) => prod.id !== productId);
      localStorage.products = JSON.stringify(this.products);
      // console.log(this.products);
    },
    sortByIncreasingPrice() {
      this.products = this.products.sort(subSrtFunc("increasing"));
    },
    sortByDecreasingPrice() {
      this.products = this.products.sort(subSrtFunc("decreasing"));
    },
    sortByName() {
      this.products = this.products.sort(alphabeticalSort);
    },
    defaultOrder() {
      this.products = JSON.parse(localStorage.products);
    },
  },
});
