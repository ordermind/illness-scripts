import Region from "./Region.js";

const regions = [
    new Region({id: "back", label: "Rug"}),
    new Region({id: "hip", label: "Heup"}),
    new Region({id: "knee", label: "Knie"})
];

export default class RegionRepository {
    get regions() {
        return regions;
    }
}