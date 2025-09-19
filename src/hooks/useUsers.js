import { UsersContext } from "@context/UsersContext";
import { useContext } from "react";

export const useUsers = () => useContext(UsersContext);
