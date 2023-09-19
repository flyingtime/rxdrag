import { Identifier } from "../dnd";
import { IMenuItemMeta } from "./menu";

//设计器用的Schema
export interface IMenuItemSchema<Config = unknown> {
  meta: IMenuItemMeta<Config>,
  collapsed?: boolean,
  children?: Identifier[],
  parentId?: Identifier,
}

export interface IMenuSchema {
  rootIds: Identifier[],
  items: IMenuItemSchema[]
}