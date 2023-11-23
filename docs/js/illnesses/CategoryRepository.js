import Category from "./Category.js";

const categories = [
    new Category({id: "knee", label: "Knie"})
];

export default class CategoryRepository {
    get categories() {
        return categories;
    }
}