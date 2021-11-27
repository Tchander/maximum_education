import axios from "axios";
import { CITIES_URL } from "@/const";

export const getCities = async () => await axios.get(CITIES_URL);
