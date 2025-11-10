import React, { createContext, useState, ReactNode, useEffect } from "react";
import { MenuItem } from "../types";
import { v4 as uuidv4 } from "uuid";

type MenuContextType = {
  menu: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, "id">) => void;
  removeItem: (id: string) => void;
};

export const MenuContext = createContext<MenuContextType>({
  menu: [],
  addMenuItem: () => {},
  removeItem: () => {},
});

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const initialMenu: MenuItem[] = [
    { id: uuidv4(), name: "Tomato Soup", description: "Fresh homemade soup", course: "Starters", price: 50 },
    { id: uuidv4(), name: "Grilled Steak", description: "Served with veggies", course: "Mains", price: 180 },
    { id: uuidv4(), name: "Chocolate Cake", description: "Rich and moist", course: "Desserts", price: 70 },
  ];

  // Try load from localStorage on web, otherwise use initialMenu
  const loadInitial = (): MenuItem[] => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const raw = localStorage.getItem("menu");
        if (raw) return JSON.parse(raw) as MenuItem[];
      }
    } catch (e) {
      // ignore and fall back
    }
    return initialMenu;
  };

  const [menu, setMenu] = useState<MenuItem[]>(loadInitial);

  // Persist to localStorage if running on web
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("menu", JSON.stringify(menu));
      }
    } catch (e) {
      // ignore persistence errors
    }
  }, [menu]);

  const addMenuItem = (item: Omit<MenuItem, "id">) => {
    const newItem = { id: uuidv4(), ...item };
    setMenu((prev) => [...prev, newItem]);
  };

  const removeItem = (id: string) => {
    setMenu((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menu, addMenuItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};
